// Public, rounded subscriber counts recorded by vidIQ on November 7, 2026.
// This is an editable starting point, not a live YouTube API feed.
const TOP50_SNAPSHOT_DATE = '2026-11-07';
const TOP50_SNAPSHOT_SOURCE = 'https://vidiq.com/youtube-stats/top/50/';

const TOP50_CHANNELS = [
    ['MrBeast', 525000000, '@mrbeast', 'https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s88-c-k-c0x00ffffff-no-rj'],
    ['T-Series', 316000000, '@tseries', 'https://yt3.ggpht.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s88-c-k-c0x00ffffff-no-rj'],
    ['Cocomelon - Nursery Rhymes', 203000000, '@cocomelon', 'https://yt3.ggpht.com/yiljI_XQcX8X0p_E2S0APGrUs7tHBMukf5_3dhVzhbH-z5uhzpt88tUopQa7ngVwO1nGAAnr6A=s88-c-k-c0x00ffffff-no-rj'],
    ['SET India', 190000000, '@setindia', 'https://yt3.ggpht.com/vmmZsYmryt238vqck4KAYf69gOSu22ZfqVE3rwT1tYz4hr68xl7crIUK7kghQgR6RiB9IlQ5mQ=s88-c-k-c0x00ffffff-no-rj'],
    ['Vlad and Niki', 151000000, '@vladandniki', 'https://yt3.ggpht.com/il7dQx5fz3qs2ykOvWQVhtjT-_grY_oPmXlah13q694r_5zUS_7M33pBuUC34Cq0VearBaT1NOE=s88-c-k-c0x00ffffff-no-rj'],
    ['Stokes Twins', 149000000, '@stokestwins', 'https://yt3.ggpht.com/ytc/AIdro_licRUYkb1mqyEXaQPq67wtqgk7qinfWOEvc6gjnsSofu4=s88-c-k-c0x00ffffff-no-rj'],
    ['✿ Kids Diana Show', 138000000, '@kidsdianashow', 'https://yt3.ggpht.com/G88LBGqFoBWMos0glZEdCvQ7uEMPnhBYsPRMOFX5b5z6tuqWaD6ZcscslaKu0zLO37v8sMUA=s88-c-k-c0x00ffffff-no-rj'],
    ['김프로KIMPRO', 135000000, '@kimpro828', 'https://yt3.ggpht.com/61lpQx0TizD-UeJSv10975lLAt09xRHu0T8cz_6LnLGFwA_5L-Vz-Qa_GOXsthdkh8G7jXv1oQ=s88-c-k-c0x00ffffff-no-rj'],
    ['Like Nastya', 133000000, '@likenastyaofficial', 'https://yt3.ggpht.com/ytc/AIdro_mVv_9v6t_6ni8YIQZWxmabSsNCVTyGQ48CHQ8-2W-OQtM=s88-c-k-c0x00ffffff-no-rj'],
    ['Alejo Igoa', 125000000, '@alejoigoa', 'https://yt3.ggpht.com/vvwc5dVu5nXqxqdmUcZTV_c9kUzfSmwHXWqTCanFUVQcgR06_lOM2QD_uNqWH3A8_w40tMfxuQ=s88-c-k-c0x00ffffff-no-rj'],
    ['Zee Music Company', 123000000, '@zeemusiccompany', 'https://yt3.ggpht.com/zGnrFUqmF6Xp2tM8ecG9sVXyHjJUrqa7GnNV_kATAdAvSwfgIg7693GURHASA7C6OPK3YmGZ=s88-c-k-c0x00ffffff-no-rj'],
    ['WWE', 114000000, '@wwe', 'https://yt3.ggpht.com/ytc/AIdro_muzDjR0hfGdlXBS-2A8NfR-Q9e-PO96K-gxrm2i1jSStI7=s88-c-k-c0x00ffffff-no-rj'],
    ['Goldmines', 111000000, '@goldminestelefilms', 'https://yt3.ggpht.com/Ls4lEH-dc1OkDysPqLKpeD5CFfUzzW4cTBTkZWAuax3npqrtFhTqC91wpfe02oSd9swnyQnb=s88-c-k-c0x00ffffff-no-rj'],
    ['PewDiePie', 109000000, '@pewdiepie', 'https://yt3.ggpht.com/vik8mAiwHQbXiFyKfZ3__p55_VBdGvwxPpuPJBBwdbF0PjJxikXhrP-C3nLQAMAxGNd_-xQCIg=s88-c-k-c0x00ffffff-no-rj'],
    ['Sony SAB', 106000000, '@sonysab', 'https://yt3.ggpht.com/W6hlyHF8FP_YVLnkzBGQYtdpf0hB8pILZvQYw4jMYIqgcGeS1RBTvk9VHUXGk3mDZhhv-26o-zc=s88-c-k-c0x00ffffff-no-rj'],
    ["Alan's Universe", 103000000, '@alanchikinchow', 'https://yt3.ggpht.com/lA3SEmZbetaDHX6K4BlrWRpNLfJh5pT74-DZWpvKueB3wpoD6RhkxpxVfbnUBoExK2ctCQ7Pjw=s88-c-k-c0x00ffffff-no-rj'],
    ['BLACKPINK', 102000000, '@blackpink', 'https://yt3.ggpht.com/U3VrCkKjzTpQ3VYv4SCPjNfDHeJV-swGNnhLYhr0nV4lZz_GVUNzK4EB-HFRfKv9S5VNh14uAg=s88-c-k-c0x00ffffff-no-rj'],
    ['Zee TV', 99400000, '@zeetv', 'https://yt3.ggpht.com/azn2b7O1Xx3JXUYAQ3XqdFl3bvhrcVhumeccIFs6N-VxhrUdhachSlZFCZlM26NEdEvU06mpS2U=s88-c-k-c0x00ffffff-no-rj'],
    ['ChuChu TV Nursery Rhymes & Kids Songs', 98200000, '@chuchutv', 'https://yt3.ggpht.com/S4Cwskky_Zyu6OI4zdvEiZcQsHWZ0TfEtIBPMDPYQSbnsITVPOmG6jA6rqrEOVGNOjSRT8YP7LY=s88-c-k-c0x00ffffff-no-rj'],
    ['Topper Guild', 95900000, '@topperguild', 'https://yt3.ggpht.com/Ce8Rj4Kb89F0zNpA1961oezAXskNSJ9WV_k7fWUAAxRcCzQRUVmwW4S8FhIjwwa4xDpapFJ5Mw=s88-c-k-c0x00ffffff-no-rj'],
    ['A4', 92900000, '@a4a4a4a4', 'https://yt3.ggpht.com/GMJvnLHTiP2KCvomxYnL_dhPtEti9P6YjlaloKn_zQ8N-_vUd1JMi0kXQe2BQLfy1cRQZa-D=s88-c-k-c0x00ffffff-no-rj'],
    ['KL BRO Biju Rithvik', 90700000, '@klbrobijurithvik1', 'https://yt3.ggpht.com/5Q5NTVd5rWCnzlhJj6L2b_OAFlygH2g0lU9VSkq057jY3zP_Qc-2FO69JIgmLHNAOsnAaqCPvQ=s88-c-k-c0x00ffffff-no-rj'],
    ['BANGTANTV', 86400000, '@bts', 'https://yt3.ggpht.com/NNG93LntJGDpMlGYIhavu2n4gREs7CNbNT8jjG-7dpotBa5uQDHhuOL8e_oU4ihzWhlwdCmsJw0=s88-c-k-c0x00ffffff-no-rj'],
    ['Mark Rober', 85800000, '@markrober', 'https://yt3.ggpht.com/ytc/AIdro_ksXY2REjZ6gYKSgnWT5jC_zT9mX900vyFtVinR8KbHww=s88-c-k-c0x00ffffff-no-rj'],
    ['Baby Shark - Pinkfong Kids’ Songs & Stories', 85400000, '@pinkfong', 'https://yt3.ggpht.com/1k_R7xtChDwD1MMJOHf6tjoXdyYDwV7JjRSR9Em0qlz69oJO3QeseGowGcJvI9khogep4N65DEQ=s88-c-k-c0x00ffffff-no-rj'],
    ['ZAMZAM BROTHERS OFFICIAL', 84900000, '@zamzam_brotherss_official', 'https://yt3.ggpht.com/yQyhrrRGde5ACIIE-HikUvOzbPqecBeO1i1Juunirrf-6nS_w7hH7r-YugC97dtWPXkxfd28H0c=s88-c-k-c0x00ffffff-no-rj'],
    ['UR · Cristiano', 83700000, '@cristiano', 'https://yt3.ggpht.com/7HR7AS1zqCg3HDKKhU734Hoqaz277rXAkSkjJlui8cf_jrw31GZF2aPn3i9JS6Hhwgcxutp0jg=s88-c-k-c0x00ffffff-no-rj'],
    ['T-Series Bhakti Sagar', 83500000, '@tseriesbhaktisagar', 'https://yt3.ggpht.com/ytc/AIdro_lEOsOKSwfkzCB5bj1mTBIKOG7rBJmipaGnWMtcUnEF0I6J=s88-c-k-c0x00ffffff-no-rj'],
    ['HYBE LABELS', 83200000, '@hybelabels', 'https://yt3.ggpht.com/ytc/AIdro_l8g0yRFG8xoe_qeqk8Ki9UFy36cB2IjZEWZWz0h7gl-t0=s88-c-k-c0x00ffffff-no-rj'],
    ['Toys and Colors', 83100000, '@toysandcolors', 'https://yt3.ggpht.com/ytc/AIdro_nKO-qf2jEK-xmzuggQvgjoHJO1xBIxDQ3bEgxuI4PLyHk=s88-c-k-c0x00ffffff-no-rj'],
    ['Tips Official', 82700000, '@tipsofficial'],
    ['Colors TV', 82600000, '@colorstv'],
    ['Zhong', 81100000, '@zhong'],
    ['Fede Vigevani', 80900000, '@fedevigevani'],
    ['5-Minute Crafts', 80500000, '@5minutecraftsyoutube'],
    ['Justin Bieber', 79600000, '@justinbieber'],
    ['Bispo Bruno Leonardo', 77300000, '@bispobrunoleonardo'],
    ['Anaya Kandhal', 76500000, '@anayakandhal'],
    ['Aaj Tak', 75700000, '@aajtak'],
    ['ISSEI / いっせい', 75600000, '@issei0806'],
    ['Shemaroo Filmi Gaane', 75100000, '@filmigaane'],
    ['HAR PAL GEO', 74500000, '@harpalgeoofficial'],
    ['Sony Music India', 73600000, '@sonymusicindia'],
    ['YRF', 73100000, '@yrf'],
    ['Infobells - Hindi', 72900000, '@infobellshindirhymes'],
    ['El Reino Infantil', 71700000, '@elreinoinfantil'],
    ['YOLO AVENTURAS', 71300000, '@yoloaventuras'],
    ['Wave Music', 71000000, '@wavemusicindia'],
    ['ARY Digital HD', 68800000, '@arydigitalasia'],
    ['Canal KondZilla', 68200000, '@kondzilla']
];

function channelAvatar(channel) {
    const initials = channel.name.replace(/^✿\s*/, '').split(/\s+/).slice(0, 2).map(word => word[0]).join('').toUpperCase();
    const palettes = [['#52647a', '#354356'], ['#356387', '#24465f'], ['#586058', '#3d453d'], ['#715d70', '#4c3e4b'], ['#3f6d70', '#29494b']];
    const palette = palettes[channel.rank % palettes.length];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="${palette[0]}"/><stop offset="1" stop-color="${palette[1]}"/></linearGradient></defs><rect width="96" height="96" rx="48" fill="url(#g)"/><text x="48" y="58" text-anchor="middle" font-family="Arial,sans-serif" font-size="32" font-weight="700" fill="white">${initials}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getTop50Channels() {
    return TOP50_CHANNELS.map(([name, count, id, image], index) => {
        const channel = { name, count, id, rank: index + 1, min_gain: 0, max_gain: 0, image: '' };
        channel.image = channelAvatar(channel);
        const minimum = Math.max(1, Math.round(count / 220000000));
        channel.min_gain = minimum;
        channel.max_gain = minimum + 2 + (index % 4);
        return channel;
    });
}

function showTop50Toast(message) {
    let toast = document.getElementById('top50Toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'top50Toast';
        toast.className = 'top50-toast';
        toast.setAttribute('role', 'status');
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(showTop50Toast.timeout);
    showTop50Toast.timeout = setTimeout(() => toast.classList.remove('visible'), 2800);
}

function setupChannelSuggestions() {
    const dialog = document.getElementById('channelSuggestions');
    const openButton = document.getElementById('openSuggestions');
    const restoreButton = document.getElementById('restoreTop50');
    const search = document.getElementById('suggestionSearch');
    const list = document.getElementById('suggestionList');
    if (!dialog || !openButton || !list) return;

    const render = () => {
        const query = search.value.trim().toLocaleLowerCase();
        list.replaceChildren();
        const channels = getTop50Channels().filter(channel => `${channel.name} ${channel.id}`.toLocaleLowerCase().includes(query));
        document.getElementById('suggestionResults').textContent = `${channels.length} channels`;
        channels.forEach(channel => {
            const row = document.createElement('div');
            row.className = 'suggestion-row';
            const rank = document.createElement('span');
            rank.className = 'suggestion-rank';
            rank.textContent = `#${channel.rank}`;
            const image = document.createElement('img');
            image.src = channel.image;
            image.alt = '';
            image.onerror = () => { image.onerror = null; image.src = channelAvatar(channel); };
            const info = document.createElement('div');
            info.className = 'suggestion-info';
            const name = document.createElement('strong');
            name.textContent = channel.name;
            const stats = document.createElement('span');
            stats.textContent = `${new Intl.NumberFormat('en-US').format(channel.count)} subscribers · ${channel.id}`;
            info.append(name, stats);
            const add = document.createElement('button');
            const exists = data.data.some(item => item.id === channel.id);
            add.textContent = exists ? 'Added' : '+ Add';
            add.disabled = exists;
            add.addEventListener('click', async () => {
                data.data.push(channel);
                update(false);
                await saveInBrowser(COUNTER_THEME, false);
                showTop50Toast(`${channel.name} added to the ranking.`);
                render();
            });
            row.append(rank, image, info, add);
            list.appendChild(row);
        });
    };

    openButton.addEventListener('click', () => { search.value = ''; render(); dialog.showModal(); });
    document.getElementById('closeSuggestions').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    search.addEventListener('input', render);
    document.getElementById('addMissingChannels').addEventListener('click', async () => {
        const missing = getTop50Channels().filter(channel => !data.data.some(item => item.id === channel.id));
        if (!missing.length) return showTop50Toast('All 50 channels are already in your list.');
        data.data.push(...missing);
        update(false);
        await saveInBrowser(COUNTER_THEME, false);
        showTop50Toast(`${missing.length} channels added.`);
        render();
    });
    restoreButton?.addEventListener('click', async () => {
        if (data.data.length && !confirm('Replace your current list with the Top 50 suggestions? Export your data first if you want to keep a backup.')) return;
        data.data = getTop50Channels();
        selected = null;
        update(false);
        await saveInBrowser(COUNTER_THEME, false);
        showTop50Toast('Top 50 restored. Every channel is ready to edit.');
    });
}
