(function() {
  const canvas = document.getElementById('rainCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let drops = [];
    for (let i = 0; i < 140; i++) {
      drops.push({
        x: Math.random() * w,
        y: Math.random() * h,
        len: Math.random() * 14 + 8,
        speed: Math.random() * 5 + 4,
      });
    }
    function drawRain() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(160, 210, 255, 0.5)';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#3b82f6';
      for (let d of drops) {
        ctx.fillRect(d.x, d.y, 1.6, d.len);
        d.y += d.speed;
        if (d.y > h) {
          d.y = -20;
          d.x = Math.random() * w;
        }
      }
      requestAnimationFrame(drawRain);
    }
    drawRain();
    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) * -0.005;
    const y = (e.clientY - window.innerHeight / 2) * 0.01;
    document.documentElement.style.setProperty('--move-x', x + 'deg');
    document.documentElement.style.setProperty('--move-y', y + 'deg');
  });

  const gameList = [
    { name: "Crash Out", img: "img/crashOut.jpg", dev: "K", link: "https://drive.google.com/file/d/1ujCn5p33NMtr4K9h8cHkC_lWPbi_Qf_-/view?usp=drive_link" },
    { name: "Boat Defense", img: "img/BoatDefense.jpg", dev: "K", link: "https://kopynus.itch.io/boat-defense" },
    { name: "61 Level", img: "img/Logo61.png", dev: "K", link: "https://drive.google.com/file/d/19KyhHSD0FIx5zkhbstEwCQwlMhZHHSzM/view?usp=drive_link" },
    { name: "Just Fun", img: "img/Just Fun.jpg", dev: "K", link: "https://kopynus.itch.io/just-fun" },
    { name: "Earth Roots", img: "img/EarthRoots.jpeg", dev: "B", link: "https://drive.google.com/file/d/1i58M1MOET-lMHa5BHomx8LbgkG-fYkiO/view?usp=drive_link" },
    { name: "Ha-Ha Show", img: "img/HaHa.jpg", dev: "B", link: "https://kopynus.itch.io/ha-ha-show" },
    { name: "Clever Soccer", img: "img/Soccer.jpeg", dev: "K", link: "https://drive.google.com/file/d/1aecLaj1OKgrXlG3eaL7YTceyrZsCA8kK/view?usp=drive_link" },
    { name: "Late", img: "img/Late.jpg", dev: "K", link: "https://drive.google.com/file/d/1jh8vvZd8sYRopIUq29aOQnkMUOt8bCVM/view?usp=drive_link"},
    { name: "Running Guys", img: "img/RunningGuys.jpg", dev: "K", link: "https://drive.google.com/file/d/18A89XV-YOmVZ0Bn_dSBgBoWiV1L_ImqW/view?usp=drive_link" },
    { name: "Spidey Dinner", img: "img/SpideyDinner.jpg", dev: "K", link: "https://drive.google.com/file/d/1Uoigtk0baUH2VMrfe8RPyYxeOernE1SV/view?usp=drive_link" },
    { name: "City Run", img: "img/CityRun.png", dev: "K", link: "https://drive.google.com/file/d/12l3CTOBGyrtE_jFKHBkO1TLJToAVQ3YA/view?usp=drive_link" },
    { name: "Blender Game", img: "img/BlenderGame.png", dev: "K", link: "https://drive.google.com/file/d/1HmM5fxM7mgWExvRB4sjuUi9WVA_B9P8i/view?usp=drive_link" },
    { name: "Don't stop Froggy!", img: "img/dsf.png", dev: "I", link: "https://isudzaki.itch.io/dont-stop-froggy" },
    { name: "Matrix Bird", img: "img/matrixbird.png", dev: "K", link: "https://drive.google.com/file/d/1yfKQ4BKFIh4XF5OipK7ts8vsnwYiwZWQ/view?usp=drive_link" },
    { name: "Shadow Life", img: "img/ShadowLife.png", dev: "I", link: "https://isudzaki.itch.io/shadow-life" },
    { name: "Planet Of Nature", img: "img/PlanetOfNature.png", dev: "I", link: "https://isudzaki.itch.io/planet-of-nature" },
    { name: "IsuShoot", img: "img/ps1cat.webp", dev: "I", link: "https://github.com/Isudzaki/IsuShoot-MultiplayerGame" },
    { name: "Alien Attack", img: "img/alienattack.png", dev: "K", link: "https://gamejolt.com/games/alienatt/402138" },
    { name: "Epic Fights", img: "img/epicfights.webp", dev: "K", link: "https://gamejolt.com/games/epicfights/423269" },
    { name: "Snowman.exe", img: "img/snowman.jpg", dev: "K", link: "https://gamejolt.com/games/snowmanexe1/409218" },
    { name: "Hard Platformer", img: "img/hardplatformer.png", dev: "K", link: "https://gamejolt.com/games/platformerhard/385107" },
    { name: "Car Drive", img: "img/cardrive.webp", dev: "K", link: "https://gamejolt.com/games/cardrive/403660" },
    { name: "Bottle Cap", img: "img/bottlecap.webp", dev: "K", link: "https://skich.app/games/bottle-cap" },
    { name: "Dragon Story", img: "img/dragonstory.jpg", dev: "K", link: "https://kopynus.itch.io/dragonstory" },
    { name: "Zombie World", img: "img/zombieworld.png", dev: "I", link: "https://www.youtube.com/watch?v=6q3ZTGsCJ3I&t=253s" },
    { name: "Hyper Casual Prototype", img: "img/hypercasualprototype.webp", dev: "I", link: "https://www.youtube.com/watch?v=iBsFnv6g2WU&t=10s" },
    { name: "Minecraft Parody", img: "img/MineCraftParody.png", dev: "K", link: "https://drive.google.com/file/d/17wVV6I4b1LP1Twwkg2VZTtwFRejFeFb_/view?usp=drive_link" },
    { name: "Match Flowers", img: "img/Match Flowers.png", dev: "K", link: "https://drive.google.com/file/d/1ualhqO59JvzRi0OEeqfYxkb1iIFCqyA3/view?usp=drive_link" },
    { name: "Space Builder", img: "img/spacebuilder.png", dev: "K", link: "https://drive.google.com/file/d/1KU8ZusoF3RlrBhDQ1aqUEqry0Y76ATH_/view?usp=drive_link" },
    { name: "Penguin Game", img: "img/penguingame.png", dev: "K", link: "https://drive.google.com/file/d/1saGgbeq1BRPOgYOS_r7GrE9HqATZfCIQ/view?usp=drive_link" },
    { name: "Pixel Horror", img: "img/pixelhorror.png", dev: "K", link: "https://drive.google.com/file/d/1KkrqHqEUdW5hB_6rD6VTT-_jsSsgLvMb/view?usp=drive_link" },
    { name: "Create a superhero", img: "img/createasuperhero.png", dev: "K", link: "https://gamejolt.com/games/fff/391796" },
    { name: "Guess the word", img: "img/guesstheword.png", dev: "K", link: "https://drive.google.com/file/d/1Q2E2rYmAE0GMzmSOUtuZv0eIJTms874W/view?usp=drive_link" },
    { name: "Draw Game", img: "img/drawgame.png", dev: "K", link: "https://drive.google.com/file/d/1IloxyzsnrDrYCyagqp3zW_tGRdNhLDlx/view?usp=drive_link" },
	{ name: "Fire Fighter", img: "img/firefighter.png", dev: "K", link: "https://drive.google.com/file/d/1EIFSOzIfT_uEg-AuxTuaAkihk-fHRWQL/view?usp=drive_link" },
	{ name: "Cube Catchers", img: "img/cubecatchers.jpeg", dev: "K", link: "https://drive.google.com/file/d/10ZIsPkse3U4x8_BEe32G6mJ9QrjZRST9/view?usp=drive_link" },	
	{ name: "Karina Game", img: "img/karinagame.png", dev: "K", link: "" },
	{ name: "HopScotch", img: "img/hopscotch.png", dev: "K", link: "https://kopynus.itch.io/hopscotch" },	
	{ name: "Fnal", img: "img/fnal.png", dev: "K", link: "https://scratch.mit.edu/projects/264379240" },
	{ name: "Foertinate", img: "img/foertinate.png", dev: "K", link: "https://scratch.mit.edu/projects/639501460/" },		
  ];

  function createGameCard(game, index) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.draggable = true;
    card.dataset.game = game.name;
    card.dataset.link = game.link;

    const img = document.createElement('img');
    img.src = game.img;
    img.alt = game.name;
    img.draggable = false;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = game.name;

    const devBadge = document.createElement('span');
    devBadge.className = `dev-badge ${game.dev}`;
    devBadge.textContent = game.dev === 'B' ? 'B' : game.dev;
    devBadge.draggable = false;
    devBadge.addEventListener('dragstart', e => e.preventDefault());

    card.appendChild(img);
    card.appendChild(nameSpan);
    card.appendChild(devBadge);

    if (game.link && game.link.trim() !== '') {
      const linkIcon = document.createElement('span');
      linkIcon.className = 'game-link';
      linkIcon.innerHTML = '<i class="fa-solid fa-link"></i>';
      linkIcon.draggable = false;
      linkIcon.addEventListener('dragstart', e => e.preventDefault());
      linkIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const url = card.dataset.link || '#';
        window.open(url, '_blank');
      });
      card.appendChild(linkIcon);
    }

    return card;
  }

  const tierS = document.getElementById('tierS');
  const tierA = document.getElementById('tierA');
  const tierB = document.getElementById('tierB');
  const tierC = document.getElementById('tierC');
  const tierD = document.getElementById('tierD');
  const tierDK = document.getElementById('tierDK');
  const allTiers = [tierS, tierA, tierB, tierC, tierD, tierDK];

  function updateTop3() {
    const rankContainer = document.querySelector('.rank-container');
    const allCards = Array.from(rankContainer.querySelectorAll('.game-card'));
    allCards.forEach(card => {
      card.classList.remove('top-1', 'top-2', 'top-3');
    });
    allCards.slice(0, 3).forEach((card, idx) => {
      if (idx === 0) card.classList.add('top-1');
      else if (idx === 1) card.classList.add('top-2');
      else if (idx === 2) card.classList.add('top-3');
    });
  }

  function resetToInitial() {
    allTiers.forEach(tier => { if (tier) tier.innerHTML = ''; });
    gameList.forEach((game, idx) => {
      tierS.appendChild(createGameCard(game, idx));
    });
    updateTop3();
  }
  resetToInitial();


  let draggedCard = null;

  function handleDragStart(e) {
    draggedCard = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.game || 'game');
    this.style.opacity = '0.6';
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    allTiers.forEach(t => t.classList.remove('drag-over'));
    draggedCard = null;
    updateTop3();
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
  }

  function handleDragLeave(e) {
    this.classList.remove('drag-over');
  }

  function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    if (!draggedCard) return;

    const targetTier = this;
    const dropTarget = e.target.closest('.game-card');

    if (dropTarget && dropTarget !== draggedCard && targetTier.contains(dropTarget)) {
      targetTier.insertBefore(draggedCard, dropTarget);
    } else {
      targetTier.appendChild(draggedCard);
    }
  }

  function attachDragListeners(card) {
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
  }

  function observeAllCards() {
    document.querySelectorAll('.game-card').forEach(card => {
      if (!card.dragAttached) {
        attachDragListeners(card);
        card.dragAttached = true;
      }
    });
  }
  observeAllCards();

  const cardObserver = new MutationObserver(() => {
    observeAllCards();
    updateTop3();
  });
  allTiers.forEach(tier => {
    if (tier) cardObserver.observe(tier, { childList: true, subtree: false });
  });

  allTiers.forEach(tier => {
    if (!tier) return;
    tier.addEventListener('dragover', handleDragOver);
    tier.addEventListener('dragleave', handleDragLeave);
    tier.addEventListener('drop', handleDrop);
  });


  const slideContainer = document.querySelector('.slide-container');
  const goBtn = document.getElementById('goToRankBtn');
  const backBtn = document.getElementById('backToHeroBtn');
  const footerHome = document.getElementById('footerHome');
  const footerRank = document.getElementById('footerRank');

  if (goBtn) {
    goBtn.addEventListener('click', (e) => {
      e.preventDefault();
      slideContainer.classList.add('show-rank');
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      slideContainer.classList.remove('show-rank');
    });
  }

  if (footerHome) {
    footerHome.addEventListener('click', (e) => {
      e.preventDefault();
      slideContainer.classList.remove('show-rank');
    });
  }
  if (footerRank) {
    footerRank.addEventListener('click', (e) => {
      e.preventDefault();
      slideContainer.classList.add('show-rank');
    });
  }


  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      resetToInitial();
    });
  }


  const tierDescriptions = {
    S: '✨ Top tier – absolute masterpieces',
    A: '🔥 Great games, highly recommended',
    B: '👍 Solid, enjoyable titles',
    C: '⚖️ Average – some flaws',
    D: '⚠️ Below average, niche appeal',
    DK: '❓ Haven’t played / unknown'
  };

  let activeTooltip = null;

  function removeTooltip() {
    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }
  }

  function showTooltip(text, element) {
    removeTooltip();
    const tooltip = document.createElement('div');
    tooltip.className = 'tier-tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);
    activeTooltip = tooltip;

    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    let top = rect.bottom + 10;
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
      left = window.innerWidth - tooltipRect.width - 10;
    }
    if (top + tooltipRect.height > window.innerHeight - 10) {
      top = rect.top - tooltipRect.height - 10;
    }
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  }

  const tierBadges = document.querySelectorAll('.tier-badge');
  tierBadges.forEach(badge => {
    badge.addEventListener('click', function(e) {
      const infoIcon = e.target.closest('.tier-info');
      if (!infoIcon) return;
      const tier = this.dataset.tier;
      const desc = tierDescriptions[tier];
      if (!desc) return;
      if (activeTooltip && activeTooltip.textContent === desc) {
        removeTooltip();
      } else {
        showTooltip(desc, infoIcon);
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.tier-info')) {
      removeTooltip();
    }
  });

  window.addEventListener('scroll', removeTooltip);
  window.addEventListener('resize', removeTooltip);
})();