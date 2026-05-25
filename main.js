// --- 100 ESCAPE ROOM EMOTICONS & STYLES ---
const LOCK_STYLES = [
  { id: "skull",      emoji: "💀", shackleWidth: 60, label: "Döskalle", category: "Skräck" },
  { id: "ghost",      emoji: "👻", shackleWidth: 50, label: "Spöke", category: "Skräck" },
  { id: "vampire",    emoji: "🧛", shackleWidth: 55, label: "Vampyr", category: "Skräck" },
  { id: "coffin",     emoji: "⚰️", shackleWidth: 55, label: "Kista", category: "Skräck" },
  { id: "spiderweb",  emoji: "🕸️", shackleWidth: 65, label: "Spindelnät", category: "Skräck" },
  { id: "bat",        emoji: "🦇", shackleWidth: 50, label: "Fladdermus", category: "Skräck" },
  { id: "zombie",     emoji: "🧟", shackleWidth: 55, label: "Zombie", category: "Skräck" },
  { id: "clown",      emoji: "🤡", shackleWidth: 60, label: "Mördarpajas", category: "Skräck" },
  { id: "pumpkin",    emoji: "🎃", shackleWidth: 55, label: "Pumpa", category: "Skräck" },
  { id: "devil",      emoji: "😈", shackleWidth: 50, label: "Demon", category: "Skräck" },
  { id: "crown",      emoji: "👑", shackleWidth: 70, label: "Krona", category: "Äventyr" },
  { id: "pirate",     emoji: "🏴‍☠️", shackleWidth: 60, label: "Sjörövare", category: "Äventyr" },
  { id: "gem",        emoji: "💎", shackleWidth: 55, label: "Ädelsten", category: "Äventyr" },
  { id: "compass",    emoji: "🧭", shackleWidth: 60, label: "Kompass", category: "Äventyr" },
  { id: "map",        emoji: "🗺️", shackleWidth: 65, label: "Skattekarta", category: "Äventyr" },
  { id: "chest",      emoji: "🧳", shackleWidth: 55, label: "Koffert", category: "Äventyr" },
  { id: "anchor",     emoji: "⚓", shackleWidth: 60, label: "Ankare", category: "Äventyr" },
  { id: "shark",      emoji: "🦈", shackleWidth: 55, label: "Haj", category: "Äventyr" },
  { id: "spyglass",   emoji: "🔭", shackleWidth: 50, label: "Kikare", category: "Äventyr" },
  { id: "trident",    emoji: "🔱", shackleWidth: 50, label: "Treudd", category: "Äventyr" },
  { id: "potion",     emoji: "🧪", shackleWidth: 55, label: "Motgift", category: "Sci-Fi" },
  { id: "alien",      emoji: "👽", shackleWidth: 50, label: "Utomjording", category: "Sci-Fi" },
  { id: "dna",        emoji: "🧬", shackleWidth: 60, label: "DNA-prov", category: "Sci-Fi" },
  { id: "rocket",     emoji: "🚀", shackleWidth: 50, label: "Raket", category: "Sci-Fi" },
  { id: "magnet",     emoji: "🧲", shackleWidth: 55, label: "Magnet", category: "Sci-Fi" },
  { id: "biohazard",  emoji: "☣️", shackleWidth: 60, label: "Giftigt", category: "Sci-Fi" },
  { id: "robot",      emoji: "🤖", shackleWidth: 55, label: "AI-Robot", category: "Sci-Fi" },
  { id: "ufo",        emoji: "🛸", shackleWidth: 65, label: "UFO", category: "Sci-Fi" },
  { id: "microscope", emoji: "🔬", shackleWidth: 50, label: "Mikroskop", category: "Sci-Fi" },
  { id: "saturn",     emoji: "🪐", shackleWidth: 70, label: "Planet", category: "Sci-Fi" },
  { id: "clue",       emoji: "🔍", shackleWidth: 50, label: "Förstoringsglas", category: "Mysterium" },
  { id: "money",      emoji: "💰", shackleWidth: 60, label: "Pengasäck", category: "Mysterium" },
  { id: "handcuffs",  emoji: "⛓️", shackleWidth: 60, label: "Handbojor", category: "Mysterium" },
  { id: "diamond",    emoji: "💎", shackleWidth: 55, label: "Diamantstöld", category: "Mysterium" },
  { id: "footprints", emoji: "👣", shackleWidth: 50, label: "Fotspår", category: "Mysterium" },
  { id: "fingerprint",emoji: "👤", shackleWidth: 55, label: "Misstänkt", category: "Mysterium" },
  { id: "bomb",       emoji: "💣", shackleWidth: 55, label: "Bomb", category: "Mysterium" },
  { id: "siren",      emoji: "🚨", shackleWidth: 55, label: "Polislarm", category: "Mysterium" },
  { id: "safe",       emoji: "🏦", shackleWidth: 65, label: "Bankvalv", category: "Mysterium" },
  { id: "letter",     emoji: "✉️", shackleWidth: 50, label: "Hotbrev", category: "Mysterium" },
  { id: "hourglass",  emoji: "⏳", shackleWidth: 50, label: "Timglas", category: "Mytologi" },
  { id: "crystal",    emoji: "🔮", shackleWidth: 60, label: "Spåkula", category: "Mytologi" },
  { id: "candle",     emoji: "🕯️", shackleWidth: 45, label: "Ljus", category: "Mytologi" },
  { id: "mummy",      emoji: "🧻", shackleWidth: 55, label: "Mumie", category: "Mytologi" },
  { id: "scroll",     emoji: "📜", shackleWidth: 60, label: "Rulle", category: "Mytologi" },
  { id: "pyramid",    emoji: "🔺", shackleWidth: 60, label: "Pyramid", category: "Mytologi" },
  { id: "snake",      emoji: "🐍", shackleWidth: 50, label: "Orm", category: "Mytologi" },
  { id: "eye",        emoji: "👁️", shackleWidth: 55, label: "Allseende ögat", category: "Mytologi" },
  { id: "ring",       emoji: "💍", shackleWidth: 50, label: "Magisk ring", category: "Mytologi" },
  { id: "fire",       emoji: "🔥", shackleWidth: 55, label: "Eld", category: "Mytologi" },
  { id: "shield",     emoji: "🛡️", shackleWidth: 65, label: "Sköld", category: "Bunker" },
  { id: "sword",      emoji: "⚔️", shackleWidth: 60, label: "Svärd", category: "Bunker" },
  { id: "radio",      emoji: "📻", shackleWidth: 55, label: "Komradio", category: "Bunker" },
  { id: "flashlight", emoji: "🔦", shackleWidth: 50, label: "Ficklampa", category: "Bunker" },
  { id: "gasmask",    emoji: "🎭", shackleWidth: 55, label: "Gasmask", category: "Bunker" },
  { id: "radar",      emoji: "📡", shackleWidth: 60, label: "Parabolantenn", category: "Bunker" },
  { id: "medkit",     emoji: "🧰", shackleWidth: 55, label: "Första hjälpen", category: "Bunker" },
  { id: "target",     emoji: "🎯", shackleWidth: 55, label: "Måltavla", category: "Bunker" },
  { id: "chains",     emoji: "⛓️", shackleWidth: 60, label: "Tunga kedjor", category: "Bunker" },
  { id: "helmet",     emoji: "🪖", shackleWidth: 55, label: "Militärhjälm", category: "Bunker" },
  { id: "monkey",     emoji: "🐒", shackleWidth: 50, label: "Apa", category: "Djungel" },
  { id: "tiger",      emoji: "🐅", shackleWidth: 55, label: "Tiger", category: "Djungel" },
  { id: "crocodile",  emoji: "🐊", shackleWidth: 65, label: "Krokodil", category: "Djungel" },
  { id: "spider",     emoji: "🕷️", shackleWidth: 60, label: "Spindel", category: "Djungel" },
  { id: "bug",        emoji: "🪲", shackleWidth: 50, label: "Skalbagge", category: "Djungel" },
  { id: "mushroom",   emoji: "🍄", shackleWidth: 50, label: "Giftsvamp", category: "Djungel" },
  { id: "tree",       emoji: "🌳", shackleWidth: 60, label: "Heligt träd", category: "Djungel" },
  { id: "banana",     emoji: "🍌", shackleWidth: 45, label: "Bananledtråd", category: "Djungel" },
  { id: "volcano",    emoji: "🌋", shackleWidth: 65, label: "Vulkan", category: "Djungel" },
  { id: "leaf",       emoji: "🌿", shackleWidth: 50, label: "Mytisk växt", category: "Djungel" },
  { id: "cards",      emoji: "🃏", shackleWidth: 55, label: "Spelkort", category: "Casino" },
  { id: "dice",       emoji: "🎲", shackleWidth: 55, label: "Tärning", category: "Casino" },
  { id: "trophy",     emoji: "🏆", shackleWidth: 60, label: "Pokal", category: "Casino" },
  { id: "seven",      emoji: "7️⃣", shackleWidth: 50, label: "Jackpot sju", category: "Casino" },
  { id: "clover",     emoji: "🍀", shackleWidth: 50, label: "Fyrklöver", category: "Casino" },
  { id: "wine",       emoji: "🍷", shackleWidth: 45, label: "Giftbägare", category: "Casino" },
  { id: "tophat",     emoji: "🎩", shackleWidth: 55, label: "Trollerihatt", category: "Casino" },
  { id: "ticket",     emoji: "🎟️", shackleWidth: 55, label: "Inträdesbiljett", category: "Casino" },
  { id: "chip",       emoji: "🪙", shackleWidth: 50, label: "Casinopolett", category: "Casino" },
  { id: "baguette",   emoji: "🥖", shackleWidth: 55, label: "Brödledtråd", category: "Casino" },
  { id: "dragon",     emoji: "🐉", shackleWidth: 60, label: "Drake", category: "Medeltid" },
  { id: "wizard",     emoji: "🧙", shackleWidth: 55, label: "Trollkarl", category: "Medeltid" },
  { id: "castle",     emoji: "🏰", shackleWidth: 70, label: "Slott", category: "Medeltid" },
  { id: "unicorn",    emoji: "🦄", shackleWidth: 55, label: "Enhörning", category: "Medeltid" },
  { id: "wolf",       emoji: "🐺", shackleWidth: 55, label: "Varg", category: "Medeltid" },
  { id: "axe",        emoji: "🪓", shackleWidth: 50, label: "Stridsyxa", category: "Medeltid" },
  { id: "bow",        emoji: "🏹", shackleWidth: 55, label: "Pilbåge", category: "Medeltid" },
  { id: "hammer",     emoji: "🔨", shackleWidth: 50, label: "Smedshammare", category: "Medeltid" },
  { id: "beer",       emoji: "🍺", shackleWidth: 50, label: "Trämugg", category: "Medeltid" },
  { id: "feather",    emoji: "🪶", shackleWidth: 45, label: "Fjäderpenna", category: "Medeltid" },
  { id: "gamepad",    emoji: "🎮", shackleWidth: 60, label: "Handkontroll", category: "Nördigt" },
  { id: "joystick",   emoji: "🕹️", shackleWidth: 55, label: "Joystick", category: "Nördigt" },
  { id: "floppy",     emoji: "💾", shackleWidth: 55, label: "Diskett", category: "Nördigt" },
  { id: "laptop",     emoji: "💻", shackleWidth: 60, label: "Datorhack", category: "Nördigt" },
  { id: "battery",    emoji: "🔋", shackleWidth: 50, label: "Energicell", category: "Nördigt" },
  { id: "gear",       emoji: "⚙️", shackleWidth: 55, label: "Kugghjul", category: "Nördigt" },
  { id: "bulb",       emoji: "💡", shackleWidth: 50, label: "Snilleblixt", category: "Nördigt" },
  { id: "tv",         emoji: "📺", shackleWidth: 55, label: "Övervakning", category: "Nördigt" },
  { id: "headphones", emoji: "🎧", shackleWidth: 55, label: "Hörlurar", category: "Nördigt" },
  { id: "cd",         emoji: "💿", shackleWidth: 50, label: "Krypterad CD", category: "Nördigt" }
];

let generatedData = null;
let currentSearch = "";

// Initiering
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has("msg") && params.has("pw")) {
    renderUnlockPage(params);
  } else {
    renderGeneratorPage();
  }
});

function renderGeneratorPage() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <div class="page">
      <div class="card">
        <div class="header">
          <svg width="36" height="36" viewBox="0 0 36 36" style="margin-right: 10px;">
            <rect x="5" y="17" width="26" height="18" rx="4" fill="#e8c547" />
            <path d="M11,17 L11,11 Q11,5 18,5 Q25,5 25,11 L25,17" fill="none" stroke="#e8c547" stroke-width="4" stroke-linecap="round" />
            <circle cx="18" cy="26" r="3" fill="#1a1a1a" />
          </svg>
          <span class="title">QR-Lås Generator</span>
        </div>
        <p class="sub">Skapa ett lösenordsskyddat QR-lås med ett hemligt meddelande</p>

        <label class="label">Hemligt meddelande</label>
        <textarea id="msgInput" class="textarea" rows="3" placeholder="Skriv meddelandet som visas när rätt lösenord anges..."></textarea>

        <label class="label">Lösenord</label>
        <input id="pwInput" class="input" type="text" placeholder="T.ex. RÖKT" />

        <label class="label">Ledtråd (valfri)</label>
        <input id="hintInput" class="input" type="text" placeholder="En liten hint om lösenordet..." />

        <button id="genBtn" class="btn">Generera lås</button>
        <div id="resultContainer"></div>
      </div>
    </div>
  `;

  const pwInput = document.getElementById("pwInput");
  pwInput.addEventListener("input", () => {
    pwInput.value = pwInput.value.toUpperCase().replace(/[^A-ZÅÄÖ0-9]/g, "");
  });

  document.getElementById("genBtn").addEventListener("click", () => {
    const msg = document.getElementById("msgInput").value.trim();
    const pw = pwInput.value.trim();
    const hint = document.getElementById("hintInput").value.trim();

    if (!msg || !pw) return alert("Fyll i både meddelande och lösenord!");

    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
      msg: btoa(encodeURIComponent(msg)),
      pw: btoa(encodeURIComponent(pw)),
      ...(hint ? { hint: btoa(encodeURIComponent(hint)) } : {})
    });

    generatedData = {
      unlockUrl: `${baseUrl}?${params.toString()}`,
      rawParams: params
    };

    renderResults();
  });
}

function renderResults() {
  const container = document.getElementById("resultContainer");
  container.innerHTML = `
    <div class="result-box">
      <p class="result-title">🔐 Ditt lås är klart! Välj stil nedan:</p>
      <input id="searchBar" class="search-bar" type="text" placeholder="🔍 Sök bland 100 stilar (t.ex. Skräck, Casino, Robot)..." value="${currentSearch}" />
      <div id="locksGrid" class="locks-grid"></div>
      <div class="link-row">
        <div class="link-box">${generatedData.unlockUrl.slice(0, 55)}…</div>
        <button id="copyBtn" class="copy-btn">Kopier länk</button>
      </div>
      <button id="previewBtn" class="preview-btn">Förhandsgranska upplåsningssidan →</button>
    </div>
  `;

  document.getElementById("copyBtn").addEventListener("click", () => {
    navigator.clipboard.writeText(generatedData.unlockUrl);
    const btn = document.getElementById("copyBtn");
    btn.innerText = "✓ Kopierad!";
    setTimeout(() => { btn.innerText = "Kopiera länk"; }, 2000);
  });

  document.getElementById("previewBtn").addEventListener("click", () => {
    renderUnlockPage(generatedData.rawParams, true);
  });

  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    updateGrid();
  });

  updateGrid();
}

function updateGrid() {
  const grid = document.getElementById("locksGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const query = currentSearch.toLowerCase();
  const filtered = LOCK_STYLES.filter(l => l.label.toLowerCase().includes(query) || l.category.toLowerCase().includes(query));

  filtered.forEach(style => {
    const item = document.createElement("div");
    item.className = "lock-item";

    const size = 130;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=svg&data=${encodeURIComponent(generatedData.unlockUrl)}`;
    
    const bodyY = size * 1.1 * 0.38;
    const bodyH = size * 1.1 * 0.58;
    const shW = style.shackleWidth * (size / 260);
    const shR = shW * 0.5;
    const cx = size / 2;
    const shX1 = cx - shW * 0.5;
    const shX2 = cx + shW * 0.5;
    const shTop = size * 1.1 * 0.04;
    const qrPad = 14;
    const qrSize = size - qrPad * 2 - 10;

    item.innerHTML = `
      <svg width="${size}" height="${size * 1.1}" viewBox="0 0 ${size} ${size * 1.1}">
        <path d="M${shX1},${bodyY + 10} L${shX1},${shTop + shR} Q${shX1},${shTop} ${shX1 + shR},${shTop} Q${shX2},${shTop} ${shX2},${shTop + shR} L${shX2},${bodyY + 10}" fill="none" stroke="black" stroke-width="${shW * 0.45}" stroke-linecap="round"/>
        <rect x="${qrPad * 0.5}" y="${bodyY}" width="${size - qrPad}" height="${bodyH}" rx="12" ry="12" fill="black"/>
        <text x="${cx}" y="${bodyY + 20}" text-anchor="middle" font-size="16">${style.emoji}</text>
        <image href="${qrUrl}" x="${(size - qrSize) / 2}" y="${bodyY + 28}" width="${qrSize}" height="${qrSize}"/>
      </svg>
      <div class="lock-label">${style.label}</div>
      <div class="lock-category">${style.category}</div>
      <button class="dl-btn" data-id="${style.id}">⬇ SVG</button>
    `;

    item.querySelector(".dl-btn").addEventListener("click", () => downloadSVG(style, generatedData.unlockUrl));
    grid.appendChild(item);
  });
}

async function downloadSVG(style, url) {
  const qrDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=svg&data=${encodeURIComponent(url)}`;
  try {
    const resp = await fetch(qrDataUrl);
    const blob = await resp.blob();
    const reader = new FileReader();
    reader.onload = () => {
      const embedded = reader.result;
      const W = 260, H = 286;
      const bodyY = H * 0.38, bodyH = H * 0.58;
      const shW = style.shackleWidth, shR = shW * 0.5;
      const cx = W / 2, shX1 = cx - shW * 0.5, shX2 = cx + shW * 0.5;
      const qrPad = 14, qrSize = W - qrPad * 2 - 28;

      const svgStr = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <path d="M${shX1},${bodyY + 10} L${shX1},${H * 0.04 + shR} Q${shX1},${H * 0.04} ${shX1 + shR},${H * 0.04} Q${shX2},${H * 0.04} ${shX2},${H * 0.04 + shR} L${shX2},${bodyY + 10}" fill="none" stroke="black" stroke-width="${shW * 0.45}" stroke-linecap="round"/>
  <rect x="${qrPad * 0.5}" y="${bodyY}" width="${W - qrPad}" height="${bodyH}" rx="20" ry="20" fill="black"/>
  <text x="${cx}" y="${bodyY + 30}" text-anchor="middle" font-size="24">${style.emoji}</text>
  <image href="${embedded}" x="${(W - qrSize) / 2}" y="${bodyY + 44}" width="${qrSize}" height="${qrSize}"/>
</svg>`;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([svgStr], { type: "image/svg+xml" }));
      a.download = `qr-lock-${style.id}.svg`;
      a.click();
    };
    reader.readAsDataURL(blob);
  } catch (e) { alert("Kunde inte ladda ner SVG."); }
}

function renderUnlockPage(params, isPreview = false) {
  const root = document.getElementById("root");
  const pw = decodeURIComponent(atob(params.get("pw") || ""));
  const msg = decodeURIComponent(atob(params.get("msg") || ""));
  const hint = params.has("hint") ? decodeURIComponent(atob(params.get("hint"))) : "";
  const placeholder = Array(pw.length || 4).fill("A").join("-");

  root.innerHTML = `
    <div class="unlock-bg">
      ${isPreview ? `<button id="backToGen" class="back-btn">← Tillbaka till Generatorn</button>` : ""}
      <div id="lockCard" class="lock-card">
        <div class="lock-icon">
          <svg id="lockSvgIcon" width="120" height="130" viewBox="0 0 120 130">
            <path d="M35,60 L35,28 Q35,8 60,8 Q85,8 85,28 L85,60" fill="none" stroke="black" stroke-width="16" stroke-linecap="round" />
            <rect x="10" y="58" width="100" height="68" rx="12" fill="black" />
            <circle cx="60" cy="84" r="10" fill="white" />
          </svg>
        </div>
        <div id="unlockForm">
          <input id="unlockInput" class="code-input" type="text" placeholder="${placeholder}" maxlength="20" autofocus />
          ${hint ? `<p class="hint-text">💡 Ledtråd: ${hint}</p>` : ""}
          <p id="errorText" class="error-text" style="display:none;">❌ Fel lösenord, försök igen</p>
          <button id="unlockBtn" class="unlock-btn">Lås upp</button>
        </div>
      </div>
    </div>
  `;

  if (isPreview) {
    document.getElementById("backToGen").addEventListener("click", renderGeneratorPage);
  }

  const inputEl = document.getElementById("unlockInput");
  inputEl.addEventListener("input", () => {
    inputEl.value = inputEl.value.toUpperCase().replace(/[^A-ZÅÄÖ0-9]/g, "");
  });

  const card = document.getElementById("lockCard");
  const errorText = document.getElementById("errorText");

  function submitUnlock() {
    if (inputEl.value === pw) {
      document.getElementById("unlockForm").innerHTML = `
        <div class="message-box">
          <p class="message-label">🎉 Upplåst!</p>
          <p class="message-text">${msg}</p>
        </div>
      `;
      const paths = document.getElementById("lockSvgIcon").querySelectorAll("path, rect");
      paths.forEach(p => p.setAttribute("fill", "#4ade80"));
      document.getElementById("lockSvgIcon").querySelector("path").setAttribute("stroke", "#4ade80");
    } else {
      errorText.style.display = "block";
      card.style.animation = "shake 0.5s ease";
      setTimeout(() => { card.style.animation = "none"; }, 500);
      setTimeout(() => { errorText.style.display = "none"; }, 2000);
    }
  }

  document.getElementById("unlockBtn").addEventListener("click", submitUnlock);
  inputEl.addEventListener("keydown", (e) => { if (e.key === "Enter") submitUnlock(); });
}
