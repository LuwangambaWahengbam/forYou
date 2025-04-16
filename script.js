// Scroll fade-in effect
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact & Profile Links Section
const contactSection = document.createElement('div');
contactSection.className = 'contact-section fade-in';
contactSection.innerHTML = `
  <h2>📬 Contact & Profiles</h2>
  <div class="contact-links">
    <a href="https://www.facebook.com/profile.php?id=100086462775181" target="_blank" class="fb-btn">Shileibi's Facebook</a>
    <a href="https://www.facebook.com/profile.php?id=100079540110403" target="_blank" class="fb-btn">Luwangamba's Profile</a>
  </div>
`;
document.body.appendChild(contactSection);

// Question Section
const questionBox = document.createElement('div');
questionBox.className = 'question-section fade-in';
questionBox.innerHTML = `
  <h2>💖 Do You Love Me?</h2>
  <div class="buttons">
    <button id="yesBtn">Yes</button>
    <button id="noBtn">No</button>
  </div>
  <div class="response"></div>
`;
document.body.appendChild(questionBox);

// Send Email with Template Variables
function sendResponseEmail(answer) {
  const templateParams = {
    name: "Shileibi",
    message: `She clicked: ${answer}`,
    time: new Date().toLocaleString()
  };

  emailjs.send("luwang0017", "template_ukecxrm", templateParams, "Luwangamba")
    .then(() => {
      console.log("Email sent ✅");
    }).catch((error) => {
      console.error("Email failed ❌", error);
    });
}

// Button Click Handlers
document.getElementById('yesBtn').addEventListener('click', () => {
  sendResponseEmail("Yes");
  document.querySelector('.response').innerHTML = `
    <h3>I Love You 💕</h3>
    <div class="proposal-card">
      <h1>🌹 Will You Marry Me?</h1>
      <p>You're my everything 💍✨</p>
      <div class="buttons">
        <button id="marryYes">Yes</button>
        <button id="marryNo">No</button>
      </div>
      <div class="marry-response"></div>
    </div>
    <div class="rose rain"></div>
  `;
  rainRoses();

  document.getElementById('marryYes').addEventListener('click', () => {
    sendResponseEmail("Marry Yes");
    document.querySelector('.marry-response').innerHTML = `<h3>💖 Yayy! I'm the happiest person ever!</h3>`;
  });

  document.getElementById('marryNo').addEventListener('click', () => {
    sendResponseEmail("Marry No");
    document.querySelector('.marry-response').innerHTML = `<h3>😢 I understand... but I'll always love you!</h3>`;
  });
});

document.getElementById('noBtn').addEventListener('click', () => {
  sendResponseEmail("No");
  document.querySelector('.response').innerHTML = `
    <h3>Why? I really love you 💔</h3>
    <p>Please accept my proposal 🙏</p>
  `;
});

// Rose Rain
function rainRoses() {
  const roseContainer = document.querySelector('.rose.rain');
  for (let i = 0; i < 30; i++) {
    const rose = document.createElement('div');
    rose.className = 'rose';
    rose.style.left = `${Math.random() * 100}vw`;
    rose.style.animationDelay = `${Math.random() * 5}s`;
    roseContainer.appendChild(rose);
  }
}

// Load EmailJS SDK
const emailjsScript = document.createElement('script');
emailjsScript.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
emailjsScript.onload = () => {
  emailjs.init("Luwangamba"); // your user/public key
};
document.body.appendChild(emailjsScript);
