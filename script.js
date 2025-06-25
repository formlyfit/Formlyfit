console.log('FormlyFit loaded');

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Login erfolgreich!');
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Registrierung erfolgreich!');
});
