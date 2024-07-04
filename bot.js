const TelegramBot = require('node-telegram-bot-api');
const fetch = require('node-fetch');
const config = require('./config/config.json');

const token = config.TELEGRAM_BOT_TOKEN; 
const chatId = config.TELEGRAM_CHAT_ID; 
const bot = new TelegramBot(token, { polling: true });

// Send request and check result
const checkEmergencyProposals = async () => {
    try {
       const response = await fetch("https://initia-testnet-api.itrocket.net/initia/gov/v1/proposals?proposal_status=PROPOSAL_STATUS_VOTING_PERIOD", {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0",
                "Accept": "application/json",
                "Accept-Language": "en-US,en;q=0.5",
                "Alt-Used": "lcd.initiation-1.initia.xyz",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Priority": "u=1"
            },
            "method": "GET",
            "mode": "cors"
        });

        if (response.ok) {
            const data = await response.json();
            console.log('API Response:', data);

            const proposals = data.proposals;

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
        } else {
            console.error('Error fetching emergency proposals:', response.status, response.statusText);
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
