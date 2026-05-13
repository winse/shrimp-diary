// 主题管理系统
const themes = ['light', 'dark', 'ocean', 'coral'];
const themeNames = {
    light: '日光',
    dark: '夜海',
    ocean: '海洋',
    coral: '珊瑚'
};

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('shrimp-theme') || 'light';
    setTheme(savedTheme, false);
}

// 设置主题
function setTheme(theme, animate = true) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('shrimp-theme', theme);
    
    // 更新主题按钮状态
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    // 关闭主题画廊
    if (animate) {
        closeThemeGallery();
    }
}

// 选择主题
function selectTheme(theme) {
    setTheme(theme, true);
}

// 切换主题画廊
function toggleThemeGallery() {
    const gallery = document.getElementById('themeGallery');
    if (gallery) {
        gallery.classList.toggle('active');
    }
}

// 关闭主题画廊
function closeThemeGallery() {
    const gallery = document.getElementById('themeGallery');
    if (gallery) {
        gallery.classList.remove('active');
    }
}

// 循环切换主题（用于浮动按钮）
function cycleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex], true);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', initTheme);

// ESC 关闭主题画廊
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeThemeGallery();
    }
});

// 点击背景关闭主题画廊
document.addEventListener('click', (e) => {
    const gallery = document.getElementById('themeGallery');
    if (gallery && e.target === gallery) {
        closeThemeGallery();
    }
});