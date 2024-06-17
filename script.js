document.addEventListener('DOMContentLoaded', function() {
    const bots = [
        {
            name: 'PONKE TON',
            description: 'Присоединяйтесь к дропу от проекта Ponke TON и получайте 700.000 $PONKE + 3 Ponke TON NFT (4000$)!',
            detailDescription: 'Detailed description of PONKE TON.',
            icon: 'images/ponke.jpg', // Place the correct path to the bot icon
            link: 'https://t.me/PONKETONBOT'
        },
        // Add more bot objects here
    ];

    const botsList = document.querySelector('.bots-list');
    const botDetail = document.querySelector('.bot-detail');
    const botName = document.querySelector('.bot-name');
    const botDescription = document.querySelector('.bot-description');
    const botLink = document.querySelector('.bot-link');
    const backButton = document.querySelector('.back-button');
    const mainPage = document.querySelector('.main-page');

    bots.forEach(bot => {
        const botElement = document.createElement('div');
        botElement.classList.add('bot');
        botElement.innerHTML = `
            <img src="${bot.icon}" alt="${bot.name}">
            <h3>${bot.name}</h3>
            <p>${bot.description}</p>
        `;

        botElement.addEventListener('click', () => {
            botName.textContent = bot.name;
            botDescription.textContent = bot.detailDescription;
            botLink.href = bot.link;
            mainPage.classList.add('hidden');
            botDetail.classList.remove('hidden');
        });

        botsList.appendChild(botElement);
    });

    backButton.addEventListener('click', () => {
        botDetail.classList.add('hidden');
        mainPage.classList.remove('hidden');
    });
});
