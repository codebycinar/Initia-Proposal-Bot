# Initia Proposal Bot

This is a simple Telegram bot that checks the Initia emergency proposals every 30 seconds and sends a message to a specified chat if there are any new proposals.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/codebycinar/initia-proposal-bot.git
   cd initia-proposal-bot
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Configure your bot token and chat ID:
   - Rename `config/config.example.json` to `config/config.json`
   - Replace `"YOUR_TELEGRAM_BOT_TOKEN"` and `"YOUR_TELEGRAM_CHAT_ID"` with your actual bot token and chat ID in `config/config.json`.

4. Start the bot:
   ```sh
   npm start
   ```

## Usage

- The bot will automatically check for new emergency proposals every 30 seconds and send a message if any are found.
- Send `/start` to the bot to receive a confirmation message that the bot is active.

## License

This project is licensed under the MIT License.
