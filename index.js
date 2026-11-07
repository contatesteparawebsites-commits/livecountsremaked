(() => {
    const themeToggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    const themeColor = document.querySelector('meta[name="theme-color"]');

    function updateThemeControl() {
        const dark = document.documentElement.dataset.theme === 'dark';
        themeLabel.textContent = dark ? 'Light' : 'Dark';
        themeToggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
        themeColor.content = dark ? '#0d1420' : '#f4f7fb';
    }

    updateThemeControl();
    themeToggle?.addEventListener('click', () => {
        const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = theme;
        try { localStorage.setItem('pulse-theme', theme); } catch (_) {}
        updateThemeControl();
    });

    const dialog = document.getElementById('resetDialog');
    const confirmation = document.getElementById('resetConfirm');
    const confirmButton = document.getElementById('confirmReset');
    const feedback = document.getElementById('resetFeedback');

    document.getElementById('openReset')?.addEventListener('click', () => {
        confirmation.checked = false;
        confirmButton.disabled = true;
        feedback.textContent = '';
        dialog.showModal();
    });
    document.getElementById('cancelReset')?.addEventListener('click', () => dialog.close());
    confirmation?.addEventListener('change', () => { confirmButton.disabled = !confirmation.checked; });
    dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    confirmButton?.addEventListener('click', async () => {
        confirmButton.disabled = true;
        feedback.textContent = 'Deleting local data…';
        try {
            localStorage.clear();
            await new Promise((resolve, reject) => {
                const request = indexedDB.deleteDatabase('LCEDIT');
                request.onsuccess = resolve;
                request.onerror = reject;
                request.onblocked = () => reject(new Error('Close other PulseCount tabs and try again.'));
            });
            feedback.textContent = 'All local counter data has been reset.';
            setTimeout(() => dialog.close(), 1600);
        } catch (error) {
            feedback.textContent = error.message || 'Unable to reset data. Close other counter tabs and try again.';
        }
    });
})();
