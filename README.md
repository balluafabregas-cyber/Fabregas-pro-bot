# 🤖 Fabregas-Pro-Bot - WhatsApp Automation Bot

> **MADE IN BY BALLUA FABREGAS** ✨

## 📱 About

**Fabregas-Pro-Bot** is a powerful WhatsApp automation bot with **200+ commands** for entertainment, utilities, media handling, automation, and more!

### 🎯 Features

✅ **200+ Commands** organized by categories  
✅ **Media Handling** (VV, VCF, images, videos, stickers)  
✅ **Entertainment** (games, jokes, riddles, memes)  
✅ **Utilities** (calculator, converter, weather, news)  
✅ **Automation** (scheduler, reminders, tasks)  
✅ **Admin Tools** (moderation, user management)  
✅ **AI Chat** (conversational responses)  
✅ **Social Media Downloads** (TikTok, Instagram, YouTube)  
✅ **Database Support** (SQLite)  
✅ **Easy to Extend** (plugin system)  

---

## 🔧 Tech Stack

- **Node.js + Baileys** - WhatsApp Web automation
- **Python** - Advanced NLP & AI processing
- **SQLite** - User data & preferences
- **Express.js** - API server (optional)

---

## 📋 Command Categories

1. **Entertainment** - Games, jokes, riddles, memes
2. **Utilities** - Calculator, converter, weather
3. **Media** - Sticker maker, image editor, video downloader
4. **Admin** - Moderation, user management
5. **Automation** - Scheduler, reminders
6. **Education** - Dictionary, translations
7. **AI Chat** - Conversational AI
8. **Social Media** - Platform downloaders
9. **Info & Data** - Wikipedia, quotes, facts
10. **Creative** - ASCII art, text effects

---

## 🚀 Quick Start

### Prerequisites

- Node.js v16+
- Python 3.8+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/balluafabregas-cyber/Fabregas-Pro-Bot.git
cd Fabregas-Pro-Bot

# Install dependencies
npm install

# Configure your bot
cp config.example.js config.js
# Edit config.js with your settings

# Start the bot
node index.js
```

---

## 📁 Project Structure

```
Fabregas-Pro-Bot/
├── index.js                 # Main bot entry point
├── config.js                # Configuration file
├── package.json             # Node.js dependencies
├── requirements.txt         # Python dependencies
│
├── src/
│   ├── handlers/            # Command handlers
│   │   ├── entertainment.js
│   │   ├── utilities.js
│   │   ├── media.js
│   │   ├── admin.js
│   │   ├── automation.js
│   │   ├── education.js
│   │   ├── aichat.js
│   │   └── social.js
│   │
│   ├── commands/            # Individual commands (200+)
│   │   ├── index.js
│   │   └── ...
│   │
│   ├── database/            # Database operations
│   │   ├── db.js
│   │   └── schema.sql
│   │
│   ├── utils/               # Utility functions
│   │   ├── logger.js
│   │   ├── parser.js
│   │   └── helpers.js
│   │
│   └── python/              # Python scripts
│       ├── ai_chat.py
│       ├── nlp_processor.py
│       └── media_handler.py
│
├── .env.example             # Environment variables
├── .gitignore               # Git ignore file
└── docs/                    # Documentation
    ├── SETUP.md
    ├── COMMANDS.md
    └── API.md
```

---

## ⚙️ Configuration

Edit `config.js`:

```javascript
module.exports = {
  ownerNumber: '+250798363480',
  botName: 'Fabregas-Pro-Bot',
  prefix: '.',
  autoRead: true,
  autoTyping: true,
  // ... more settings
};
```

---

## 📖 Commands

### Quick Command Examples

**Entertainment:**
- `.joke` - Get a random joke
- `.riddle` - Get a riddle
- `.game` - Play a game

**Utilities:**
- `.calc 2+2` - Calculate
- `.weather [city]` - Get weather
- `.convert 100km to miles` - Convert units

**Media:**
- `.sticker` - Convert image to sticker
- `.tiktok [url]` - Download TikTok video
- `.instagram [url]` - Download Instagram post

**Admin:**
- `.mute` - Mute user
- `.kick @user` - Remove user
- `.promote @user` - Promote to admin

See [COMMANDS.md](docs/COMMANDS.md) for complete list of 200+ commands!

---

## 🔐 Security & Privacy

- ✅ Owner-only commands protected
- ✅ Database encryption
- ✅ Rate limiting
- ✅ Command validation
- ✅ Error handling & logging

---

## 📝 Usage

1. **Start the bot:**
   ```bash
   node index.js
   ```

2. **Scan QR code** when prompted

3. **Send commands** to activate features

4. **Check logs** for debug info

---

## 🛠️ Advanced Setup

### Using Python Features

```bash
# Install Python dependencies
pip install -r requirements.txt

# Run Python services
python src/python/ai_chat.py
```

### Database Setup

```bash
# Initialize database
node src/database/db.js --init
```

---

## 🚀 Deployment

### Local Development
```bash
npm start
```

### Cloud Deployment (Railway, Render, Heroku)
See [DEPLOYMENT.md](docs/DEPLOYMENT.md)

---

## 📞 Support

**Owner:** +250798363480  
**Bot Creator:** Ballua Fabregas  
**Email:** [your-email@example.com]  

---

## 📄 License

This project is owned and maintained by **Ballua Fabregas**.

---

## ✨ Credits

**MADE IN BY BALLUA FABREGAS** 🎉

- Baileys - WhatsApp Web API
- Node.js Community
- Python Community

---

## 🔄 Updates & Roadmap

- [x] Basic command structure
- [x] Database integration
- [ ] Web dashboard
- [ ] Admin panel
- [ ] Statistics tracking
- [ ] Advanced AI
- [ ] Multi-language support

---

**Happy Botting! 🤖✨**
