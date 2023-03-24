const loginForm = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const facebookButton = document.querySelector('.facebook-button');
const twitterButton = document.querySelector('.twitter-button');
const googleButton = document.querySelector('.google-button');

// Add event listener to login form
loginForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const username = usernameInput.value;
	const password = passwordInput.value;

	// Perform validation here

	// If validation is successful, redirect to home
});
