const body = document.body;
const ybtn = document.getElementById('yesBtn');
const nbtn = document.getElementById('noBtn');
const question = document.getElementById('questionView');
const darklife = document.getElementById('darkView');
const wedeadass = document.getElementById('areYouSureBtn');
const noicantomg = document.getElementById('cantLiveBtn');
const loadingstate = document.getElementById('loadingView');
const shesaidyes = document.getElementById('successView');
const sadniggaemoji = document.getElementById('sadView');
const hertzcon = document.getElementById('heartsContainer');
const raincon = document.getElementById('rainContainer');
const main = document.getElementById('mainCard');
let sure = 0; // is she sure 🥺
// Turkish ass niggas
const url_params = new URLSearchParams(window.location.search);
if (url_params.get('lang') === 'turk') {
    if (question) {
        const q_h1 = question.querySelector('h1');
        const q_p = question.querySelector('p');
        if (q_h1) q_h1.innerText = "Kız arkadaşım olur musun?";
        if (q_p) q_p.innerText = "Gerçekten hoşlanıyorum ve bunu resmileştirmek istiyorum.";
    }
    if (ybtn) ybtn.innerText = "Evet";
    if (nbtn) nbtn.innerText = "Hayır";
    if (darklife) {
        const d_h1 = darklife.querySelector('h1');
        const d_p = darklife.querySelector('p');
        if (d_h1) d_h1.innerText = "Bekle...";
        if (d_p) d_p.innerText = "Beni gerçekten yağmurda mı bırakıyorsun?";
    }
    if (wedeadass) wedeadass.innerText = "Emin misin?";
    if (noicantomg) noicantomg.innerText = "Hayır, sensiz yaşayamam";
    if (loadingstate) {
        const l_text = loadingstate.querySelector('.loading-text');
        if (l_text) l_text.innerText = "Aşk Yükleniyor...";
    }
    if (shesaidyes) {
        const s_msg = shesaidyes.querySelector('.success-message');
        if (s_msg) s_msg.innerHTML = "Sana iyi davranacağım,<br>söz veriyorum.";
    }
    if (sadniggaemoji) {
        const s_h1 = sadniggaemoji.querySelector('h1');
        if (s_h1) s_h1.innerText = "Tamam...";
    }
}
function createhertz() {
   const heart_count = 15;
   for (let i = 0; i < heart_count; i++) {
      oneheart();
   }
}
function oneheart() {
   const heart = document.createElement('div');
   heart.classList.add('heart-shape');
   const svgico = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
   heart.innerHTML = svgico;
   heart.style.left = Math.random() * 100 + 'vw';
   heart.style.width = (Math.random() * 20 + 10) + 'px';
   heart.style.height = heart.style.width;
   heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
   heart.style.animationDelay = Math.random() * 5 + 's';
   hertzcon.appendChild(heart);
}
function gravylaughed() {
   const dcount = 100;
   for (let i = 0; i < dcount; i++) {
      const drop = document.createElement('div');
      drop.classList.add('drop');
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
      drop.style.animationDelay = Math.random() * 2 + 's';
      drop.style.opacity = Math.random();
      raincon.appendChild(drop);
   }
}
function showflow() {
   question.classList.add('hidden');
   darklife.classList.add('hidden');
   loadingstate.style.display = 'flex';
   setTimeout(function () {
      loadingstate.style.display = 'none';
      shesaidyes.style.display = 'block';
      doveofpeace();
   }, 2500);
}
nbtn.addEventListener('mouseenter', function () {
   body.classList.add('dark-mode');
});
nbtn.addEventListener('mouseleave', function () {
   if (!darklife.classList.contains('hidden')) return;
   body.classList.remove('dark-mode');
});
nbtn.addEventListener('click', function () {
   body.classList.add('dark-mode');
   hertzcon.innerHTML = '';
   question.classList.add('hidden');
   darklife.classList.remove('hidden');
   sure = 0; 
   const url_params_reset = new URLSearchParams(window.location.search);
   if (url_params_reset.get('lang') === 'turk') {
       wedeadass.innerText = "Emin misin?";
   }
});
wedeadass.addEventListener('click', function () {
   sure++;
   if (sure === 1) {
      wedeadass.innerText = "Bunu dusundunmu?";
   } else if (sure === 2) {
      wedeadass.innerText = "Tamam, anladim. Ama belki simdi kararini degistirmissindir?";
   } else {
      darklife.classList.add('hidden');
      sadniggaemoji.style.display = 'flex';
      sure = 0;
   }
});

noicantomg.addEventListener('click', function () {
   sure = 0; // Reset count if she comes back 🥹🥺😌🥺🥹🥺🥹🙏🥺🥺🥹🥹🥹🥺🙏🙏🥺😌
   body.classList.remove('dark-mode');
   darklife.classList.add('hidden');
   question.classList.remove('hidden');
   createhertz();
});
ybtn.addEventListener('click', function () {
   showflow();
});
function doveofpeace() {
   for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.innerHTML = '💖';
      confetti.style.position = 'fixed';
      confetti.style.left = '50%';
      confetti.style.top = '50%';
      confetti.style.fontSize = '20px';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '100';
      document.body.appendChild(confetti);
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 300 + 100;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      confetti.animate([{
            transform: 'translate(0,0) scale(1)',
            opacity: 1
         },
         {
            transform: `translate(${tx}px, ${ty}px) scale(0)`,
            opacity: 0
         }
      ], {
         duration: 1000 + Math.random() * 1000,
         easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
         fill: 'forwards'
      }).onfinish = function () {
         confetti.remove();
      };
   }
}
createhertz();
gravylaughed();