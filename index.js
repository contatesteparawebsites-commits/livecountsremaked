(() => {
    const dialog = document.getElementById('resetDialog');
    const openButton = document.getElementById('openReset');
    const cancelButton = document.getElementById('cancelReset');
    const confirmButton = document.getElementById('confirmReset');
    const confirmation = document.getElementById('resetConfirm');
    const feedback = document.getElementById('resetFeedback');

    openButton?.addEventListener('click', () => {
        confirmation.checked = false;
        confirmButton.disabled = true;
        feedback.textContent = '';
        dialog.showModal();
    });
    cancelButton?.addEventListener('click', () => dialog.close());
    confirmation?.addEventListener('change', () => {
        confirmButton.disabled = !confirmation.checked;
    });
    dialog?.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
    });
    confirmButton?.addEventListener('click', async () => {
        confirmButton.disabled = true;
        feedback.textContent = 'Apagando dados…';
        try {
            localStorage.clear();
            await new Promise((resolve, reject) => {
                const request = indexedDB.deleteDatabase('LCEDIT');
                request.onsuccess = resolve;
                request.onerror = reject;
                request.onblocked = () => reject(new Error('Feche as outras abas do Livecountsedit e tente novamente.'));
            });
            feedback.textContent = 'Tudo pronto! Seus dados locais foram apagados.';
            setTimeout(() => dialog.close(), 1800);
        } catch (error) {
            feedback.style.color = '#fda4af';
            feedback.textContent = error.message || 'Não foi possível apagar os dados. Feche as outras abas e tente novamente.';
        }
    });

    const previewCount = document.querySelector('[data-preview-count]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (previewCount && !reducedMotion) {
        let value = 128549;
        setInterval(() => {
            if (document.hidden) return;
            value += Math.floor(Math.random() * 4) + 1;
            previewCount.textContent = new Intl.NumberFormat('pt-BR').format(value);
        }, 2400);
    }
})();
