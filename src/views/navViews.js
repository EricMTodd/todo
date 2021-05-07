import { indexViews } from './indexViews';
import { usersViews } from './usersViews';
import { authViews } from './authViews';

const navViews = (() => {
	let nav = document.querySelector('nav');
	let indexButton = document.querySelector('#index-button');
	indexButton.addEventListener('click', (e) => {
		indexViews.checkLogin();
	});

	const renderLoginControlsContainer = () => {
		const renderLoginButton = (() => {
			let button = document.createElement('button');
			button.innerText = 'Login';
			button.id = 'login-logout-button';
			button.className = 'push';
			button.addEventListener('click', (e) => {
				authViews.renderLoginForm();
			});
			return nav.appendChild(button);
		})();
		const renderCreateUserButton = (() => {
			let button = document.createElement('button');
			button.innerText = 'Signup';
			button.id = 'signup-button';
			button.addEventListener('click', (e) => {
				usersViews.renderCreateUserForm();
			});
			return nav.appendChild(button);
		})();
	};

	return {
		renderLoginControlsContainer,
	};
})();

export { navViews };
