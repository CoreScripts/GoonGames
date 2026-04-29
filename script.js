const gameGrid = document.getElementById('gameGrid');
const homeView = document.getElementById('homeView');
const playerView = document.getElementById('playerView');
const gameIframe = document.getElementById('gameIframe');
const activeTitle = document.getElementById('activeGameTitle');

// 1. Render Games
function loadGames() {
    gameGrid.innerHTML = GAMES.map(game => `
        <div class="group cursor-pointer" onclick="openGame('${game.id}')">
            <div class="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden mb-2 border-2 border-transparent group-hover:border-blue-500 transition-all">
                <img src="${game.image}" alt="${game.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
            </div>
            <h3 class="font-bold text-sm truncate">${game.title}</h3>
        </div>
    `).join('');
}

// 2. Game Player Logic
function openGame(id) {
    const game = GAMES.find(g => g.id === id);
    if (!game) return;

    activeTitle.innerText = game.title;
    gameIframe.src = game.url;
    document.getElementById('sourceBtn').href = game.source;
    
    // Tab & Fullscreen Buttons
    document.getElementById('tabBtn').onclick = () => window.open(game.url, '_blank');
    document.getElementById('fsBtn').onclick = () => gameIframe.requestFullscreen();

    homeView.classList.add('hidden');
    playerView.classList.remove('hidden');
}

document.getElementById('closePlayer').onclick = () => {
    gameIframe.src = ""; // Destroy iframe content to save memory/stop audio
    playerView.classList.add('hidden');
    homeView.classList.remove('hidden');
};

// 3. Theme & Modals
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const themeToggle = document.getElementById('themeToggle');

settingsBtn.onclick = () => settingsModal.classList.remove('hidden');
document.getElementById('closeSettings').onclick = () => settingsModal.classList.add('hidden');

themeToggle.onclick = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
}

// Initial Load
loadGames();
