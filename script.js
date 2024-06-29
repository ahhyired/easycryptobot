document.addEventListener('DOMContentLoaded', function() {
    const bots = [
        {
            name: 'Catizen',
            description: 'Присоединяйтесь к дропу от проекта Catizen!',
            detailDescription: 'Detailed description of Catizen.',
            icon: 'images/IMG_20240629_221017_495.jpg',
            link: 'https://ahhyired.github.io/easycryptobot/citizen'
        },
        {
            name: 'PONKE TON',
            description: 'Присоединяйтесь к дропу от проекта Ponke TON и получайте 700.000 $PONKE + 3 Ponke TON NFT (~4000$)!',
            detailDescription: 'Detailed description of PONKE TON.',
            icon: 'images/ponke.jpg',
            link: 'https://ahhyired.github.io/easycryptobot/ponke'
        },
        // Add more bot objects here
    ];

    const botsList = document.querySelector('.bots-list');

    bots.forEach(bot => {
        const botElement = document.createElement('div');
        botElement.classList.add('bot');
        botElement.innerHTML = `
            <img src="${bot.icon}" alt="${bot.name}" onerror="this.onerror=null; this.src='fallback-image-url.jpg';">
            <h3>${bot.name}</h3>
            <p>${bot.description}</p>
        `;

        botElement.addEventListener('click', () => {
            window.open(bot.link, '_self');
        });

        botsList.appendChild(botElement);
    });
});
