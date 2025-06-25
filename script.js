document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Login-Formular ausblenden
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'none';

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
});<document.body.innerHTML += editorHTML;

const gespeicherteMaße = JSON.parse(localStorage.getItem("formlyfit_maße"));
if (gespeicherteMaße) {
  document.getElementById("brust").value = gespeicherteMaße.brust;
  document.getElementById("taille").value = gespeicherteMaße.taille;
  document.getElementById("huefte").value = gespeicherteMaße.huefte;
  updateAvatar();
}
