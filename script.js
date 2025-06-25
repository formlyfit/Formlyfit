document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Login-Formular ausblenden
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'none';

  // Neues Dashboard anzeigen
  const dashboardHTML = `
    <section id="dashboard">
      <h2>Willkommen zurück, Lisa! 🎉</h2>
      <img src="avatar-female.png" alt="Dein Avatar" width="200">
      <p>Dein heutiges Kalorienziel: <strong>1400 kcal</strong></p>
      <button onclick="alert('Avatar-Editor bald verfügbar!')">👕 Avatar bearbeiten</button>
      <button onclick="alert('Tracking kommt bald!')">📊 Fortschritt ansehen</button>
    </section>
  `;

  document.body.innerHTML += dashboardHTML;
});
