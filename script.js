document.addEventListener('DOMContentLoaded', function() {
    const bots = [
        {
            name: 'PONKE TON',
            description: 'Присоединяйтесь к дропу от проекта Ponke TON и получайте 700.000 $PONKE + 3 Ponke TON NFT (4000$)!',
            detailDescription: 'Detailed description of PONKE TON.',
            icon: 'images/ponke.img', // Place the correct path to the bot icon
            link: 'https://t.me/PONKETONBOT'
        },
        // Add more bot objects here
    ];

    const botsList = document.querySelector('.bots-list');

    bots.forEach(bot => {
        const botElement = document.createElement('div');
        botElement.classList.add('bot');
        botElement.innerHTML = `
            <img src="${bot.icon}" alt="${bot.name}">
            <h3>${bot.name}</h3>
            <p>${bot.description}</p>
        `;

        botElement.addEventListener('click', () => {
            window.open(bot.link, '_blank');
        });

        botsList.appendChild(botElement);
    });
});