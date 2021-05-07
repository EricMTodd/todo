import { indexViews } from './indexViews';
import { usersViews } from './usersViews';
import { authViews } from './authViews';
import { authControllers } from '../controllers/authControllers';

const navViews = (() => {
	let nav = document.querySelector('nav');
	let indexButton = document.querySelector('#index-button');
	indexButton.addEventListener('click', (e) => {
		indexViews.checkLogin();
	});

	let authButtonsContainer = document.querySelector('#auth-buttons-container');

	const renderLoginButtons = () => {
		authButtonsContainer.innerHTML = '';

		const renderLoginButton = (() => {
			let button = document.createElement('button');
			button.innerText = 'Login';
			button.id = 'login-logout-button';
			button.className = 'push';
			button.addEventListener('click', (e) => {
				authViews.renderLoginForm();
			});
			return authButtonsContainer.appendChild(button);
		})();
		const renderCreateUserButton = (() => {
			let button = document.createElement('button');
			button.innerText = 'Signup';
			button.id = 'signup-button';
			button.addEventListener('click', (e) => {
				usersViews.renderCreateUserForm();
			});
			return authButtonsContainer.appendChild(button);
		})();
	};

	const renderLogoutButton = () => {
		authButtonsContainer.innerHTML = '';
		let button = document.createElement('button');
		button.innerText = 'Logout';
		button.id = 'logout-button';
		button.className = 'push';
		button.addEventListener('click', (e) => {
			authControllers.logout();
		});
		authButtonsContainer.appendChild(button);
	};

	return {
		renderLoginButtons,
		renderLogoutButton,
	};
})();

export { navViews };
