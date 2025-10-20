// Save user data in localStorage (for demo)
function signupUser(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  localStorage.setItem('user', JSON.stringify({ username, password }));
  alert('Sign up successful! Please log in.');
  window.location.href = "index.html";
}

function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    localStorage.setItem('loggedInUser', username);
    window.location.href = "dashboard.html";
  } else {
    alert('Invalid credentials');
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = "index.html";
}

function toggleMenu() {
  document.getElementById('side-menu').classList.toggle('show');
}

// Display username on dashboard
window.onload = function() {
  const user = localStorage.getItem('loggedInUser');
  if (document.getElementById('user-name')) {
    if (!user) {
      window.location.href = "index.html";
    } else {
      document.getElementById('user-name').textContent = user;
    }
  }
}
