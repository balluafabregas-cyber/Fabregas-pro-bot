# 🚀 Fabregas-Pro-Bot Setup Guide

> **MADE IN BY BALLUA FABREGAS** ✨

## Prerequisites

- Node.js v16 or higher
- Python 3.8 or higher
- npm or yarn
- WhatsApp account (personal)

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/balluafabregas-cyber/Fabregas-Pro-Bot.git
cd Fabregas-Pro-Bot
```

### 2. Install Node Dependencies

```bash
npm install
```

### 3. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your settings:
- Owner number: +250798363480
- API keys (if using external services)

### 5. Start Bot

```bash
npm start
```

### 6. Scan QR Code

- A QR code will appear in terminal
- Scan with your WhatsApp camera
- Bot will connect automatically

## Troubleshooting

### QR Code not appearing?
- Delete `sessions` folder
- Restart the bot

### Bot not responding?
- Check logs in `logs/` folder
- Verify owner number in config
- Restart bot

### Database errors?
- Delete `data/bot.db`
- Restart bot

---

**Owner:** +250798363480  
**Creator:** Ballua Fabregas
