class User {
  constructor() {
    this.usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    this.currentUser = null;
  }

  // Validate email format using regex
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate password format
  isValidPassword(password) {
    // Password must be at least 8 characters long, contain at least 1 uppercase letter, and 1 special character
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  }

  signUp(name, email, password) {
    // Check for valid email and password before signing up
    if (!this.isValidEmail(email)) {
      alert('Invalid email address. Please enter a valid email.');
      return;
    }

    if (!this.isValidPassword(password)) {
      alert('Invalid password. Password must be at least 8 characters long, containing at least 1 uppercase letter and 1 special character.');
      return;
    }

    const newUser = { name, email, password };
    this.usersData.push(newUser);
    this.saveData();
    alert('Sign Up successful! You can now Sign In.');
  }

  signIn(email, password) {
    const user = this.usersData.find(user => user.email === email && user.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  saveData() {
    localStorage.setItem('usersData', JSON.stringify(this.usersData));
  }
}

const user = new User();

document.querySelector('.card-front .btn').addEventListener('click', () => {
  const signUpName = document.getElementById('logname').value;
  const signUpEmail = document.getElementById('logemail').value;
  const signUpPassword = document.getElementById('logpass').value;
  user.signUp(signUpName, signUpEmail, signUpPassword);
});

document.querySelector('.card-back .btn').addEventListener('click', () => {
  const signInEmail = document.getElementById('log-email').value;
  const signInPassword = document.getElementById('log-pass').value;
  if (user.signIn(signInEmail, signInPassword)) {
    alert('Sign In successful!');
    // Redirect to landingpage
    window.location.href = 'landingpage.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
});
