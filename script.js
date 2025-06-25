document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';

    // Avatar-Editor anzeigen
    const editorHTML = `
      <section id="avatarEditor">
        <h2>Dein Avatar Editor 🧍‍♀️</h2>

        <label>Brustumfang (cm): <input type="number" id="brust"></label><br>
        <label>Taillenumfang (cm): <input type="number" id="taille"></label><br>
        <label>Hüftumfang (cm): <input type="number" id="huefte"></label><br>
        <button onclick="updateAvatar()">Avatar aktualisieren</button>

        <div id="avatarPreview" style="margin-top:20px;">
          <img id="avatarImage" src="avatar-female.png" width="200" alt="Avatar">
        </div>
      </section>
    `;

    document.body.innerHTML += editorHTML;
document.getElementById("brust").addEventListener("input", updateAvatarLive);
document.getElementById("taille").addEventListener("input", updateAvatarLive);
document.getElementById("huefte").addEventListener("input", updateAvatarLive);
    // gespeicherte Maße automatisch einfügen
    const gespeicherteMaße = JSON.parse(localStorage.getItem("formlyfit_maße"));
    if (gespeicherteMaße) {
      document.getElementById("brust").value = gespeicherteMaße.brust;
      document.getElementById("taille").value = gespeicherteMaße.taille;
      document.getElementById("huefte").value = gespeicherteMaße.huefte;
      updateAvatar();
    }
  });
});

function updateAvatar() {
  const brust = document.getElementById("brust").value;
  const taille = document.getElementById("taille").value;
  const huefte = document.getElementById("huefte").value;

  localStorage.setItem("formlyfit_maße", JSON.stringify({
    brust,
    taille,
    huefte
  }));

  const avatar = document.getElementById("avatarImage");

  if (brust < 90 && taille < 75) {
    avatar.src = "https://raw.githubusercontent.com/formlyfit/formlyfit/main/avatar-female.png";
  } else {
    avatar.src = "https://raw.githubusercontent.com/formlyfit/formlyfit/main/avatar-male.png";
  }

  alert("Maße gespeichert ✅");
}
