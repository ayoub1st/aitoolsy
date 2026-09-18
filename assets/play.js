(function () {
  "use strict";

  // ---------- Shared logo pool (Clearbit + initials only — no Google
  // favicon fallback, which was the source of wrong "101"/globe placeholder
  // images showing up instead of a real logo or a clean initial). ----------
  var LOGO_POOL = [
    { name: "AI Toolsy", url: null, local: "assets/media/logo-mark.png" },
    { name: "Claude", url: "https://claude.ai" },
    { name: "ChatGPT", url: "https://chatgpt.com" },
    { name: "Grok", url: "https://grok.com" },
    { name: "Perplexity", url: "https://www.perplexity.ai" },
    { name: "DeepSeek", url: "https://www.deepseek.com" },
    { name: "PhotoRoom", url: "https://www.photoroom.com" },
    { name: "QuillBot", url: "https://quillbot.com" },
    { name: "Notion AI", url: "https://www.notion.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Copy.ai", url: "https://www.copy.ai" },
    { name: "HeyGen", url: "https://www.heygen.com" },
    { name: "Suno", url: "https://suno.com" },
    { name: "Canva", url: "https://www.canva.com" },
    { name: "Midjourney", url: "https://www.midjourney.com" },
    { name: "Looka", url: "https://looka.com" },
    { name: "Replit", url: "https://replit.com" },
    { name: "Elicit", url: "https://elicit.com" },
    { name: "Leonardo", url: "https://leonardo.ai" },
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Ideogram", url: "https://ideogram.ai" },
    { name: "Figma", url: "https://www.figma.com" },
    { name: "Slack", url: "https://slack.com" },
    { name: "Zoom", url: "https://zoom.us" },
    { name: "Spotify", url: "https://www.spotify.com" },
    { name: "Gemini", url: "https://gemini.google.com" },
    { name: "Runway", url: "https://runwayml.com" },
    { name: "Framer", url: "https://www.framer.com" },
    { name: "Linear", url: "https://linear.app" },
    { name: "Vercel", url: "https://vercel.com" },
    { name: "Adobe", url: "https://www.adobe.com" }
  ];

  function faviconChain(link) {
    try {
      var host = new URL(link).hostname.replace(/^www\./, "");
      return [
        "https://logo.clearbit.com/" + host + "?size=128",
        "https://www.google.com/s2/favicons?sz=128&domain=" + host,
        "https://icons.duckduckgo.com/ip3/" + host + ".ico"
      ];
    } catch (e) { return []; }
  }

  function initialsSrc(name, bg) {
    return "data:image/svg+xml," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128">' +
      '<rect width="128" height="128" rx="24" fill="' + (bg || "#1857c4") + '"/>' +
      '<text x="64" y="80" text-anchor="middle" font-family="Arial" font-size="52" font-weight="800" fill="#fff">' +
      name.trim().charAt(0).toUpperCase() + "</text></svg>"
    );
  }

  function applyLogo(imgEl, entry) {
    if (entry.local) { imgEl.src = entry.local; imgEl.alt = entry.name; return; }
    var chain = faviconChain(entry.url);
    var step = 0;
    function tryNext() {
      if (step >= chain.length) { imgEl.src = initialsSrc(entry.name); return; }
      imgEl.src = chain[step];
      step += 1;
    }
    imgEl.onerror = tryNext;
    imgEl.onload = function () { if (imgEl.naturalWidth < 8) tryNext(); };
    imgEl.alt = entry.name;
    tryNext();
  }

  function loadImage(entry, cb) {
    var chain = entry.local ? [entry.local] : faviconChain(entry.url);
    var step = 0;
    var img = new Image();
    function tryNext() {
      if (step >= chain.length) {
        var fallback = new Image();
        fallback.onload = function () { cb(fallback.src); };
        fallback.src = initialsSrc(entry.name);
        return;
      }
      img.src = chain[step];
      step += 1;
    }
    img.onload = function () {
      if (img.naturalWidth < 8) { tryNext(); return; }
      cb(img.src);
    };
    img.onerror = tryNext;
    tryNext();
  }

  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }
  function pickRandom(arr, n) { return shuffleArray(arr.slice()).slice(0, n); }

  // ---------- Page wiring ----------
  var params = new URLSearchParams(location.search);
  var game = params.get("game") || "puzzle";
  var mount = document.getElementById("play-mount");
  var titleEl = document.getElementById("play-title");
  var restartBtn = document.getElementById("play-restart-btn");
  if (!mount) return;

  var TITLES = {
    puzzle: "Logo Puzzle", ttt: "Tic Tac Toe", memory: "Memory Match",
    connect4: "4 in a Row", dots: "Dots and Boxes"
  };
  if (titleEl) titleEl.textContent = TITLES[game] || "Game";
  document.title = (TITLES[game] || "Game") + " - AI Toolsy";

  var restartFn = null;
  function setRestart(fn) { restartFn = fn; }
  // Restart always does a full, clean re-init of the current game rather
  // than relying on each game's own partial reset — this guarantees the
  // button works even if a given game's custom reset logic misses some
  // piece of state (stuck timers, a leftover overlay, etc.).
  if (restartBtn) restartBtn.addEventListener("click", function () {
    mount.innerHTML = "";
    (INIT[game] || initPuzzle)();
  });

  // ---------- Shared result sounds (synthesized — no external audio files) ----------
  var AudioCtx = window.AudioContext || window.webkitAudioContext;
  var sharedAudioCtx = null;
  function getAudioCtx() {
    if (!AudioCtx) return null;
    if (!sharedAudioCtx) sharedAudioCtx = new AudioCtx();
    if (sharedAudioCtx.state === "suspended") sharedAudioCtx.resume();
    return sharedAudioCtx;
  }
  function tone(ctx, freq, start, dur, type, peak) {
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
    gain.gain.exponentialRampToValueAtTime(peak || 0.16, ctx.currentTime + start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + dur + 0.05);
  }
  function playResultSound(won) {
    var ctx = getAudioCtx();
    if (!ctx) return;
    if (won) {
      [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) {
        tone(ctx, f, i * 0.1, 0.28, "triangle", 0.15);
      });
    } else {
      [392, 349.23, 293.66].forEach(function (f, i) {
        tone(ctx, f, i * 0.14, 0.32, "sine", 0.12);
      });
    }
  }

  // ---------- Shared win/lose result overlay ----------
  // opts: { win, winnerLabel, loserLabel } — simple colored-text result,
  // used the same way whether it's vs. the computer or a friend.
  function showGameResult(container, opts) {
    if (!container) return;
    var old = container.querySelector(".game-result-overlay");
    if (old) old.remove();

    var overlay = document.createElement("div");
    overlay.className = "game-result-overlay";
    var card = document.createElement("div");
    card.className = "game-result-card";

    var line1 = document.createElement("p");
    line1.className = "game-result-line win";
    line1.textContent = opts.winnerLabel + " wins";
    var line2 = document.createElement("p");
    line2.className = "game-result-line lose";
    line2.textContent = opts.loserLabel + " loses";
    card.appendChild(line1);
    card.appendChild(line2);

    overlay.appendChild(card);
    overlay.addEventListener("click", function () { overlay.remove(); });
    container.appendChild(overlay);
    playResultSound(opts.win !== false);
    window.setTimeout(function () {
      if (overlay.parentNode) overlay.classList.add("fade-out");
    }, 2600);
    window.setTimeout(function () {
      if (overlay.parentNode) overlay.remove();
    }, 3100);
  }

  // ================= Logo Puzzle =================
  function initPuzzle() {
    mount.innerHTML =
      '<div class="puzzle-wrap">' +
      '<div class="game-mode-row" id="puzzle-size-row">' +
      '<button type="button" class="game-btn active" data-size="3">3 × 3</button>' +
      '<button type="button" class="game-btn" data-size="4">4 × 4</button>' +
      '<button type="button" class="game-btn" data-size="5">5 × 5</button>' +
      '</div>' +
      '<div class="puzzle-head">' +
      '<div class="puzzle-preview"><img id="puzzle-preview-img" alt=""></div>' +
      '<div class="puzzle-head-copy"><h3>Rebuild the logo</h3><p>Slide tiles into the empty space to match the picture on the left.</p></div>' +
      '<button type="button" class="puzzle-skip-btn" id="puzzle-skip-btn">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 4 15 12 5 20"></polyline><line x1="19" y1="5" x2="19" y2="19"></line></svg>' +
      '<span>Next logo</span>' +
      '</button>' +
      '</div>' +
      '<p class="game-status" id="puzzle-status"></p>' +
      '<div class="puzzle-board" id="puzzle-board"></div>' +
      '</div>';

    var sizeRow = document.getElementById("puzzle-size-row");
    var previewImg = document.getElementById("puzzle-preview-img");
    var board = document.getElementById("puzzle-board");
    var status = document.getElementById("puzzle-status");
    var skipBtn = document.getElementById("puzzle-skip-btn");
    var size = 3;
    var order, blank, solved, imgSrc;

    function neighborsOf(pos) {
      var row = Math.floor(pos / size), col = pos % size, out = [];
      if (row > 0) out.push(pos - size);
      if (row < size - 1) out.push(pos + size);
      if (col > 0) out.push(pos - 1);
      if (col < size - 1) out.push(pos + 1);
      return out;
    }

    function shuffle() {
      var total = size * size;
      order = [];
      for (var k = 0; k < total; k++) order.push(k);
      blank = total - 1;
      solved = false;
      for (var i = 0; i < 300; i++) {
        var opts = neighborsOf(blank);
        var swap = opts[Math.floor(Math.random() * opts.length)];
        order[blank] = order[swap];
        order[swap] = total - 1;
        blank = swap;
      }
      status.textContent = "";
      render();
    }

    function render() {
      var total = size * size;
      board.innerHTML = "";
      board.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
      var pct = 100 / (size - 1);
      order.forEach(function (tileId, pos) {
        var cell = document.createElement("button");
        cell.type = "button";
        cell.className = "puzzle-tile" + (tileId === total - 1 ? " blank" : "");
        if (tileId !== total - 1) {
          var row = Math.floor(tileId / size), col = tileId % size;
          cell.style.backgroundImage = "url(" + imgSrc + ")";
          cell.style.backgroundSize = (size * 100) + "% " + (size * 100) + "%";
          cell.style.backgroundPosition = (col * pct) + "% " + (row * pct) + "%";
        }
        cell.addEventListener("click", function () { move(pos); });
        board.appendChild(cell);
      });
    }

    function move(pos) {
      if (solved) return;
      if (neighborsOf(blank).indexOf(pos) === -1) return;
      order[blank] = order[pos];
      order[pos] = size * size - 1;
      blank = pos;
      render();
      var won = order.every(function (v, i) { return v === i; });
      if (won) { solved = true; status.textContent = "Solved! Nice work."; }
    }

    function newRound() {
      var logo = pickRandom(LOGO_POOL, 1)[0];
      status.textContent = "Loading…";
      board.innerHTML = "";
      loadImage(logo, function (src) {
        imgSrc = src;
        previewImg.src = src;
        shuffle();
      });
    }

    sizeRow.querySelectorAll("[data-size]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        size = parseInt(btn.getAttribute("data-size"), 10);
        sizeRow.querySelectorAll("[data-size]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        newRound();
      });
    });

    if (skipBtn) skipBtn.addEventListener("click", function () { newRound(); });

    newRound();
    setRestart(newRound);
  }

  // ================= Tic Tac Toe =================
  function initTicTacToe() {
    mount.innerHTML =
      '<div class="ttt-wrap">' +
      '<div class="game-mode-row" id="ttt-mode-row">' +
      '<button type="button" class="game-btn" id="ttt-friend">Play a friend</button>' +
      '<button type="button" class="game-btn primary" id="ttt-cpu">Play the computer</button>' +
      '</div>' +
      '<p class="game-status" id="ttt-status"></p>' +
      '<div class="ttt-board" id="ttt-board" hidden></div>' +
      '</div>';

    var modeRow = document.getElementById("ttt-mode-row");
    var status = document.getElementById("ttt-status");
    var board = document.getElementById("ttt-board");
    var cells = [], state, vsComputer, over, currentPlayer, timers = [];

    var LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function checkWinner(b) {
      for (var i = 0; i < LINES.length; i++) {
        var L = LINES[i];
        if (b[L[0]] && b[L[0]] === b[L[1]] && b[L[1]] === b[L[2]]) return b[L[0]];
      }
      return null;
    }
    function isFull(b) { return b.every(function (v) { return v; }); }

    function minimax(b, player) {
      var winner = checkWinner(b);
      if (winner === "O") return { score: 1 };
      if (winner === "X") return { score: -1 };
      if (isFull(b)) return { score: 0 };
      var moves = [];
      for (var i = 0; i < 9; i++) {
        if (!b[i]) {
          b[i] = player;
          var result = minimax(b, player === "O" ? "X" : "O");
          moves.push({ index: i, score: result.score });
          b[i] = null;
        }
      }
      if (player === "O") return moves.reduce(function (a, c) { return c.score > a.score ? c : a; });
      return moves.reduce(function (a, c) { return c.score < a.score ? c : a; });
    }

    // Tuned for a strong-but-beatable computer: plays the optimal move
    // most of the time, occasionally slips so a sharp human can still win.
    function computerMove() {
      var empties = [];
      for (var i = 0; i < 9; i++) if (!state[i]) empties.push(i);
      var roll = Math.random();
      if (roll < 0.78) {
        var best = minimax(state.slice(), "O");
        return best.index;
      }
      return empties[Math.floor(Math.random() * empties.length)];
    }

    function startGame(withComputer) {
      vsComputer = withComputer;
      state = new Array(9).fill(null);
      over = false;
      currentPlayer = "X";
      modeRow.hidden = true;
      board.hidden = false;
      status.textContent = vsComputer ? "Your turn (X)" : "Player 1's turn (X)";
      board.innerHTML = "";
      cells = [];
      for (var i = 0; i < 9; i++) {
        (function (idx) {
          var cell = document.createElement("button");
          cell.type = "button";
          cell.className = "ttt-cell";
          cell.addEventListener("click", function () { onCellClick(idx); });
          cells.push(cell);
          board.appendChild(cell);
        })(i);
      }
    }

    function render() {
      for (var i = 0; i < 9; i++) {
        cells[i].textContent = state[i] || "";
        cells[i].className = "ttt-cell" + (state[i] ? " filled " + state[i].toLowerCase() : "");
      }
    }

    function endCheck() {
      var winner = checkWinner(state);
      if (winner) {
        over = true;
        status.textContent = vsComputer
          ? (winner === "X" ? "You win! 🎉" : "The computer wins this one.")
          : "Player " + (winner === "X" ? "1" : "2") + " (" + winner + ") wins!";
        return true;
      }
      if (isFull(state)) { over = true; status.textContent = "It's a draw."; return true; }
      return false;
    }

    function onCellClick(idx) {
      if (over || state[idx]) return;
      state[idx] = currentPlayer;
      render();
      if (endCheck()) return;
      if (vsComputer) {
        currentPlayer = "O";
        status.textContent = "Computer is thinking…";
        timers.push(window.setTimeout(function () {
          state[computerMove()] = "O";
          render();
          if (!endCheck()) { currentPlayer = "X"; status.textContent = "Your turn (X)"; }
        }, 380));
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = "Player " + (currentPlayer === "X" ? "1" : "2") + "'s turn (" + currentPlayer + ")";
      }
    }

    function backToModes() {
      board.hidden = true;
      modeRow.hidden = false;
      status.textContent = "";
    }

    document.getElementById("ttt-friend").addEventListener("click", function () { startGame(false); });
    document.getElementById("ttt-cpu").addEventListener("click", function () { startGame(true); });

    setRestart(function () {
      timers.forEach(window.clearTimeout);
      timers = [];
      backToModes();
    });
  }

  // ================= Memory Match =================
  function initMemory() {
    mount.innerHTML =
      '<div class="memory-wrap">' +
      '<div class="memory-setup" id="memory-setup">' +
      '<div class="memory-setup-group"><span>Board size</span>' +
      '<div class="game-mode-row"><button type="button" class="game-btn" data-size="16">16 cards</button>' +
      '<button type="button" class="game-btn" data-size="32">32 cards</button></div></div>' +
      '<div class="memory-setup-group"><span>Opponent</span>' +
      '<div class="game-mode-row"><button type="button" class="game-btn" data-mode="friend">A friend</button>' +
      '<button type="button" class="game-btn" data-mode="computer">The computer</button></div></div>' +
      '</div>' +
      '<button type="button" class="game-btn primary" id="memory-start" disabled>Start game</button>' +
      '<div class="memory-scores" id="memory-scores" hidden></div>' +
      '<p class="game-status" id="memory-status"></p>' +
      '<div class="memory-board" id="memory-board" hidden></div>' +
      '</div>';

    var setupRow = document.getElementById("memory-setup");
    var startBtn = document.getElementById("memory-start");
    var scoreRow = document.getElementById("memory-scores");
    var status = document.getElementById("memory-status");
    var board = document.getElementById("memory-board");

    var chosenSize = null, chosenMode = null, timers = [];
    var cardEls = [], cardData = [], flipped = [], busy = false, scores = [0, 0], turn = 0, memoryMap = {};

    setupRow.querySelectorAll("[data-size]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        chosenSize = parseInt(btn.getAttribute("data-size"), 10);
        setupRow.querySelectorAll("[data-size]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        startBtn.disabled = !(chosenSize && chosenMode);
      });
    });
    setupRow.querySelectorAll("[data-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        chosenMode = btn.getAttribute("data-mode");
        setupRow.querySelectorAll("[data-mode]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        startBtn.disabled = !(chosenSize && chosenMode);
      });
    });

    function logoKey(entry) { return entry.local || entry.url; }

    function renderScores() {
      var youLabel = "You: " + scores[0];
      var themLabel = (chosenMode === "computer" ? "Computer: " : "Friend: ") + scores[1];
      scoreRow.innerHTML =
        '<span class="' + (turn === 0 ? "active" : "") + '">' + youLabel + "</span>" +
        '<span class="' + (turn === 1 ? "active" : "") + '">' + themLabel + "</span>";
    }

    function unmatchedIndices() {
      var out = [];
      for (var i = 0; i < cardData.length; i++) if (!cardData[i].matched) out.push(i);
      return out;
    }

    function setCardFace(idx, faceUp) { cardEls[idx].classList.toggle("flipped", faceUp); }

    function revealCard(idx) {
      if (cardData[idx].matched || flipped.indexOf(idx) !== -1) return;
      setCardFace(idx, true);
      memoryMap[idx] = logoKey(cardData[idx].logo);
      flipped.push(idx);
      if (flipped.length === 2) { busy = true; resolveTurn(); }
    }

    function resolveTurn() {
      var a = flipped[0], b = flipped[1];
      var match = logoKey(cardData[a].logo) === logoKey(cardData[b].logo);
      timers.push(window.setTimeout(function () {
        if (match) {
          cardData[a].matched = true;
          cardData[b].matched = true;
          cardEls[a].classList.add("matched");
          cardEls[b].classList.add("matched");
          scores[turn] += 1;
          flipped = [];
          busy = false;
          renderScores();
          if (cardData.every(function (c) { return c.matched; })) { finishGame(); return; }
          status.textContent = (turn === 0 ? "You" : (chosenMode === "computer" ? "Computer" : "Friend")) + " found a match, go again.";
          if (turn === 1 && chosenMode === "computer") timers.push(window.setTimeout(computerTurn, 500));
        } else {
          setCardFace(a, false);
          setCardFace(b, false);
          flipped = [];
          turn = turn === 0 ? 1 : 0;
          busy = false;
          renderScores();
          status.textContent = turn === 0 ? "Your turn." : (chosenMode === "computer" ? "Computer's turn…" : "Friend's turn.");
          if (turn === 1 && chosenMode === "computer") timers.push(window.setTimeout(computerTurn, 600));
        }
      }, match ? 550 : 900));
    }

    function computerTurn() {
      if (turn !== 1) return;
      busy = false;
      var seen = {}, pairIndices = null;
      unmatchedIndices().forEach(function (idx) {
        var key = memoryMap[idx];
        if (!key) return;
        if (seen[key] !== undefined && !pairIndices) pairIndices = [seen[key], idx];
        else seen[key] = idx;
      });
      if (pairIndices) {
        revealCard(pairIndices[0]);
        timers.push(window.setTimeout(function () { revealCard(pairIndices[1]); }, 450));
        return;
      }
      var candidates = unmatchedIndices();
      var first = candidates[Math.floor(Math.random() * candidates.length)];
      revealCard(first);
      timers.push(window.setTimeout(function () {
        var firstKey = memoryMap[first], secondGuess = null;
        unmatchedIndices().forEach(function (idx) {
          if (idx === first) return;
          if (memoryMap[idx] === firstKey && secondGuess === null) secondGuess = idx;
        });
        if (secondGuess === null) {
          var remaining = unmatchedIndices().filter(function (idx) { return idx !== first; });
          secondGuess = remaining[Math.floor(Math.random() * remaining.length)];
        }
        revealCard(secondGuess);
      }, 500));
    }

    function finishGame() {
      board.querySelectorAll(".memory-card").forEach(function (c) { c.disabled = true; });
      if (scores[0] === scores[1]) status.textContent = "It's a tie, " + scores[0] + " pairs each.";
      else if (scores[0] > scores[1]) status.textContent = "You win, " + scores[0] + " to " + scores[1] + "!";
      else status.textContent = (chosenMode === "computer" ? "Computer wins" : "Friend wins") + ", " + scores[1] + " to " + scores[0] + ".";
    }

    function flipCard(idx) {
      if (busy || turn !== 0) return;
      revealCard(idx);
    }

    function startGame() {
      var pairs = chosenSize / 2;
      var chosen = pickRandom(LOGO_POOL, pairs);
      cardData = shuffleArray(chosen.concat(chosen)).map(function (logo) { return { logo: logo, matched: false }; });
      flipped = []; busy = false; scores = [0, 0]; turn = 0; memoryMap = {};

      setupRow.hidden = true;
      startBtn.hidden = true;
      scoreRow.hidden = false;
      board.hidden = false;
      board.className = "memory-board size-" + chosenSize;
      renderScores();
      status.textContent = "Your turn, find a match.";

      board.innerHTML = "";
      cardEls = cardData.map(function (card, idx) {
        var cell = document.createElement("button");
        cell.type = "button";
        cell.className = "memory-card";
        var inner = document.createElement("span");
        inner.className = "memory-card-inner";
        var back = document.createElement("span");
        back.className = "memory-card-back";
        back.innerHTML =
          '<span class="memory-card-circuit" aria-hidden="true">' +
          '<span class="circuit-line line-a"></span>' +
          '<span class="circuit-line line-b"></span>' +
          '<span class="circuit-dot dot-a"></span>' +
          '<span class="circuit-dot dot-b"></span>' +
          '<span class="circuit-dot dot-c"></span>' +
          "</span>" +
          '<svg class="memory-card-back-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<rect x="8" y="8" width="8" height="8" rx="1.4" fill="currentColor"/>' +
          '<path d="M8 4.5v2.2M12 4.5v2.2M16 4.5v2.2M8 17.3v2.2M12 17.3v2.2M16 17.3v2.2M4.5 8h2.2M4.5 12h2.2M4.5 16h2.2M17.3 8h2.2M17.3 12h2.2M17.3 16h2.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
          "</svg>";
        var front = document.createElement("span");
        front.className = "memory-card-front";
        var img = document.createElement("img");
        applyLogo(img, card.logo);
        front.appendChild(img);
        inner.appendChild(back);
        inner.appendChild(front);
        cell.appendChild(inner);
        cell.addEventListener("click", function () { flipCard(idx); });
        board.appendChild(cell);
        return cell;
      });
    }

    startBtn.addEventListener("click", startGame);

    function resetToSetup() {
      timers.forEach(window.clearTimeout);
      timers = [];
      board.hidden = true;
      scoreRow.hidden = true;
      setupRow.hidden = false;
      startBtn.hidden = false;
      startBtn.disabled = true;
      chosenSize = null;
      chosenMode = null;
      setupRow.querySelectorAll(".active").forEach(function (b) { b.classList.remove("active"); });
      status.textContent = "";
    }

    setRestart(resetToSetup);
  }

  // ================= 4 in a Row (Connect Four) =================
  function initConnect4() {
    var COLS = 7, ROWS = 6;
    mount.innerHTML =
      '<div class="c4-wrap">' +
      '<div class="game-mode-row" id="c4-mode-row">' +
      '<button type="button" class="game-btn" id="c4-friend">Play a friend</button>' +
      '<button type="button" class="game-btn primary" id="c4-cpu">Play the computer</button>' +
      '</div>' +
      '<p class="game-status" id="c4-status"></p>' +
      '<div class="c4-board" id="c4-board" hidden></div>' +
      '</div>';

    var modeRow = document.getElementById("c4-mode-row");
    var status = document.getElementById("c4-status");
    var boardEl = document.getElementById("c4-board");
    var grid, cells, over, vsComputer, currentPlayer, timers = [];

    function emptyGrid() {
      var g = [];
      for (var r = 0; r < ROWS; r++) { g.push(new Array(COLS).fill(null)); }
      return g;
    }

    function lowestEmptyRow(col) {
      for (var r = ROWS - 1; r >= 0; r--) if (!grid[r][col]) return r;
      return -1;
    }

    function checkWinFrom(r, c, player) {
      var dirs = [[0,1],[1,0],[1,1],[1,-1]];
      for (var d = 0; d < dirs.length; d++) {
        var dr = dirs[d][0], dc = dirs[d][1], count = 1;
        var rr = r + dr, cc = c + dc;
        while (rr >= 0 && rr < ROWS && cc >= 0 && cc < COLS && grid[rr][cc] === player) { count++; rr += dr; cc += dc; }
        rr = r - dr; cc = c - dc;
        while (rr >= 0 && rr < ROWS && cc >= 0 && cc < COLS && grid[rr][cc] === player) { count++; rr -= dr; cc -= dc; }
        if (count >= 4) return true;
      }
      return false;
    }

    function isFullBoard() { return grid[0].every(function (v) { return v; }); }

    function render() {
      for (var r = 0; r < ROWS; r++) {
        for (var c = 0; c < COLS; c++) {
          var cell = cells[r][c];
          cell.className = "c4-cell" + (grid[r][c] ? " filled " + grid[r][c].toLowerCase() : "");
        }
      }
    }

    function dropDisc(col, player) {
      var row = lowestEmptyRow(col);
      if (row === -1) return null;
      grid[row][col] = player;
      return row;
    }

    // Heuristic AI tuned to win most games while staying beatable: always
    // takes a winning move, almost always blocks, and otherwise leans
    // heavily toward strong center columns.
    function computerChooseColumn() {
      var candidates = [];
      for (var c = 0; c < COLS; c++) if (lowestEmptyRow(c) !== -1) candidates.push(c);

      function tryFind(player) {
        for (var i = 0; i < candidates.length; i++) {
          var c = candidates[i];
          var row = lowestEmptyRow(c);
          grid[row][c] = player;
          var win = checkWinFrom(row, c, player);
          grid[row][c] = null;
          if (win) return c;
        }
        return null;
      }

      var winMove = tryFind("O");
      if (winMove !== null) return winMove;
      var blockMove = tryFind("X");
      if (blockMove !== null && Math.random() < 0.88) return blockMove;

      var weighted = candidates.slice().sort(function (a, b) {
        return Math.abs(a - 3) - Math.abs(b - 3);
      });
      if (Math.random() < 0.75) return weighted[0];
      return candidates[Math.floor(Math.random() * candidates.length)];
    }

    function endCheck(row, col, player) {
      if (checkWinFrom(row, col, player)) {
        over = true;
        var winnerLabel, loserLabel;
        if (vsComputer) {
          winnerLabel = player === "X" ? "You" : "The computer";
          loserLabel = player === "X" ? "The computer" : "You";
          status.textContent = player === "X" ? "You win! 🎉" : "The computer wins this one.";
        } else {
          winnerLabel = "Player " + (player === "X" ? "1" : "2");
          loserLabel = "Player " + (player === "X" ? "2" : "1");
          status.textContent = winnerLabel + " wins!";
        }
        showGameResult(mount, { win: !vsComputer || player === "X", winnerLabel: winnerLabel, loserLabel: loserLabel });
        return true;
      }
      if (isFullBoard()) { over = true; status.textContent = "It's a draw."; return true; }
      return false;
    }

    function onColumnClick(col) {
      if (over) return;
      if (vsComputer && currentPlayer !== "X") return;
      var row = dropDisc(col, currentPlayer);
      if (row === null) return;
      render();
      if (endCheck(row, col, currentPlayer)) return;
      if (vsComputer) {
        currentPlayer = "O";
        status.textContent = "Computer is thinking…";
        timers.push(window.setTimeout(function () {
          var c = computerChooseColumn();
          var r = dropDisc(c, "O");
          render();
          if (!endCheck(r, c, "O")) { currentPlayer = "X"; status.textContent = "Your turn (red)"; }
        }, 420));
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = "Player " + (currentPlayer === "X" ? "1 (red)" : "2 (yellow)") + "'s turn";
      }
    }

    function startGame(withComputer) {
      vsComputer = withComputer;
      grid = emptyGrid();
      over = false;
      currentPlayer = "X";
      var leftoverOverlay = mount.querySelector(".game-result-overlay");
      if (leftoverOverlay) leftoverOverlay.remove();
      modeRow.hidden = true;
      boardEl.hidden = false;
      status.textContent = vsComputer ? "Your turn (red)" : "Player 1 (red)'s turn";
      boardEl.innerHTML = "";
      boardEl.style.gridTemplateColumns = "repeat(" + COLS + ", 1fr)";
      cells = [];
      for (var r = 0; r < ROWS; r++) {
        var rowArr = [];
        for (var c = 0; c < COLS; c++) {
          var cell = document.createElement("button");
          cell.type = "button";
          cell.className = "c4-cell";
          (function (col) { cell.addEventListener("click", function () { onColumnClick(col); }); })(c);
          boardEl.appendChild(cell);
          rowArr.push(cell);
        }
        cells.push(rowArr);
      }
    }

    document.getElementById("c4-friend").addEventListener("click", function () { startGame(false); });
    document.getElementById("c4-cpu").addEventListener("click", function () { startGame(true); });

    setRestart(function () {
      timers.forEach(window.clearTimeout);
      timers = [];
      var existingOverlay = mount.querySelector(".game-result-overlay");
      if (existingOverlay) existingOverlay.remove();
      boardEl.hidden = true;
      modeRow.hidden = false;
      status.textContent = "";
    });
  }

  // ================= Dots and Boxes =================
  function initDots() {
    var DOTS = 5; // 5x5 dots -> 4x4 boxes
    var BOX = DOTS - 1;
    mount.innerHTML =
      '<div class="dots-wrap">' +
      '<div class="game-mode-row" id="dots-mode-row">' +
      '<button type="button" class="game-btn" id="dots-friend">Play a friend</button>' +
      '<button type="button" class="game-btn primary" id="dots-cpu">Play the computer</button>' +
      '</div>' +
      '<div class="memory-scores" id="dots-scores" hidden></div>' +
      '<p class="game-status" id="dots-status"></p>' +
      '<div class="dots-board" id="dots-board" hidden></div>' +
      '</div>';

    var modeRow = document.getElementById("dots-mode-row");
    var status = document.getElementById("dots-status");
    var scoreRow = document.getElementById("dots-scores");
    var boardEl = document.getElementById("dots-board");
    var timers = [];

    var hLines, vLines, hLineOwner, vLineOwner, boxOwner, scores, turn, vsComputer, over;

    function emptyBoolGrid(rows, cols) {
      var g = [];
      for (var r = 0; r < rows; r++) g.push(new Array(cols).fill(false));
      return g;
    }

    function boxSides(r, c) {
      return { top: ["h", r, c], bottom: ["h", r + 1, c], left: ["v", r, c], right: ["v", r, c + 1] };
    }

    function isLineDrawn(type, r, c) { return type === "h" ? hLines[r][c] : vLines[r][c]; }

    function boxComplete(r, c) {
      var s = boxSides(r, c);
      return isLineDrawn(s.top[0], s.top[1], s.top[2]) &&
             isLineDrawn(s.bottom[0], s.bottom[1], s.bottom[2]) &&
             isLineDrawn(s.left[0], s.left[1], s.left[2]) &&
             isLineDrawn(s.right[0], s.right[1], s.right[2]);
    }

    function boxSideCount(r, c) {
      var s = boxSides(r, c);
      var n = 0;
      if (isLineDrawn(s.top[0], s.top[1], s.top[2])) n++;
      if (isLineDrawn(s.bottom[0], s.bottom[1], s.bottom[2])) n++;
      if (isLineDrawn(s.left[0], s.left[1], s.left[2])) n++;
      if (isLineDrawn(s.right[0], s.right[1], s.right[2])) n++;
      return n;
    }

    function boxesTouchingLine(type, r, c) {
      var out = [];
      if (type === "h") {
        if (r - 1 >= 0 && r - 1 < BOX) out.push([r - 1, c]);
        if (r >= 0 && r < BOX) out.push([r, c]);
      } else {
        if (c - 1 >= 0 && c - 1 < BOX) out.push([r, c - 1]);
        if (c >= 0 && c < BOX) out.push([r, c]);
      }
      return out;
    }

    function allLines() {
      var out = [];
      for (var r = 0; r < DOTS; r++) for (var c = 0; c < BOX; c++) if (!hLines[r][c]) out.push(["h", r, c]);
      for (var r2 = 0; r2 < BOX; r2++) for (var c2 = 0; c2 < DOTS; c2++) if (!vLines[r2][c2]) out.push(["v", r2, c2]);
      return out;
    }

    function totalBoxes() { return BOX * BOX; }
    function claimedBoxes() {
      var n = 0;
      for (var r = 0; r < BOX; r++) for (var c = 0; c < BOX; c++) if (boxOwner[r][c]) n++;
      return n;
    }

    function drawLine(type, r, c, player) {
      if (type === "h") { hLines[r][c] = true; hLineOwner[r][c] = player; }
      else { vLines[r][c] = true; vLineOwner[r][c] = player; }
      var completedAny = false;
      boxesTouchingLine(type, r, c).forEach(function (b) {
        if (!boxOwner[b[0]][b[1]] && boxComplete(b[0], b[1])) {
          boxOwner[b[0]][b[1]] = player;
          scores[player === "X" ? 0 : 1] += 1;
          completedAny = true;
        }
      });
      return completedAny;
    }

    function renderScores() {
      var youLabel = "You: " + scores[0];
      var themLabel = (vsComputer ? "Computer: " : "Friend: ") + scores[1];
      scoreRow.innerHTML =
        '<span class="' + (turn === "X" ? "active" : "") + '"><i class="dots-legend-dot player-x"></i>' + youLabel + "</span>" +
        '<span class="' + (turn === "O" ? "active" : "") + '"><i class="dots-legend-dot player-o"></i>' + themLabel + "</span>";
    }

    function render() {
      boardEl.querySelectorAll(".dots-line").forEach(function (el) {
        var type = el.dataset.type, r = +el.dataset.r, c = +el.dataset.c;
        var drawn = isLineDrawn(type, r, c);
        var owner = drawn ? (type === "h" ? hLineOwner[r][c] : vLineOwner[r][c]) : null;
        el.classList.toggle("drawn", drawn);
        el.classList.toggle("player-x", owner === "X");
        el.classList.toggle("player-o", owner === "O");
      });
      boardEl.querySelectorAll(".dots-box").forEach(function (el) {
        var r = +el.dataset.r, c = +el.dataset.c;
        var owner = boxOwner[r][c];
        el.className = "dots-box" + (owner ? " owned " + (owner === "X" ? "mine" : "theirs") : "");
      });
    }

    function checkGameOver() {
      if (claimedBoxes() === totalBoxes()) {
        over = true;
        if (scores[0] === scores[1]) status.textContent = "It's a tie, " + scores[0] + " boxes each.";
        else if (scores[0] > scores[1]) status.textContent = "You win, " + scores[0] + " to " + scores[1] + "!";
        else status.textContent = (vsComputer ? "Computer wins" : "Friend wins") + ", " + scores[1] + " to " + scores[0] + ".";
        return true;
      }
      return false;
    }

    function afterMove(completed, player) {
      render();
      renderScores();
      if (checkGameOver()) return;
      if (completed) {
        status.textContent = (player === "X" ? (vsComputer ? "You" : "Player 1") : (vsComputer ? "Computer" : "Player 2")) + " completed a box, go again.";
        if (turn === "O" && vsComputer) timers.push(window.setTimeout(computerTurn, 500));
        return;
      }
      turn = turn === "X" ? "O" : "X";
      status.textContent = turn === "X" ? (vsComputer ? "Your turn." : "Player 1's turn.") : (vsComputer ? "Computer's turn…" : "Player 2's turn.");
      if (turn === "O" && vsComputer) timers.push(window.setTimeout(computerTurn, 500));
    }

    function humanDraw(type, r, c) {
      if (over || turn !== "X" || isLineDrawn(type, r, c)) return;
      var completed = drawLine(type, r, c, "X");
      afterMove(completed, "X");
    }

    // Solid heuristic AI: always completes a free box (and chains through
    // them), otherwise plays a line that never hands the opponent a free
    // box, and only sacrifices as a last resort, picking the sacrifice
    // that gives away the fewest boxes.
    function computerTurn() {
      if (over || turn !== "O") return;
      var lines = allLines();

      var completing = lines.filter(function (l) {
        return boxesTouchingLine(l[0], l[1], l[2]).some(function (b) {
          return !boxOwner[b[0]][b[1]] && boxSideCount(b[0], b[1]) === 3;
        });
      });
      var choice;
      if (completing.length) {
        choice = completing[Math.floor(Math.random() * completing.length)];
      } else {
        var safe = lines.filter(function (l) {
          return boxesTouchingLine(l[0], l[1], l[2]).every(function (b) {
            return boxOwner[b[0]][b[1]] || boxSideCount(b[0], b[1]) < 2;
          });
        });
        if (safe.length) {
          choice = safe[Math.floor(Math.random() * safe.length)];
        } else {
          // Every move opens a box somewhere — pick the one that opens
          // the fewest, to minimize what the opponent can grab next turn.
          var scored = lines.map(function (l) {
            var opened = boxesTouchingLine(l[0], l[1], l[2]).filter(function (b) {
              return !boxOwner[b[0]][b[1]] && boxSideCount(b[0], b[1]) === 2;
            }).length;
            return { line: l, opened: opened };
          });
          var minOpened = Math.min.apply(null, scored.map(function (s) { return s.opened; }));
          var best = scored.filter(function (s) { return s.opened === minOpened; });
          choice = best[Math.floor(Math.random() * best.length)].line;
        }
      }
      var completed = drawLine(choice[0], choice[1], choice[2], "O");
      afterMove(completed, "O");
    }

    function buildBoard() {
      boardEl.innerHTML = "";
      var size = DOTS;
      boardEl.style.setProperty("--dots-size", size);
      for (var r = 0; r < size; r++) {
        for (var c = 0; c < size; c++) {
          var dot = document.createElement("span");
          dot.className = "dots-dot";
          dot.style.gridRow = (r * 2 + 1);
          dot.style.gridColumn = (c * 2 + 1);
          boardEl.appendChild(dot);

          if (c < size - 1) {
            var hLine = document.createElement("button");
            hLine.type = "button";
            hLine.className = "dots-line h";
            hLine.dataset.type = "h"; hLine.dataset.r = r; hLine.dataset.c = c;
            hLine.style.gridRow = (r * 2 + 1);
            hLine.style.gridColumn = (c * 2 + 2);
            hLine.addEventListener("click", function () { humanDraw(this.dataset.type, +this.dataset.r, +this.dataset.c); });
            boardEl.appendChild(hLine);
          }
          if (r < size - 1) {
            var vLine = document.createElement("button");
            vLine.type = "button";
            vLine.className = "dots-line v";
            vLine.dataset.type = "v"; vLine.dataset.r = r; vLine.dataset.c = c;
            vLine.style.gridRow = (r * 2 + 2);
            vLine.style.gridColumn = (c * 2 + 1);
            vLine.addEventListener("click", function () { humanDraw(this.dataset.type, +this.dataset.r, +this.dataset.c); });
            boardEl.appendChild(vLine);
          }
          if (r < size - 1 && c < size - 1) {
            var box = document.createElement("span");
            box.className = "dots-box";
            box.dataset.r = r; box.dataset.c = c;
            box.style.gridRow = (r * 2 + 2);
            box.style.gridColumn = (c * 2 + 2);
            boardEl.appendChild(box);
          }
        }
      }
    }

    function startGame(withComputer) {
      vsComputer = withComputer;
      hLines = emptyBoolGrid(DOTS, BOX);
      vLines = emptyBoolGrid(BOX, DOTS);
      hLineOwner = []; for (var hr = 0; hr < DOTS; hr++) hLineOwner.push(new Array(BOX).fill(null));
      vLineOwner = []; for (var vr = 0; vr < BOX; vr++) vLineOwner.push(new Array(DOTS).fill(null));
      boxOwner = emptyBoolGrid(BOX, BOX);
      scores = [0, 0];
      turn = "X";
      over = false;
      modeRow.hidden = true;
      boardEl.hidden = false;
      scoreRow.hidden = false;
      buildBoard();
      render();
      renderScores();
      status.textContent = vsComputer ? "Your turn — tap a line." : "Player 1's turn — tap a line.";
    }

    document.getElementById("dots-friend").addEventListener("click", function () { startGame(false); });
    document.getElementById("dots-cpu").addEventListener("click", function () { startGame(true); });

    setRestart(function () {
      timers.forEach(window.clearTimeout);
      timers = [];
      boardEl.hidden = true;
      scoreRow.hidden = true;
      modeRow.hidden = false;
      status.textContent = "";
    });
  }

  // ---------- Router ----------
  var INIT = { puzzle: initPuzzle, ttt: initTicTacToe, memory: initMemory, connect4: initConnect4, dots: initDots };
  (INIT[game] || initPuzzle)();
})();
