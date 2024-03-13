function redirectToBestOfLatest() {
    // Remplacez 'YOUR_CHANNEL_URL' par l'URL de votre chaîne YouTube best-of
    const channelUrl = 'https://ltstyt.be/5n7';

    // Redirection vers la chaîne YouTube best-of
    window.location.href = channelUrl;
}

// Ajouter un gestionnaire d'événements au bouton best-of
document.getElementById('ytb-latestbestof').addEventListener('click', redirectToBestOfLatest);

function redirectToVodLiveLatest() {
    // Remplacez 'YOUR_CHANNEL_URL' par l'URL de votre chaîne YouTube best-of
    const channelUrl = 'https://ltstyt.be/5n8';

    // Redirection vers la chaîne YouTube best-of
    window.location.href = channelUrl;
}

// Ajouter un gestionnaire d'événements au bouton best-of
document.getElementById('ytb-latestvod').addEventListener('click', redirectToVodLiveLatest);


function redirectToBestOfChannel() {
    // Remplacez 'YOUR_CHANNEL_URL' par l'URL de votre chaîne YouTube best-of
    const channelUrl = 'https://www.youtube.com/channel/UCpETn3SI0jKZmnSHPjlUBmw';

    // Redirection vers la chaîne YouTube best-of
    window.location.href = channelUrl;
}

// Ajouter un gestionnaire d'événements au bouton best-of
document.getElementById('ytb-bestof').addEventListener('click', redirectToBestOfChannel);

function redirectToVODLiveChannel() {
    // Remplacez 'YOUR_CHANNEL_URL' par l'URL de votre chaîne YouTube best-of
    const channelUrl = 'https://www.youtube.com/channel/UC1oyF73w-0hNQxtVWqep1Yw';

    // Redirection vers la chaîne YouTube best-of
    window.location.href = channelUrl;
}

// Ajouter un gestionnaire d'événements au bouton best-of
document.getElementById('ytb-vod').addEventListener('click', redirectToVODLiveChannel);

function redirectToDiscordServer() {
    // URL de redirection pour Threads
    const discordUrl = 'https://discord.gg/6muRS5TEAF';

    // Redirection vers la page Threads
    window.location.href = discordUrl;
}

// Ajouter un gestionnaire d'événements au bouton "Threads"
document.getElementById('threads').addEventListener('click', redirectToDiscordServer);

function redirectToInstagram() {
    // URL de redirection pour Instagram
    const instagramUrl = 'https://www.instagram.com/l0w1_off/';

    // Redirection vers la page Instagram
    window.location.href = instagramUrl;
}

// Ajouter un gestionnaire d'événements au bouton "Instagram"
document.getElementById('instagram').addEventListener('click', redirectToInstagram);

function redirectToThreads() {
    // URL de redirection pour Threads
    const threadsUrl = 'https://www.threads.net/@l0w1_off';

    // Redirection vers la page Threads
    window.location.href = threadsUrl;
}

// Ajouter un gestionnaire d'événements au bouton "Threads"
document.getElementById('threads').addEventListener('click', redirectToThreads);
