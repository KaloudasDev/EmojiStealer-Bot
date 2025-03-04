# 🔒 **Emoji Stealer Bot**

**Description:**  
- The **Emoji Stealer Bot** is a Discord bot designed to effortlessly steal emojis from other servers and add them to your own. It enables users with the necessary permissions to transfer emojis quickly, making it a convenient tool for server admins and emoji enthusiasts.

**Features:**  
- Steal and add emojis to your server  
- Customizable role-based access for emoji stealing  
- Set cooldown time to prevent spamming  
- Professional Discord embeds for logs  
- Clean, simple, and effective bot design  

**Credits:**  
- This bot was developed by Kaloudas. Special thanks to all contributors and the Discord community for their support and valuable feedback.  

**License:**  
- This project is open-source and available under the GNU General Public License v3.0.  

---

## ⚙️ **Setup Instructions:**

To set up **Emoji Stealer Bot** on your own Discord server, follow these steps:

### 1️⃣ **Clone the Repository**  
Clone the repository to your local machine using the following command:  
```sh
git clone https://github.com/KaloudasDev/EmojiStealer-Bot
```

### 2️⃣ **Install Dependencies**  
Navigate to the project folder and install the required dependencies:  
```sh
npm install discord.js@latest dotenv
```

### 3️⃣ **Set Up Environment Variables**  
Create a `.env` file in the root directory and add the following:  
```sh
TOKEN=YOUR_BOT_TOKEN_HERE
COOLDOWN_MINUTES=COOLDOWN_TIME_HERE
ROLE_IDS=YOUR_ROLE_IDS_HERE
ALLOW_ADMIN_COMMANDS=true_or_false
```

- **`TOKEN`**: This is your bot's Discord token. Replace it with your actual bot token.
- **`COOLDOWN_MINUTES`**: This variable defines the cooldown period between commands (in minutes).
- **`ROLE_IDS`**: A comma-separated list of role IDs that are allowed to use the bot for stealing emojis.
- **`ALLOW_ADMIN_COMMANDS`**: Set this to `true` if you want to allow admins to use certain commands; `false` otherwise.

### 4️⃣ **Run the Bot**  
To start the bot, use the following command:  
```sh
node index.js
```

### 5️⃣ **Add the Bot to Your Server**  
Go to the [Discord Developer Portal](https://discord.com/developers/applications), find your bot’s application, and use the OAuth2 link to add it to your server.

---

## 🔗 **Contact Links:**  
- **Developer's Discord Profile:** [Kaloudas](https://discordlookup.com/user/1069279857072160921)  
- **NobleCraft Studios:** [Join Discord](https://discord.gg/noblecraft)  
- **Developer's Email:** [kaloudasdev@gmail.com](mailto:kaloudasdev@example.com)
