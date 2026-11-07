(() => {
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
