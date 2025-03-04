const { PermissionsBitField } = require('discord.js');
const cooldowns = new Map();
const cooldownTime = process.env.COOLDOWN_MINUTES * 60 * 1000;
const allowedRoles = process.env.ROLE_IDS.split(',');
const allowAdminCommands = process.env.ALLOW_ADMIN_COMMANDS === 'true';

async function handleEmojiSteal(message) {
    if (!message.content.startsWith('!steal') || message.author.bot) return;

    const hasPermission = allowedRoles.some(roleId => message.member.roles.cache.has(roleId));

    if (!allowAdminCommands && message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        return message.reply('🚫 **Your account does not meet the required permissions to execute this command. Please contact a system administrator for further assistance.**');
    }

    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator) && !hasPermission) {
        return;
    }

    const args = message.content.split(' ').slice(1);
    if (args.length < 1 || args.length > 10) {
        return message.reply('❌ **Usage:** `!steal :emoji1: :emoji2: ... (up to 10)`');
    }

    const emojiRegex = /<(a?):(\w+):(\d+)>/g;
    const matches = [...message.content.matchAll(emojiRegex)];

    if (matches.length === 0) {
        return message.reply('❌ **Invalid emoji format. Please provide custom emojis.**');
    }

    const userCooldown = cooldowns.get(message.author.id);
    const now = Date.now();

    if (userCooldown && now - userCooldown < cooldownTime) {
        const timeLeft = Math.ceil((cooldownTime - (now - userCooldown)) / 1000);
        return message.reply(`❌ **Please wait ${timeLeft} seconds before using this command again.**`);
    }

    cooldowns.set(message.author.id, now);

    message.reply('✅ **Emojis added successfully!**');

    let addedEmojis = [];
    for (const match of matches.slice(0, 10)) {
        const animated = match[1] === 'a';
        const name = match[2];
        const id = match[3];
        const url = `https://cdn.discordapp.com/emojis/${id}.${animated ? 'gif' : 'png'}`;

        try {
            await message.guild.emojis.create({ attachment: url, name });
            addedEmojis.push(name);
        } catch (error) {
            console.error(error);
            return message.reply('❌ **An error occurred while adding the emojis. Please contact a system administrator or developer for assistance.**');
        }
    }
}

module.exports = { handleEmojiSteal };
