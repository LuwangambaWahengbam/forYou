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

// Send Email via EmailJS
function sendResponseEmail(answer) {
  emailjs.send("service_2sqdytr", "Luwangamba0017", {
    to_name: "Luwangamba",
    from_name: "Shileibi",
    message: `She clicked: ${answer}`,
    reply_to: "luwangambawahengbam2006@gmail.com"
  }).then(
    () => console.log("Email sent: " + answer),
    error => console.error("Email failed: ", error)
  );
}

// Response logic
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

// CSS Style Inject
const style = document.createElement('style');
style.innerHTML = `

  .contact-section {
    background: linear-gradient(135deg, #ffe4f7, #c6f1ff);
    text-align: center;
    padding: 40px 20px;
    border-radius: 20px;
    margin: 40px auto;
    max-width: 90%;
    box-shadow: 0 0 15px rgba(255, 0, 200, 0.3);
  }
  .contact-section h2 {
    font-family: 'Fleur De Leah', cursive;
    color: #ff1493;
    margin-bottom: 20px;
  }
  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .fb-btn {
    background-color: #1877f2;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 12px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s;
  }
  .fb-btn:hover {
    background-color: #145dbf;
  }
  .question-section {
    background: #fff0f5;
    padding: 30px;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.3);
    margin: 40px auto;
    max-width: 90%;
  }
  .question-section h2 {
    color: #e91e63;
    font-family: 'Fleur De Leah', cursive;
  }
  .buttons button {
    background: #ff69b4;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
  }
  .buttons button:hover {
    background: #c2185b;
  }
  .response h3, .response p, .marry-response h3 {
    color: #e91e63;
    font-size: 20px;
    margin: 10px;
  }
  .proposal-card {
    background: #fff8f0;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(255, 182, 193, 0.4);
    margin-top: 20px;
  }
  .proposal-card h1 {
    color: #e91e63;
  }
  .rose {
    width: 25px;
    height: 25px;
    background-image: url('https://cdn-icons-png.flaticon.com/512/415/415733.png');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: -50px;
    animation: fall 5s linear infinite;
  }
  @keyframes fall {
    to {
      transform: translateY(100vh);
    }
  }
`;
document.head.appendChild(style);

// Load EmailJS SDK
const emailjsScript = document.createElement('script');
emailjsScript.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
emailjsScript.onload = () => {
  emailjs.init("Luwangamba"); // Your EmailJS User ID
};
document.body.appendChild(emailjsScript);
