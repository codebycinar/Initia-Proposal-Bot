const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const config = require('./config/config.json');

const token = config.TELEGRAM_BOT_TOKEN; 
const chatId = config.TELEGRAM_CHAT_ID; 
const bot = new TelegramBot(token, { polling: true });

// Send request and check result
const checkEmergencyProposals = async () => {
    try {
        const response = await axios.get('https://lcd.initiation-1.initia.xyz/initia/gov/v1/emergency_proposals');
        const proposals = response.data.proposals;

        if (proposals && proposals.length > 0) {
            const proposal = proposals[0];
            const message = `
                New Emergency Proposal:
                Title: ${proposal.title}
                Summary: ${proposal.summary}
                Status: ${proposal.status}
                Proposer: ${proposal.proposer}
                Emergency Start Time: ${proposal.emergency_start_time}
            `;

            bot.sendMessage(chatId, message);
        }
    } catch (error) {
        console.error('Error fetching emergency proposals:', error);
    }
};

// Check from api every 30 secons
setInterval(checkEmergencyProposals, 30000);

// Listen bot commands
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Initia Emergency Proposals Bot is now active!');
});
