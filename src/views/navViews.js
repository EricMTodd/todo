import { indexViews } from './indexViews';
import { usersViews } from './usersViews';
import { authViews } from './authViews';
import { authControllers } from '../controllers/authControllers';
import { storageControllers } from '../controllers/storageControllers';

const navViews = (() => {
	let storageObject = storageControllers.load();
	let indexButton = document.querySelector('#index-button');
	indexButton.addEventListener('click', (e) => {
		indexViews.checkLogin();
	});

	let authButtonsContainer = document.querySelector('#auth-buttons-container');

	const renderLoginButtons = () => {
		authButtonsContainer.innerHTML = '';

		const renderLoginButton = (() => {
			let button = document.createElement('button');
			button.type = 'button';
			button.innerText = 'Login';
			button.id = 'login-button';
			button.addEventListener('click', (e) => {
				authViews.renderLoginForm();
			});
			return authButtonsContainer.appendChild(button);
		})();
		const renderCreateUserButton = (() => {
			let button = document.createElement('button');
			button.type = 'type';
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
		button.type = 'button';
		button.innerText = 'Logout';
		button.id = 'logout-button';
		button.addEventListener('click', (e) => {
			authControllers.logout();
		});
		authButtonsContainer.appendChild(button);
	};

	const renderUserName = () => {
		let todoHeader = document.querySelector('#todo-header');
		todoHeader.innerText = `${storageObject.users.loggedInUser.name}'s lists`;
	};

	return {
		renderLoginButtons,
		renderLogoutButton,
		renderUserName,
	};
})();

export { navViews };
