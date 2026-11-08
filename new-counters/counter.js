(() => {
    const body = document.body;
    const id = body.dataset.counterId;
    const storageKey = `pulsecount:${id}`;
    const defaults = {
        name: body.dataset.defaultName || 'Your channel',
        count: Number(body.dataset.defaultCount || 0),
        gain: Number(body.dataset.defaultGain || 1),
        interval: Number(body.dataset.defaultInterval || 2000),
        goal: Number(body.dataset.defaultGoal || 100000),
        paused: false
    };

    let state = {...defaults};
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey));
        if (saved && typeof saved === 'object') state = {...state, ...saved};
    } catch (_) {}

    const elements = {
        title: document.getElementById('counter-title'),
        count: document.getElementById('counter-count'),
        name: document.getElementById('channelName'),
        start: document.getElementById('startCount'),
        gain: document.getElementById('gainRate'),
        interval: document.getElementById('updateRate'),
        goal: document.getElementById('goalCount'),
        goalTarget: document.getElementById('goalTarget'),
        pause: document.getElementById('pauseCounter'),
        reset: document.getElementById('resetCounter'),
        gainDisplay: document.getElementById('gainDisplay'),
        status: document.getElementById('statusLabel'),
        progress: document.getElementById('goalProgress'),
        progressLabel: document.getElementById('goalProgressLabel'),
        remaining: document.getElementById('goalRemaining'),
        history: document.getElementById('signalHistory')
    };

    const history = [];
    let timer;
    const format = value => Math.round(Number(value) || 0).toLocaleString('en-US');
    const numberValue = (element, fallback, minimum = -1e12) => Math.max(minimum, Math.min(1e12, Number(element.value) || fallback));

    function save() {
        try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) {}
    }

    function drawHistory() {
        if (!elements.history) return;
        history.push(state.count);
        if (history.length > 24) history.shift();
        const low = Math.min(...history);
        const high = Math.max(...history);
        const range = Math.max(1, high - low);
        const points = history.map((value, index) => `${(index / 23) * 300},${58 - ((value - low) / range) * 50}`).join(' ');
        elements.history.setAttribute('points', points);
    }

    function render(addHistory = false) {
        elements.title.textContent = state.name || 'Your channel';
        elements.count.textContent = format(state.count);
        elements.gainDisplay.textContent = `+${format(state.gain)} / update`;
        elements.status.textContent = state.paused ? 'PAUSED' : 'LIVE';
        elements.status.classList.toggle('is-paused', state.paused);
        elements.pause.textContent = state.paused ? 'Resume counter' : 'Pause counter';
        elements.pause.setAttribute('aria-pressed', String(state.paused));
        if (elements.progress) {
            elements.goalTarget.textContent = format(state.goal);
            const percentage = Math.max(0, Math.min(100, (state.count / Math.max(1, state.goal)) * 100));
            elements.progress.style.width = `${percentage}%`;
            elements.progressLabel.textContent = `${percentage.toFixed(1)}% of ${format(state.goal)}`;
            elements.remaining.textContent = state.count >= state.goal ? 'Goal reached' : `${format(state.goal - state.count)} remaining`;
        }
        if (addHistory) drawHistory();
    }

    function tick() {
        if (state.paused) return;
        state.count += state.gain;
        render(true);
        save();
    }

    function schedule() {
        clearInterval(timer);
        timer = setInterval(tick, state.interval);
    }

    elements.name.addEventListener('input', () => {
        state.name = elements.name.value.slice(0, 80);
        render();
        save();
    });
    elements.start.addEventListener('change', () => {
        state.count = numberValue(elements.start, defaults.count);
        elements.start.value = Math.round(state.count);
        render(true);
        save();
    });
    elements.gain.addEventListener('change', () => {
        state.gain = numberValue(elements.gain, defaults.gain);
        elements.gain.value = state.gain;
        render();
        save();
    });
    elements.interval.addEventListener('change', () => {
        state.interval = numberValue(elements.interval, defaults.interval, 250);
        elements.interval.value = state.interval;
        schedule();
        save();
    });
    elements.goal?.addEventListener('change', () => {
        state.goal = numberValue(elements.goal, defaults.goal, 1);
        elements.goal.value = state.goal;
        render();
        save();
    });
    elements.pause.addEventListener('click', () => {
        state.paused = !state.paused;
        render();
        save();
    });
    elements.reset.addEventListener('click', () => {
        state = {...defaults};
        history.length = 0;
        elements.name.value = state.name;
        elements.start.value = state.count;
        elements.gain.value = state.gain;
        elements.interval.value = state.interval;
        if (elements.goal) elements.goal.value = state.goal;
        schedule();
        render(true);
        save();
    });

    elements.name.value = state.name;
    elements.start.value = Math.round(state.count);
    elements.gain.value = state.gain;
    elements.interval.value = state.interval;
    if (elements.goal) elements.goal.value = state.goal;
    render(true);
    schedule();
})();
