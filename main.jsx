import { useState, useEffect } from "react";

const QR_API = (url) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=svg&data=${encodeURIComponent(url)}`;

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
  { id: "cd",         emoji: "💿", shackleWidth: 50, label: "Krypterad CD", category: "Nördigt" },
];

function LockSVG({ style, qrUrl, size = 260 }) {
  const W = size;
  const H = size * 1.1;
  const bodyY = H * 0.38;
  const bodyH = H * 0.58;
  const shW = style.shackleWidth * (W / 260);
  const shR = shW * 0.5;
  const cx = W / 2;
  const shX1 = cx - shW * 0.5;
  const shX2 = cx + shW * 0.5;
  const shTop = H * 0.04;
  const keyholeY = bodyY + 32;
  const qrPad = 14;
  const qrSize = W - qrPad * 2 - 28;
  const qrY = keyholeY + 24;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <path
        d={`M${shX1},${bodyY + 10} L${shX1},${shTop + shR} Q${shX1},${shTop} ${shX1 + shR},${shTop} Q${shX2},${shTop} ${shX2},${shTop + shR} L${shX2},${bodyY + 10}`}
        fill="none" stroke="black" strokeWidth={shW * 0.45} strokeLinecap="round"
      />
      <rect x={qrPad * 0.5} y={bodyY} width={W - qrPad} height={bodyH} rx={20} ry={20} fill="black" />
      <text x={cx} y={keyholeY} textAnchor="middle" fontSize={24} style={{ userSelect: "none" }}>{style.emoji}</text>
      {qrUrl && <image href={qrUrl} x={(W - qrSize) / 2} y={qrY} width={qrSize} height={qrSize} />}
    </svg>
  );
}

function GeneratorPage({ onPreview }) {
  const [message, setMessage] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hint, setHint] = React.useState("");
  const [generated, setGenerated] = React.useState(null);
  const [copied, setCopied] = React.useState(false);
  const [downloading, setDownloading] = React.useState(null);
  const [baseUrl, setBaseUrl] = React.useState("");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    setBaseUrl(window.location.origin + window.location.pathname);
  }, []);

  const generate = () => {
    if (!message.trim() || !password.trim()) return;
    const params = {
      msg: btoa(encodeURIComponent(message)),
      pw: btoa(encodeURIComponent(password)),
      ...(hint ? { hint: btoa(encodeURIComponent(hint)) } : {}),
    };
    const qs = new URLSearchParams(params).toString();
    const unlockUrl = `${baseUrl}?${qs}`;
    setGenerated({ unlockUrl, params });
    setCopied(false);
  };

  const copyLink = () => {
    if (!generated) return;
    navigator.clipboard.writeText(generated.unlockUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadSVG = async (styleId) => {
    if (!generated) return;
    setDownloading(styleId);
    const style = LOCK_STYLES.find((s) => s.id === styleId);
    const qrDataUrl = QR_API(generated.unlockUrl);
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
        const shTop = H * 0.04;
        const keyholeY = bodyY + 32;
        const qrPad = 14, qrSize = W - qrPad * 2 - 28;
        const qrY = keyholeY + 24;
        const svgStr = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <path d="M${shX1},${bodyY+10} L${shX1},${shTop+shR} Q${shX1},${shTop} ${shX1+shR},${shTop} Q${shX2},${shTop} ${shX2},${shTop+shR} L${shX2},${bodyY+10}" fill="none" stroke="black" stroke-width="${shW*0.45}" stroke-linecap="round"/>
  <rect x="${qrPad*0.5}" y="${bodyY}" width="${W-qrPad}" height="${bodyH}" rx="20" ry="20" fill="black"/>
  <text x="${cx}" y="${keyholeY+8}" text-anchor="middle" font-size="24">${style.emoji}</text>
  <image href="${embedded}" x="${(W-qrSize)/2}" y="${qrY}" width="${qrSize}" height="${qrSize}"/>
</svg>`;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([svgStr], { type: "image/svg+xml" }));
        a.download = `qr-lock-${styleId}.svg`;
        a.click();
        setDownloading(null);
      };
      reader.readAsDataURL(blob);
    } catch { setDownloading(null); }
  };

  const filteredLocks = LOCK_STYLES.filter(
    (l) => l.label.toLowerCase().includes(search.toLowerCase()) || l.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <svg width="36" height="36" viewBox="0 0 36 36" style={{ marginRight: 10 }}>
            <rect x="5" y="17" width="26" height="18" rx="4" fill="#e8c547" />
            <path d="M11,17 L11,11 Q11,5 18,5 Q25,5 25,11 L25,17" fill="none" stroke="#e8c547" strokeWidth="4" strokeLinecap="round" />
            <circle cx="18" cy="26" r="3" fill="#1a1a1a" />
          </svg>
          <span style={styles.title}>QR-Lås Generator</span>
        </div>
        <p style={styles.sub}>Skapa ett lösenordsskyddat QR-lås med ett hemligt meddelande</p>

        <label style={styles.label}>Hemligt meddelande</label>
        <textarea style={styles.textarea} placeholder="Skriv meddelandet som visas när rätt lösenord anges..." value={message} onChange={(e) => setMessage(e.target.value)} rows={3} />

        <label style={styles.label}>Lösenord</label>
        <input style={styles.input} type="text" placeholder="T.ex. RÖKT" value={password} onChange={(e) => setPassword(e.target.value.toUpperCase())} />

        <label style={styles.label}>Ledtråd (valfri)</label>
        <input style={styles.input} type="text" placeholder="En liten hint om lösenordet..." value={hint} onChange={(e) => setHint(e.target.value)} />

        <button style={{ ...styles.btn, opacity: !message.trim() || !password.trim() ? 0.5 : 1 }} onClick={generate} disabled={!message.trim() || !password.trim()}>
          Generera lås
        </button>

        {generated && (
          <div style={styles.resultBox}>
            <p style={styles.resultTitle}>🔐 Ditt lås är klart! Välj stil nedan:</p>
            <input style={styles.searchBar} type="text" placeholder="🔍 Sök bland 100 stilar..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <div style={styles.locksGrid}>
              {filteredLocks.map((style) => (
                <div key={style.id} style={styles.lockItem}>
                  <LockSVG style={style} qrUrl={QR_API(generated.unlockUrl)} size={130} />
                  <div style={styles.lockLabel}>{style.label}</div>
                  <div style={styles.lockCategory}>{style.category}</div>
                  <button style={styles.dlBtn} onClick={() => downloadSVG(style.id)} disabled={downloading === style.id}>
                    {downloading === style.id ? "⏳" : "⬇ Hämta SVG"}
                  </button>
                </div>
              ))}
            </div>
            <div style={styles.linkRow}>
              <div style={styles.linkBox}>{generated.unlockUrl.slice(0, 50)}…</div>
              <button style={styles.copyBtn} onClick={copyLink}>{copied ? "✓ Kopierad!" : "Kopiera länk"}</button>
            </div>
            <button style={styles.previewBtn} onClick={() => onPreview(generated.params)}>
              Förhandsgranska upplåsningssidan →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function UnlockPage({ params, onBack }) {
  const [input, setInput] = React.useState("");
  const [status, setStatus] = React.useState(null);
  const [shaking, setShaking] = React.useState(false);
  const [unlocked, setUnlocked] = React.useState(false);

  const pw = params?.pw ? decodeURIComponent(atob(params.pw)) : "";
  const msg = params?.msg ? decodeURIComponent(atob(params.msg)) : "";
  const hint = params?.hint ? decodeURIComponent(atob(params.hint)) : "";
  const pwLen = pw.length;

  const handleInput = (e) => {
    const v = e.target.value.toUpperCase().replace(/[^A-ZÅÄÖ0-9]/g, "");
    if (v.length <= Math.max(pwLen, 20)) setInput(v);
  };

  const tryUnlock = () => {
    if (input === pw) {
      setUnlocked(true);
    } else {
      setStatus("error");
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      setTimeout(() => setStatus(null), 2000);
    }
  };

  const placeholder = Array(pwLen || 4).fill("A").join("-");

  return (
    <div style={styles.unlockBg}>
      {onBack && <button onClick={onBack} style={styles.backBtn}>← Tillbaka till Generatorn</button>}
      <div style={{ ...styles.lockCard, animation: shaking ? "shake 0.5s ease" : "none" }}>
        <div style={styles.lockIcon}>
          <svg width="120" height="130" viewBox="0 0 120 130">
            <path d="M35,60 L35,28 Q35,8 60,8 Q85,8 85,28 L85,60" fill="none" stroke={unlocked ? "#4ade80" : "black"} strokeWidth="16" strokeLinecap="round" style={{ transition: "stroke 0.5s" }} />
            <rect x="10" y="58" width="100" height="68" rx="12" fill={unlocked ? "#4ade80" : "black"} style={{ transition: "fill 0.5s" }} />
            {!unlocked ? <circle cx="60" cy="84" r="10" fill="white" /> : <text x="60" y="95" textAnchor="middle" fontSize="28" fill="black">✓</text>}
          </svg>
        </div>
        {unlocked ? (
          <div style={styles.messageBox}>
            <p style={styles.messageLabel}>🎉 Upplåst!</p>
            <p style={styles.messageText}>{msg}</p>
          </div>
        ) : (
          <>
            <input style={{ ...styles.codeInput, borderColor: status === "error" ? "#ef4444" : "#d1d5db" }} value={input} onChange={handleInput} placeholder={placeholder} autoFocus onKeyDown={(e) => e.key === "Enter" && tryUnlock()} />
            {hint && <p style={styles.hintText}>💡 Ledtråd: {hint}</p>}
            {status === "error" && <p style={styles.errorText}>❌ Fel lösenord, försök igen</p>}
            <button style={styles.unlockBtn} onClick={tryUnlock}>Lås upp</button>
          </>
        )}
      </div>
      <style>{`
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-10px)} 40%{transform:translateX(10px)} 60%{transform:translateX(-8px)} 80%{transform:translateX(8px)} }
      `}</style>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", padding: "20px" },
  card: { background: "#fff", borderRadius: 20, padding: "36px 32px", maxWidth: 680, width: "100%", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" },
  header: { display: "flex", alignItems: "center", marginBottom: 4 },
  title: { fontSize: 26, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.5px" },
  sub: { color: "#666", fontSize: 14, marginBottom: 24, marginTop: 2 },
  label: { display: "block", fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" },
  input: { width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid #e5e7eb", fontSize: 16, marginBottom: 16, outline: "none", fontFamily: "monospace", boxSizing: "border-box" },
  textarea: { width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid #e5e7eb", fontSize: 15, marginBottom: 16, outline: "none", resize: "vertical", boxSizing: "border-box" },
  btn: { width: "100%", padding: "14px", background: "#e8c547", color: "#1a1a1a", border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: "pointer" },
  resultBox: { marginTop: 28, borderTop: "2px solid #f3f4f6", paddingTop: 24 },
  resultTitle: { fontWeight: 700, fontSize: 16, marginBottom: 12, color: "#1a1a1a" },
  searchBar: { width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 14, marginBottom: 16, outline: "none", boxSizing: "border-box" },
  locksGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20, maxHeight: "420px", overflowY: "auto" },
  lockItem: { display: "flex", flexDirection: "column", alignItems: "center", background: "#f9fafb", borderRadius: 12, padding: "14px 8px 12px", border: "1px solid #e5e7eb" },
  lockLabel: { fontSize: 13, color: "#1a1a1a", marginTop: 8, fontWeight: 700 },
  lockCategory: { fontSize: 11, color: "#e8c547", background: "#1a1a1a", padding: "2px 8px", borderRadius: 20, marginTop: 4, marginBottom: 8, fontWeight: 600, textTransform: "uppercase" },
  dlBtn: { padding: "6px 14px", background: "#1a1a1a", color: "white", border: "none", borderRadius: 8, fontSize: 12, cursor: "pointer", fontWeight: 700, width: "80%" },
  linkRow: { display: "flex", gap: 8, alignItems: "center", marginBottom: 12 },
  linkBox: { flex: 1, background: "#f3f4f6", borderRadius: 8, padding: "8px 12px", fontSize: 11, color: "#666", fontFamily: "monospace", overflow: "hidden", whiteSpace: "nowrap" },
  copyBtn: { padding: "8px 14px", background: "#e8c547", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer" },
  previewBtn: { width: "100%", padding: "10px", background: "transparent", border: "2px solid #1a1a1a", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", color: "#1a1a1a" },
  unlockBg: { minHeight: "100vh", background: "#0d0d0d", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
  lockCard: { background: "white", borderRadius: 24, padding: "0 32px 36px", maxWidth: 380, width: "90%", textAlign: "center", boxShadow: "0 40px 100px rgba(0,0,0,0.8)", position: "relative", zIndex: 1 },
  lockIcon: { marginTop: -20, marginBottom: 8 },
  codeInput: { width: "80%", padding: "14px", border: "2px solid #d1d5db", borderRadius: 10, fontSize: 22, textAlign: "center", letterSpacing: "8px", fontFamily: "monospace", fontWeight: 700, outline: "none", marginBottom: 8, color: "#1a1a1a", boxSizing: "border-box" },
  hintText: { fontSize: 13, color: "#9ca3af", marginBottom: 8, fontStyle: "italic" },
  errorText: { color: "#ef4444", fontSize: 13, marginBottom: 8 },
  unlockBtn: { padding: "14px 48px", background: "#1a1a1a", color: "white", border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: "pointer", marginTop: 8 },
  messageBox: { padding: "16px 8px 8px" },
  messageLabel: { fontSize: 20, fontWeight: 700, marginBottom: 12, color: "#1a1a1a" },
  messageText: { fontSize: 16, color: "#374151", lineHeight: 1.7, whiteSpace: "pre-wrap" },
  backBtn: { position: "fixed", top: 16, left: 16, padding: "8px 16px", background: "#e8c547", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer", zIndex: 100, color: "#1a1a1a" }
};

function App() {
  const [urlParams, setUrlParams] = React.useState(null);
  const [previewParams, setPreviewParams] = React.useState(null);

  React.useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const params = {};
    for (const [k, v] of sp.entries()) params[k] = v;
    if (params.msg && params.pw) setUrlParams(params);
  }, []);

  if (urlParams) return <UnlockPage params={urlParams} />;
  if (previewParams) return <UnlockPage params={previewParams} onBack={() => setPreviewParams(null)} />;
  return <GeneratorPage onPreview={(p) => setPreviewParams(p)} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
