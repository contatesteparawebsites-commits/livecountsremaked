(() => {
    const escapeXml = value => value.replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[character]));

    window.pulseInitialAvatar = name => {
        const words = String(name || 'U').trim().split(/\s+/).filter(Boolean);
        const initials = escapeXml(words.slice(0, 2).map(word => Array.from(word)[0]).join('').toUpperCase() || 'U');
        const colors = ['#52647a', '#356387', '#586058', '#715d70', '#7a6250', '#3f6d70'];
        const color = colors[Array.from(String(name || 'U')).reduce((total, character) => total + character.charCodeAt(0), 0) % colors.length];
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" rx="64" fill="${color}"/><text x="64" y="76" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="48" font-weight="500" fill="#fff">${initials}</text></svg>`;
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    };

    window.pulseToggleFullscreen = async () => {
        try {
            if (document.fullscreenElement) await document.exitFullscreen();
            else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
            else document.body.classList.toggle('pulse-is-fullscreen');
        } catch (_) {
            document.body.classList.toggle('pulse-is-fullscreen');
        }
        updateFullscreenControl();
    };

    function updateFullscreenControl() {
        const active = Boolean(document.fullscreenElement) || document.body.classList.contains('pulse-is-fullscreen');
        document.body.classList.toggle('pulse-is-fullscreen', active);
        const button = document.querySelector('.pulse-fullscreen');
        if (!button) return;
        button.title = active ? 'Exit fullscreen' : 'Enter fullscreen';
        button.setAttribute('aria-label', button.title);
        button.innerHTML = active
            ? '<svg viewBox="0 0 24 24"><path d="M8 3v5H3M16 3v5h5M8 21v-5H3M16 21v-5h5"/></svg>'
            : '<svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>';
    }

    function initializeSharedUI() {
        if (!document.querySelector('.pulse-fullscreen')) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'pulse-fullscreen';
            button.addEventListener('click', window.pulseToggleFullscreen);
            document.body.appendChild(button);
        }
        if (!document.querySelector('.pulse-home-link')) {
            const home = document.createElement('a');
            home.className = 'pulse-home-link';
            home.href = new URL('../', document.baseURI).pathname.includes('/livecountsremaked/')
                ? new URL('../', document.baseURI).href
                : '/';
            // Relative depth is more reliable on GitHub Pages and local servers.
            home.href = document.querySelector('script[src*="../../polish.js"]') ? '../../' : '../';
            home.innerHTML = 'PulseCount <span>↗</span>';
            document.body.appendChild(home);
        }
        updateFullscreenControl();
        document.addEventListener('fullscreenchange', updateFullscreenControl);

        const avatarPairs = [
            ['counter-avatar', 'counter-title'], ['lcnet-avatar', 'lcnet-name'],
            ['userimg', 'userName'], ['yt_profile', 'yt_name'], ['image', 'name'],
            ['image1', 'name1'], ['image2', 'name2'],
            ['yt_profile_vs1', 'yt_name_vs1'], ['yt_profile_vs2', 'yt_name_vs2']
        ];
        avatarPairs.forEach(([avatarId, nameId]) => {
            const avatar = document.getElementById(avatarId);
            const name = document.getElementById(nameId);
            if (!avatar || !name) return;
            const update = () => {
                const currentName = name.textContent.trim() || name.value || 'User';
                const isDefault = !avatar.getAttribute('src') || /(default\.png|default_thumbnail\.jpg|logo\.png|blank\.png)$/.test(avatar.src) || avatar.dataset.pulseGenerated === 'true';
                if (!isDefault || avatar.dataset.pulseAvatarFor === currentName) return;
                avatar.dataset.pulseGenerated = 'true';
                avatar.dataset.pulseAvatarFor = currentName;
                avatar.src = window.pulseInitialAvatar(currentName);
            };
            update();
            new MutationObserver(update).observe(name, {childList:true,characterData:true,subtree:true});
            new MutationObserver(update).observe(avatar, {attributes:true,attributeFilter:['src']});
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeSharedUI, {once:true});
    else initializeSharedUI();
})();
