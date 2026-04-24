/* ===================== COUNTRY DATA ===================== */
const COUNTRIES = [
{ name: "Afghanistan", lat: 33.9, lng: 66.0, aliases: ["afghan"] },
{ name: "Albania", lat: 41.1, lng: 20.2, aliases: ["albanian"] },
{ name: "Algeria", lat: 28.0, lng: 1.7, aliases: ["algerian"] },
{ name: "Andorra", lat: 42.5, lng: 1.6, aliases: [] },
{ name: "Angola", lat: -12.3, lng: 17.9, aliases: ["angolan"] },
{ name: "Antigua and Barbuda", lat: 17.1, lng: -61.8, aliases: ["antigua"] },
{ name: "Argentina", lat: -38.4, lng: -63.6, aliases: ["argentine", "argentinian"] },
{ name: "Armenia", lat: 40.1, lng: 45.0, aliases: ["armenian"] },
{ name: "Australia", lat: -25.3, lng: 133.8, aliases: ["australian"] },
{ name: "Austria", lat: 47.5, lng: 14.6, aliases: ["austrian"] },
{ name: "Azerbaijan", lat: 40.1, lng: 47.6, aliases: ["azerbaijani"] },
{ name: "Bahamas", lat: 25.0, lng: -77.4, aliases: ["bahamian"] },
{ name: "Bahrain", lat: 26.1, lng: 50.6, aliases: ["bahraini"] },
{ name: "Bangladesh", lat: 23.7, lng: 90.4, aliases: ["bangladeshi"] },
{ name: "Barbados", lat: 13.2, lng: -59.5, aliases: ["barbadian"] },
{ name: "Belarus", lat: 53.7, lng: 27.9, aliases: ["belarusian"] },
{ name: "Belgium", lat: 50.5, lng: 4.5, aliases: ["belgian"] },
{ name: "Belize", lat: 17.2, lng: -88.5, aliases: ["belizean"] },
{ name: "Benin", lat: 9.3, lng: 2.3, aliases: ["beninese"] },
{ name: "Bhutan", lat: 27.5, lng: 90.4, aliases: ["bhutanese"] },
{ name: "Bolivia", lat: -16.7, lng: -64.7, aliases: ["bolivian"] },
{ name: "Bosnia and Herzegovina", lat: 43.9, lng: 17.7, aliases: ["bosnia"] },
{ name: "Botswana", lat: -22.3, lng: 24.7, aliases: ["botswanan"] },
{ name: "Brazil", lat: -14.2, lng: -51.9, aliases: ["brazilian"] },
{ name: "Brunei", lat: 4.5, lng: 114.7, aliases: ["bruneian"] },
{ name: "Bulgaria", lat: 42.7, lng: 25.5, aliases: ["bulgarian"] },
{ name: "Burkina Faso", lat: 12.2, lng: -1.6, aliases: ["burkina"] },
{ name: "Burundi", lat: -3.4, lng: 29.9, aliases: ["burundian"] },
{ name: "Cabo Verde", lat: 16.0, lng: -24.0, aliases: ["cape verde"] },
{ name: "Cambodia", lat: 12.6, lng: 104.9, aliases: ["cambodian"] },
{ name: "Cameroon", lat: 7.4, lng: 12.4, aliases: ["cameroonian"] },
{ name: "Canada", lat: 56.1, lng: -106.3, aliases: ["canadian"] },
{ name: "Central African Republic", lat: 6.6, lng: 20.9, aliases: ["car"] },
{ name: "Chad", lat: 15.5, lng: 18.7, aliases: ["chadian"] },
{ name: "Chile", lat: -35.7, lng: -71.5, aliases: ["chilean"] },
{ name: "China", lat: 35.9, lng: 104.2, aliases: ["chinese"] },
{ name: "Colombia", lat: 4.6, lng: -74.3, aliases: ["colombian"] },
{ name: "Comoros", lat: -11.9, lng: 43.9, aliases: ["comoran"] },
{ name: "Congo", lat: -0.2, lng: 15.8, aliases: ["republic of the congo"] },
{ name: "Costa Rica", lat: 10.0, lng: -84.2, aliases: ["costa rican"] },
{ name: "Croatia", lat: 45.1, lng: 15.2, aliases: ["croatian"] },
{ name: "Cuba", lat: 21.5, lng: -77.8, aliases: ["cuban"] },
{ name: "Cyprus", lat: 35.1, lng: 33.4, aliases: ["cypriot"] },
{ name: "Czech Republic", lat: 49.8, lng: 15.5, aliases: ["czechia"] },
{ name: "Denmark", lat: 56.3, lng: 9.5, aliases: ["danish"] },
{ name: "Djibouti", lat: 11.8, lng: 42.6, aliases: ["djiboutian"] },
{ name: "Dominica", lat: 15.4, lng: -61.4, aliases: [] },
{ name: "Dominican Republic", lat: 18.7, lng: -70.2, aliases: ["dr"] },
{ name: "East Timor", lat: -8.9, lng: 125.7, aliases: ["timor leste"] },
{ name: "Ecuador", lat: -1.8, lng: -78.2, aliases: ["ecuadorian"] },
{ name: "Egypt", lat: 26.8, lng: 30.8, aliases: ["egyptian"] },
{ name: "El Salvador", lat: 13.8, lng: -88.9, aliases: [] },
{ name: "Equatorial Guinea", lat: 1.7, lng: 10.3, aliases: [] },
{ name: "Eritrea", lat: 15.2, lng: 39.8, aliases: [] },
{ name: "Estonia", lat: 58.6, lng: 25.0, aliases: [] },
{ name: "Eswatini", lat: -26.5, lng: 31.5, aliases: ["swaziland"] },
{ name: "Ethiopia", lat: 9.1, lng: 40.5, aliases: [] },
{ name: "Fiji", lat: -17.7, lng: 178.1, aliases: [] },
{ name: "Finland", lat: 61.9, lng: 25.7, aliases: [] },
{ name: "France", lat: 46.2, lng: 2.2, aliases: ["french"] },
{ name: "Gabon", lat: -0.8, lng: 11.6, aliases: [] },
{ name: "Gambia", lat: 13.4, lng: -15.3, aliases: [] },
{ name: "Georgia", lat: 42.3, lng: 43.4, aliases: [] },
{ name: "Germany", lat: 51.2, lng: 10.5, aliases: ["german"] },
{ name: "Ghana", lat: 7.9, lng: -1.0, aliases: [] },
{ name: "Greece", lat: 39.1, lng: 21.8, aliases: ["greek"] },
{ name: "Grenada", lat: 12.1, lng: -61.7, aliases: [] },
{ name: "Guatemala", lat: 15.8, lng: -90.2, aliases: [] },
{ name: "Guinea", lat: 9.9, lng: -9.7, aliases: [] },
{ name: "Guinea-Bissau", lat: 12.0, lng: -15.2, aliases: [] },
{ name: "Guyana", lat: 4.9, lng: -58.9, aliases: [] },
{ name: "Haiti", lat: 19.1, lng: -72.3, aliases: [] },
{ name: "Honduras", lat: 15.2, lng: -86.2, aliases: [] },
{ name: "Hungary", lat: 47.2, lng: 19.5, aliases: [] },
{ name: "Iceland", lat: 64.9, lng: -19.0, aliases: [] },
{ name: "India", lat: 20.6, lng: 79.0, aliases: ["indian"] },
{ name: "Indonesia", lat: -0.8, lng: 113.9, aliases: ["indonesian"] },
{ name: "Iran", lat: 32.4, lng: 53.7, aliases: ["iranian"] },
{ name: "Iraq", lat: 33.2, lng: 43.7, aliases: ["iraqi"] },
{ name: "Ireland", lat: 53.1, lng: -7.7, aliases: [] },
{ name: "Israel", lat: 31.0, lng: 34.8, aliases: [] },
{ name: "Italy", lat: 41.9, lng: 12.6, aliases: ["italian"] },
{ name: "Ivory Coast", lat: 7.5, lng: -5.5, aliases: ["cote d'ivoire"] },
{ name: "Jamaica", lat: 18.1, lng: -77.3, aliases: [] },
{ name: "Japan", lat: 36.2, lng: 138.3, aliases: ["japanese"] },
{ name: "Jordan", lat: 30.6, lng: 36.6, aliases: [] },
{ name: "Kazakhstan", lat: 48.0, lng: 66.9, aliases: [] },
{ name: "Kenya", lat: -0.02, lng: 37.9, aliases: [] },
{ name: "Kiribati", lat: 1.9, lng: -157.4, aliases: [] },
{ name: "Kuwait", lat: 29.3, lng: 47.5, aliases: [] },
{ name: "Kyrgyzstan", lat: 41.2, lng: 74.8, aliases: [] },
{ name: "Laos", lat: 19.9, lng: 102.5, aliases: ["lao"] },
{ name: "Latvia", lat: 56.9, lng: 24.6, aliases: [] },
{ name: "Lebanon", lat: 33.9, lng: 35.9, aliases: [] },
{ name: "Lesotho", lat: -29.6, lng: 28.2, aliases: [] },
{ name: "Liberia", lat: 6.4, lng: -9.4, aliases: [] },
{ name: "Libya", lat: 26.3, lng: 17.2, aliases: [] },
{ name: "Liechtenstein", lat: 47.2, lng: 9.6, aliases: [] },
{ name: "Lithuania", lat: 55.2, lng: 23.9, aliases: [] },
{ name: "Luxembourg", lat: 49.8, lng: 6.1, aliases: [] },
{ name: "Madagascar", lat: -18.8, lng: 46.9, aliases: [] },
{ name: "Malawi", lat: -13.3, lng: 34.3, aliases: [] },
{ name: "Malaysia", lat: 4.2, lng: 101.9, aliases: [] },
{ name: "Maldives", lat: 3.2, lng: 73.2, aliases: [] },
{ name: "Mali", lat: 17.6, lng: -4.0, aliases: ["malian"] },
{ name: "Malta", lat: 35.9, lng: 14.4, aliases: [] },
{ name: "Marshall Islands", lat: 7.1, lng: 171.2, aliases: [] },
{ name: "Mauritania", lat: 21.0, lng: -10.9, aliases: [] },
{ name: "Mauritius", lat: -20.3, lng: 57.6, aliases: [] },
{ name: "Mexico", lat: 23.6, lng: -102.6, aliases: [] },
{ name: "Micronesia", lat: 6.9, lng: 158.2, aliases: [] },
{ name: "Moldova", lat: 47.4, lng: 28.4, aliases: [] },
{ name: "Monaco", lat: 43.7, lng: 7.4, aliases: [] },
{ name: "Mongolia", lat: 46.9, lng: 103.8, aliases: [] },
{ name: "Montenegro", lat: 42.7, lng: 19.4, aliases: [] },
{ name: "Morocco", lat: 31.8, lng: -7.1, aliases: ["moroccan"] },
{ name: "Mozambique", lat: -18.7, lng: 35.5, aliases: [] },
{ name: "Myanmar", lat: 21.9, lng: 96.0, aliases: ["burma"] },
{ name: "Namibia", lat: -22.9, lng: 18.5, aliases: [] },
{ name: "Nauru", lat: -0.5, lng: 166.9, aliases: [] },
{ name: "Nepal", lat: 28.4, lng: 84.1, aliases: [] },
{ name: "Netherlands", lat: 52.1, lng: 5.3, aliases: ["holland"] },
{ name: "New Zealand", lat: -40.9, lng: 174.9, aliases: ["nz"] },
{ name: "Nicaragua", lat: 12.9, lng: -85.2, aliases: [] },
{ name: "Niger", lat: 17.6, lng: 8.1, aliases: [] },
{ name: "Nigeria", lat: 9.1, lng: 8.7, aliases: [] },
{ name: "North Korea", lat: 40.3, lng: 127.5, aliases: ["dprk"] },
{ name: "North Macedonia", lat: 41.5, lng: 21.7, aliases: [] },
{ name: "Norway", lat: 60.5, lng: 8.5, aliases: [] },
{ name: "Oman", lat: 21.5, lng: 55.9, aliases: [] },
{ name: "Pakistan", lat: 30.4, lng: 69.3, aliases: [] },
{ name: "Palau", lat: 7.5, lng: 134.6, aliases: [] },
{ name: "Palestine", lat: 31.9, lng: 35.2, aliases: [] },
{ name: "Panama", lat: 8.5, lng: -80.8, aliases: [] },
{ name: "Papua New Guinea", lat: -6.3, lng: 147.2, aliases: ["png"] },
{ name: "Paraguay", lat: -23.4, lng: -58.4, aliases: [] },
{ name: "Peru", lat: -9.2, lng: -75.0, aliases: [] },
{ name: "Philippines", lat: 12.9, lng: 121.8, aliases: ["filipino"] },
{ name: "Poland", lat: 51.9, lng: 19.1, aliases: [] },
{ name: "Portugal", lat: 39.4, lng: -8.2, aliases: [] },
{ name: "Qatar", lat: 25.4, lng: 51.2, aliases: [] },
{ name: "Romania", lat: 45.9, lng: 24.9, aliases: [] },
{ name: "Russia", lat: 61.5, lng: 105.3, aliases: ["russian"] },
{ name: "Rwanda", lat: -1.9, lng: 29.9, aliases: [] },
{ name: "Saint Kitts and Nevis", lat: 17.4, lng: -62.8, aliases: [] },
{ name: "Saint Lucia", lat: 13.9, lng: -61.0, aliases: [] },
{ name: "Saint Vincent and the Grenadines", lat: 13.3, lng: -61.2, aliases: [] },
{ name: "Samoa", lat: -13.8, lng: -172.1, aliases: [] },
{ name: "San Marino", lat: 43.9, lng: 12.5, aliases: [] },
{ name: "Sao Tome and Principe", lat: 0.2, lng: 6.6, aliases: [] },
{ name: "Saudi Arabia", lat: 23.9, lng: 45.1, aliases: ["saudi"] },
{ name: "Senegal", lat: 14.5, lng: -14.5, aliases: [] },
{ name: "Serbia", lat: 44.0, lng: 21.0, aliases: [] },
{ name: "Seychelles", lat: -4.7, lng: 55.5, aliases: [] },
{ name: "Sierra Leone", lat: 8.5, lng: -11.8, aliases: [] },
{ name: "Singapore", lat: 1.4, lng: 103.8, aliases: [] },
{ name: "Slovakia", lat: 48.7, lng: 19.5, aliases: [] },
{ name: "Slovenia", lat: 46.2, lng: 14.8, aliases: [] },
{ name: "Solomon Islands", lat: -9.6, lng: 160.2, aliases: [] },
{ name: "Somalia", lat: 5.2, lng: 46.2, aliases: [] },
{ name: "South Africa", lat: -30.6, lng: 22.9, aliases: [] },
{ name: "South Korea", lat: 35.9, lng: 127.8, aliases: [] },
{ name: "South Sudan", lat: 6.9, lng: 31.3, aliases: [] },
{ name: "Spain", lat: 40.5, lng: -3.7, aliases: [] },
{ name: "Sri Lanka", lat: 7.9, lng: 80.8, aliases: [] },
{ name: "Sudan", lat: 15.5, lng: 32.5, aliases: [] },
{ name: "Suriname", lat: 3.9, lng: -56.0, aliases: [] },
{ name: "Sweden", lat: 60.1, lng: 18.6, aliases: [] },
{ name: "Switzerland", lat: 46.8, lng: 8.2, aliases: [] },
{ name: "Syria", lat: 35.0, lng: 38.0, aliases: [] },
{ name: "Taiwan", lat: 23.7, lng: 121.0, aliases: [] },
{ name: "Tajikistan", lat: 38.9, lng: 71.3, aliases: [] },
{ name: "Tanzania", lat: -6.4, lng: 34.9, aliases: [] },
{ name: "Thailand", lat: 15.9, lng: 101.0, aliases: [] },
{ name: "Togo", lat: 8.6, lng: 1.2, aliases: [] },
{ name: "Tonga", lat: -21.2, lng: -175.2, aliases: [] },
{ name: "Trinidad and Tobago", lat: 10.7, lng: -61.2, aliases: [] },
{ name: "Tunisia", lat: 33.9, lng: 9.5, aliases: [] },
{ name: "Turkey", lat: 38.9, lng: 35.2, aliases: ["turkiye"] },
{ name: "Turkmenistan", lat: 38.9, lng: 59.6, aliases: [] },
{ name: "Tuvalu", lat: -7.1, lng: 179.2, aliases: [] },
{ name: "Uganda", lat: 1.4, lng: 32.3, aliases: [] },
{ name: "Ukraine", lat: 48.4, lng: 31.2, aliases: [] },
{ name: "United Arab Emirates", lat: 23.4, lng: 53.8, aliases: ["uae"] },
{ name: "United Kingdom", lat: 55.4, lng: -3.4, aliases: ["uk"] },
{ name: "United States", lat: 37.1, lng: -95.7, aliases: ["usa"] },
{ name: "Uruguay", lat: -32.5, lng: -55.8, aliases: [] },
{ name: "Uzbekistan", lat: 41.4, lng: 64.6, aliases: [] },
{ name: "Vanuatu", lat: -15.4, lng: 168.3, aliases: [] },
{ name: "Vatican City", lat: 41.9, lng: 12.5, aliases: ["vatican"] },
{ name: "Venezuela", lat: 6.4, lng: -66.6, aliases: [] },
{ name: "Vietnam", lat: 14.1, lng: 108.3, aliases: [] },
{ name: "Yemen", lat: 15.6, lng: 48.5, aliases: [] },
{ name: "Zambia", lat: -13.1, lng: 27.8, aliases: [] },
{ name: "Zimbabwe", lat: -19.0, lng: 29.2, aliases: [] },

// tambahan geopolitik
{ name: "Kosovo", lat: 42.6, lng: 20.9, aliases: [] }
];

/* ===================== GAME STATE ===================== */
let targetCountry = null;
let guesses = [];
let gameOver = false;
let gameMode = 'unlimited';
const MAX_GUESSES_DAILY = 6;
let highlightedIdx = -1;

/* ===================== UTILITY FUNCTIONS ===================== */

// Haversine distance in km
function haversine(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const toRad = function (d) { return d * Math.PI / 180; };
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Direction arrow — FIX: menggunakan let agar bisa di-reassign
function getDirection(fromLat, fromLng, toLat, toLng) {
    const dLat = toLat - fromLat;
    let dLng = toLng - fromLng;

    // Adjust for map wrapping
    if (dLng > 180) dLng = -(360 - dLng);
    else if (dLng < -180) dLng = 360 + dLng;

    const angle = Math.atan2(dLng, dLat) * 180 / Math.PI;

    if (angle >= -22.5 && angle < 22.5) return { arrow: '↑', label: 'North', deg: 0 };
    if (angle >= 22.5 && angle < 67.5) return { arrow: '↗', label: 'NE', deg: 45 };
    if (angle >= 67.5 && angle < 112.5) return { arrow: '→', label: 'East', deg: 90 };
    if (angle >= 112.5 && angle < 157.5) return { arrow: '↘', label: 'SE', deg: 135 };
    if (angle >= 157.5 || angle < -157.5) return { arrow: '↓', label: 'South', deg: 180 };
    if (angle >= -157.5 && angle < -112.5) return { arrow: '↙', label: 'SW', deg: -135 };
    if (angle >= -112.5 && angle < -67.5) return { arrow: '←', label: 'West', deg: -90 };
    return { arrow: '↖', label: 'NW', deg: -45 };
}

// Temperature tier berdasarkan jarak
function getTempTier(dist) {
    if (dist < 500) return { label: 'On Fire', color: 'var(--very-hot)', pct: 100, emoji: '🔥' };
    if (dist < 1500) return { label: 'Very Hot', color: 'var(--hot)', pct: 88, emoji: '🌶️' };
    if (dist < 3000) return { label: 'Hot', color: 'var(--warm)', pct: 72, emoji: '☀️' };
    if (dist < 5000) return { label: 'Warm', color: 'var(--mild)', pct: 52, emoji: '🌿' };
    if (dist < 7500) return { label: 'Cool', color: 'var(--cool)', pct: 35, emoji: '🍃' };
    if (dist < 10000) return { label: 'Cold', color: 'var(--cold)', pct: 18, emoji: '❄️' };
    return { label: 'Freezing', color: 'var(--cold)', pct: 5, emoji: '🧊' };
}

// Persentase proximity (0=jauh, 100=tepat)
function getProximityPct(dist) {
    if (dist <= 0) return 100;
    var maxDist = 20000;
    var normalized = Math.min(dist / maxDist, 1);
    return Math.round((1 - normalized) * 100);
}

// Normalisasi string untuk matching
function normalizeStr(s) {
    return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[-']/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

// Cari country berdasarkan input (flexible matching)
function findCountry(input) {
    var q = input.trim().toLowerCase();
    if (!q) return null;

    var found = null;
    var i = 0;

    // 1. Exact name match
    for (i = 0; i < COUNTRIES.length; i++) {
        if (COUNTRIES[i].name.toLowerCase() === q) return COUNTRIES[i];
    }

    // 2. Alias match
    for (i = 0; i < COUNTRIES.length; i++) {
        var aliases = COUNTRIES[i].aliases;
        for (var j = 0; j < aliases.length; j++) {
            if (aliases[j].toLowerCase() === q) return COUNTRIES[i];
        }
    }

    // 3. Normalized match
    var nq = normalizeStr(q);
    for (i = 0; i < COUNTRIES.length; i++) {
        if (normalizeStr(COUNTRIES[i].name) === nq) return COUNTRIES[i];
    }
    for (i = 0; i < COUNTRIES.length; i++) {
        var aliases2 = COUNTRIES[i].aliases;
        for (var j2 = 0; j2 < aliases2.length; j2++) {
            if (normalizeStr(aliases2[j2]) === nq) return COUNTRIES[i];
        }
    }

    // 4. Starts-with match (min 3 chars)
    if (q.length >= 3) {
        for (i = 0; i < COUNTRIES.length; i++) {
            if (COUNTRIES[i].name.toLowerCase().indexOf(q) === 0) return COUNTRIES[i];
        }
    }

    return null;
}

// Filter countries untuk autocomplete
function filterCountries(input) {
    var q = input.trim().toLowerCase();
    if (!q) return [];
    var results = [];
    for (var i = 0; i < COUNTRIES.length; i++) {
        var c = COUNTRIES[i];
        var match = false;
        if (c.name.toLowerCase().indexOf(q) >= 0) match = true;
        if (!match) {
            for (var j = 0; j < c.aliases.length; j++) {
                if (c.aliases[j].toLowerCase().indexOf(q) >= 0) {
                    match = true;
                    break;
                }
            }
        }
        if (match) results.push(c);
        if (results.length >= 8) break;
    }
    return results;
}

// Daily seed berdasarkan tanggal
function getDailySeed() {
    var d = new Date();
    return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
}

// Seeded random number generator
function seededRandom(seed) {
    var h = 0;
    for (var i = 0; i < seed.length; i++) {
        h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
    }
    return function () {
        h = Math.imul(h ^ (h >>> 15), h | 1);
        h ^= h + Math.imul(h ^ (h >>> 7), h | 61);
        return ((h ^ (h >>> 14)) >>> 0) / 4294967296;
    };
}

// Format jarak
function formatDist(km) {
    if (km < 1) return '< 1 km';
    if (km < 1000) return Math.round(km) + ' km';
    return Math.round(km).toLocaleString() + ' km';
}

/* ===================== GAME LOGIC ===================== */

function initGame() {
    gameOver = false;
    guesses = [];

    if (gameMode === 'daily') {
        var rng = seededRandom(getDailySeed());
        targetCountry = COUNTRIES[Math.floor(rng() * COUNTRIES.length)];
    } else {
        targetCountry = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    }

    document.getElementById('guessCount').textContent = '0';
    document.getElementById('guessLimit').textContent = gameMode === 'daily' ? ' / ' + MAX_GUESSES_DAILY : '';
    document.getElementById('modeLabel').textContent = gameMode === 'daily' ? 'Daily Challenge' : 'Unlimited';
    document.getElementById('guessHistory').innerHTML = '';
    document.getElementById('emptyState').style.display = '';
    document.getElementById('guessInput').disabled = false;
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('proximityFill').style.width = '0%';
    document.getElementById('proximityMarker').style.left = '0%';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
}

function submitGuess() {
    if (gameOver) return;

    var input = document.getElementById('guessInput');
    var val = input.value.trim();
    if (!val) return;

    var country = findCountry(val);
    if (!country) {
        showToast('Country not recognized. Try a different spelling.');
        input.focus();
        input.select();
        return;
    }

    // Cek duplikat
    for (var i = 0; i < guesses.length; i++) {
        if (guesses[i].country.name === country.name) {
            showToast('You already guessed that country.');
            input.value = '';
            input.focus();
            return;
        }
    }

    // Hitung jarak dan feedback
    var dist = haversine(country.lat, country.lng, targetCountry.lat, targetCountry.lng);
    var dir = getDirection(country.lat, country.lng, targetCountry.lat, targetCountry.lng);
    var temp = getTempTier(dist);
    var isCorrect = country.name === targetCountry.name;

    var guess = { country: country, dist: dist, dir: dir, temp: temp, isCorrect: isCorrect };
    guesses.push(guess);

    // Update UI
    input.value = '';
    document.getElementById('emptyState').style.display = 'none';
    renderGuessCard(guess);
    updateProximity();
    document.getElementById('guessCount').textContent = guesses.length;

    if (isCorrect) {
        handleWin();
    } else if (gameMode === 'daily' && guesses.length >= MAX_GUESSES_DAILY) {
        handleLose();
    } else {
        input.focus();
    }
}

function handleWin() {
    gameOver = true;
    document.getElementById('guessInput').disabled = true;
    document.getElementById('submitBtn').disabled = true;

    // Tandai card pemenang
    var cards = document.querySelectorAll('.guess-card');
    if (cards.length) cards[0].classList.add('is-winner');

    // Proximity bar full
    document.getElementById('proximityFill').style.width = '100%';
    document.getElementById('proximityMarker').style.left = '100%';

    // Tampilkan win modal setelah delay
    setTimeout(function () {
        var titles = ['Nailed it!', 'Perfect navigation!', 'Geography genius!', 'Sharp instincts!', 'Well done!'];
        var subs = [
            'You have an excellent sense of geography.',
            'Your spatial reasoning is impressive.',
            'That was some serious map awareness.',
            'You read the clues like a pro.',
            'Clean and efficient. Nice work.'
        ];
        var ti = Math.min(guesses.length - 1, titles.length - 1);

        document.getElementById('winTitle').textContent = titles[ti];
        document.getElementById('winSubtitle').textContent = subs[ti];
        document.getElementById('winStats').innerHTML =
            '<div class="stat-card"><div class="stat-value" style="color:var(--accent)">' + guesses.length + '</div><div class="stat-label">Guesses</div></div>' +
            '<div class="stat-card"><div class="stat-value">' + getScore(guesses.length) + '</div><div class="stat-label">Score</div></div>';
        document.getElementById('shareBox').classList.add('hidden');
        openModal('winModal');
    }, 600);
}

function handleLose() {
    gameOver = true;
    document.getElementById('guessInput').disabled = true;
    document.getElementById('submitBtn').disabled = true;

    setTimeout(function () {
        document.getElementById('loseText').textContent = 'The hidden country was:';
        document.getElementById('loseCountry').textContent = targetCountry.name;
        openModal('loseModal');
    }, 500);
}

function getScore(attempts) {
    if (attempts === 1) return 1000;
    if (attempts === 2) return 900;
    if (attempts === 3) return 750;
    if (attempts === 4) return 550;
    if (attempts === 5) return 350;
    if (attempts === 6) return 200;
    return Math.max(50, 200 - (attempts - 6) * 20);
}

function updateProximity() {
    // Cari guess terdekat
    var closest = guesses[0];
    for (var i = 1; i < guesses.length; i++) {
        if (guesses[i].dist < closest.dist) closest = guesses[i];
    }

    var pct = getProximityPct(closest.dist);
    document.getElementById('proximityFill').style.width = pct + '%';
    document.getElementById('proximityMarker').style.left = pct + '%';

    // Highlight guess terdekat
    var allCards = document.querySelectorAll('.guess-card');
    for (var j = 0; j < allCards.length; j++) {
        var isClosest = guesses[j] === closest && guesses.length > 1 && !guesses[j].isCorrect;
        allCards[j].classList.toggle('is-closest', isClosest);
    }
}

/* ===================== RENDERING ===================== */

function renderGuessCard(guess) {
    var container = document.getElementById('guessHistory');
    var card = document.createElement('div');
    card.className = 'guess-card';
    card.style.setProperty('--temp-color', guess.temp.color);

    var dirRotation = guess.dir.deg;

    card.innerHTML =
        '<div class="flex items-center gap-4">' +
            '<div class="direction-arrow" style="transform:rotate(' + dirRotation + 'deg)">↑</div>' +
            '<div class="flex-1 min-w-0">' +
                '<div class="flex items-center gap-2 mb-1">' +
                    '<span class="font-display font-semibold text-sm sm:text-base truncate" style="color:var(--fg)">' + guess.country.name + '</span>' +
                    (guess.isCorrect ? '<span class="text-xs font-semibold px-2 py-0.5 rounded-full" style="background:rgba(255,45,45,0.2);color:var(--very-hot)">CORRECT</span>' : '') +
                '</div>' +
                '<div class="flex items-center gap-3 text-xs sm:text-sm" style="color:var(--fg-dim)">' +
                    '<span>' + formatDist(guess.dist) + '</span>' +
                    '<span style="color:var(--muted)">·</span>' +
                    '<span>' + guess.dir.label + '</span>' +
                    '<span style="color:var(--muted)">·</span>' +
                    '<span class="font-medium" style="color:' + guess.temp.color + '">' + guess.temp.label + '</span>' +
                '</div>' +
                '<div class="temp-bar-track">' +
                    '<div class="temp-bar-fill" style="width:' + guess.temp.pct + '%;background:' + guess.temp.color + '"></div>' +
                '</div>' +
            '</div>' +
            '<span class="text-xl flex-shrink-0">' + guess.temp.emoji + '</span>' +
        '</div>';

    // Prepend (terbaru di atas)
    if (container.firstChild) {
        container.insertBefore(card, container.firstChild);
    } else {
        container.appendChild(card);
    }
}

/* ===================== AUTOCOMPLETE ===================== */

var guessInput = document.getElementById('guessInput');
var autocompleteEl = document.getElementById('autocomplete');

guessInput.addEventListener('input', function () {
    var results = filterCountries(this.value);
    highlightedIdx = -1;

    if (results.length === 0 || this.value.trim().length < 1) {
        autocompleteEl.classList.remove('active');
        return;
    }

    var q = this.value.trim().toLowerCase();
    var html = '';

    for (var i = 0; i < results.length; i++) {
        var c = results[i];
        var nameLower = c.name.toLowerCase();
        var matchStart = nameLower.indexOf(q);
        var nameHtml = c.name;

        if (matchStart >= 0) {
            nameHtml = c.name.slice(0, matchStart) +
                '<span class="match">' + c.name.slice(matchStart, matchStart + q.length) + '</span>' +
                c.name.slice(matchStart + q.length);
        }

        html += '<div class="autocomplete-item" data-index="' + i + '" role="option">' + nameHtml + '</div>';
    }

    autocompleteEl.innerHTML = html;
    autocompleteEl.classList.add('active');

    // Click handler
    var items = autocompleteEl.querySelectorAll('.autocomplete-item');
    (function (itemsRef, resultsRef) {
        for (var j = 0; j < itemsRef.length; j++) {
            (function (item, idx) {
                item.addEventListener('mousedown', function (e) {
                    e.preventDefault();
                    guessInput.value = resultsRef[idx].name;
                    autocompleteEl.classList.remove('active');
                    submitGuess();
                });
            })(itemsRef[j], j);
        }
    })(items, results);
});

guessInput.addEventListener('keydown', function (e) {
    var items = autocompleteEl.querySelectorAll('.autocomplete-item');

    if (!autocompleteEl.classList.contains('active') || items.length === 0) {
        if (e.key === 'Enter') submitGuess();
        return;
    }

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        highlightedIdx = Math.min(highlightedIdx + 1, items.length - 1);
        updateHighlight(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        highlightedIdx = Math.max(highlightedIdx - 1, 0);
        updateHighlight(items);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (highlightedIdx >= 0 && highlightedIdx < items.length) {
            items[highlightedIdx].dispatchEvent(new Event('mousedown'));
        } else {
            autocompleteEl.classList.remove('active');
            submitGuess();
        }
    } else if (e.key === 'Escape') {
        autocompleteEl.classList.remove('active');
    }
});

function updateHighlight(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle('highlighted', i === highlightedIdx);
        if (i === highlightedIdx) items[i].scrollIntoView({ block: 'nearest' });
    }
}

// Tutup autocomplete saat klik di luar
document.addEventListener('click', function (e) {
    if (!e.target.closest('#inputArea')) {
        autocompleteEl.classList.remove('active');
    }
});

/* ===================== MODALS ===================== */

function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// Tutup modal saat klik overlay
var overlays = document.querySelectorAll('.modal-overlay');
for (var oi = 0; oi < overlays.length; oi++) {
    (function (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    })(overlays[oi]);
}

// Tutup modal dengan Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        var activeModals = document.querySelectorAll('.modal-overlay.active');
        for (var mi = 0; mi < activeModals.length; mi++) {
            activeModals[mi].classList.remove('active');
        }
    }
});

function showHowToPlay() {
    openModal('howToPlayModal');
}

/* ===================== SHARE ===================== */

async function shareResult() {
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn.classList.contains('btn-loading')) return;

    shareBtn.classList.add('btn-loading');

    const tempEmojis = {
        'On Fire': '🔥', 'Very Hot': '🌶️', 'Hot': '☀️',
        'Warm': '🌿', 'Cool': '🍃', 'Cold': '❄️', 'Freezing': '🧊'
    };
    const dirEmojis = {
        'North': '⬆️', 'NE': '↗️', 'East': '➡️', 'SE': '↘️',
        'South': '⬇️', 'SW': '↙️', 'West': '⬅️', 'NW': '↖️'
    };

    // 1. Generate text for fallback/clipboard
    let text = '🌍 Hot-Cold Geography ' + (gameMode === 'daily' ? '(Daily)' : '') + '\n';
    text += guesses.length + '/' + (gameMode === 'daily' ? MAX_GUESSES_DAILY : '∞') + ' | Score: ' + getScore(guesses.length) + '\n\n';

    let historyEmojis = '';
    for (let i = 0; i < guesses.length; i++) {
        const g = guesses[i];
        const emoji = tempEmojis[g.temp.label] || '❓';
        text += emoji + ' ' + (dirEmojis[g.dir.label] || '→') + ' ' + g.country.name + '\n';
        historyEmojis += emoji;
    }
    text += '\n' + (gameMode === 'daily' ? '#HotColdGeoDaily' : '#HotColdGeography');

    // 2. Prepare Snapshot Template
    document.getElementById('snapshotMode').textContent = gameMode === 'daily' ? 'Daily Challenge' : 'Unlimited Mode';
    document.getElementById('snapshotStatus').textContent = (guesses[guesses.length - 1].isCorrect) ? 'MISSION ACCOMPLISHED' : 'GEOGRAPHY CHALLENGE';
    document.getElementById('snapshotCountry').textContent = targetCountry.name;
    document.getElementById('snapGuesses').textContent = guesses.length;
    document.getElementById('snapScore').textContent = getScore(guesses.length);
    document.getElementById('snapshotHistory').textContent = historyEmojis;

    try {
        // 3. Render Snapshot to Image
        const snapshotEl = document.getElementById('shareSnapshot');
        const canvas = await html2canvas(snapshotEl, {
            scale: 2, // Higher quality
            backgroundColor: '#0b0d13',
            logging: false,
            useCORS: true
        });

        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        const file = new File([blob], 'hot-cold-geography.png', { type: 'image/png' });

        // 4. Try Web Share API
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: 'Hot-Cold Geography',
                text: text
            });
            showToast('Shared successfully!');
        } else {
            // Fallback: Download and Copy Text
            downloadImage(canvas);
            copyToClipboard(text);
            showToast('Image downloaded & text copied!');
        }
    } catch (err) {
        console.error('Share failed:', err);
        // Extreme fallback
        copyToClipboard(text);
        showToast('Text copied to clipboard!');
    } finally {
        shareBtn.classList.remove('btn-loading');
    }
}

function downloadImage(canvas) {
    const link = document.createElement('a');
    link.download = 'hot-cold-geography.png';
    link.href = canvas.toDataURL();
    link.click();
}

function copyToClipboard(text) {
    const shareBox = document.getElementById('shareBox');
    shareBox.textContent = text;
    shareBox.classList.remove('hidden');

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
    } else {
        fallbackCopy(shareBox);
    }
}

function fallbackCopy(shareBox) {
    var range = document.createRange();
    range.selectNodeContents(shareBox);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    showToast('Select and copy the text above.');
}

/* ===================== TOAST ===================== */

var toastTimeout;
function showToast(msg) {
    var toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
        toast.classList.remove('show');
    }, 2500);
}

/* ===================== MODE SWITCHING ===================== */

function setMode(mode) {
    gameMode = mode;
    document.getElementById('btnUnlimited').classList.toggle('active', mode === 'unlimited');
    document.getElementById('btnDaily').classList.toggle('active', mode === 'daily');
    initGame();
}

function resetGame() {
    initGame();
}

/* ===================== INIT ===================== */

initGame();

// Tampilkan how to play di kunjungan pertama
if (!localStorage.getItem('hcg_played')) {
    setTimeout(function () {
        showHowToPlay();
    }, 400);
    localStorage.setItem('hcg_played', '1');
}