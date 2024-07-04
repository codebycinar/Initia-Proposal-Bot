# Initia Proposal Bot

This is a simple Telegram bot that checks the Initia emergency proposals every 30 seconds and sends a message to a specified chat if there are any new proposals.

## Setup

1. Create a Telegram bot:
   - Open Telegram and search for the [@BotFather](https://t.me/BotFather).
   - Start a chat with @BotFather and use the /start command.
   - Use the /newbot command to create a new bot. Follow the instructions to set the bot's name and username.
   - After creating the bot, you will receive a bot token. Save this token as it will be used later.

2. Obtain your chat ID:
   - Start a chat with your newly created bot by searching for its username in Telegram and clicking the Start button.
   - Send a message to your bot (e.g., /start).
   - To find your chat ID, you can use an API like [getUpdates](https://api.telegram.org/bot<YOUR_TELEGRAM_BOT_TOKEN>/getUpdates). Replace <YOUR_TELEGRAM_BOT_TOKEN> with your actual bot token.
   - The chat ID will be in the response JSON under "message" -> "chat" -> "id". Save this chat ID as it will be used later.
     
   Also, you can use my bot [initia-proposal-bot](https://t.me/initia_proposal_bot).
 
3. Clone the repository:
   ```sh
   git clone https://github.com/codebycinar/initia-proposal-bot.git
   cd initia-proposal-bot
   ```

4. Install the dependencies:
   ```sh
   npm install
   ```

5. Configure your bot token and chat ID:
   - Rename `config/config.example.json` to `config/config.json`
   - Replace `"YOUR_TELEGRAM_BOT_TOKEN"` and `"YOUR_TELEGRAM_CHAT_ID"` with your actual bot token and chat ID in `config/config.json`.

6. Start the bot:
   ```sh
   npm start
   ```

## Usage

- The bot will automatically check for new emergency proposals every 30 seconds and send a message if any are found.
- Send `/start` to the bot to receive a confirmation message that the bot is active.

## License

This project is licensed under the MIT License.
