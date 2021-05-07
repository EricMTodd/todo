import { authControllers } from '../controllers/authControllers';
import { authViews } from '../views/authViews';
import { navViews } from '../views/navViews';
import { storageControllers } from '../controllers/storageControllers';

const indexViews = (() => {
	let storageObject = storageControllers.load();
	let main = document.querySelector('main');

	const renderUserIndex = () => {
		navViews.renderLogoutButton();
		main.innerHTML = '';
		let container = document.createElement('div');
		let welcomeMessage = document.createElement('h1');
		welcomeMessage.innerText = `Welcome ${storageObject.users.loggedInUser.name}!`;
		container.appendChild(welcomeMessage);
		main.appendChild(container);
	};

	const renderNoUserIndex = () => {
		navViews.renderLoginButtons();
		main.innerHTML = '';
		const renderAboutContainer = (() => {
			let aboutContainer = document.createElement('div');
			aboutContainer.className = 'container';
			let indexHeader = document.createElement('h1');
			indexHeader.innerText = `Welcome to #todo!`;
			let aboutHeader = document.createElement('h2');
			aboutHeader.innerText = `What is #todo?`;
			let aboutText = document.createElement('p');
			aboutText.innerText = `#todo is a place to keep all your lists of things, whatver they may be. Simply create an account, login and start making your day to day more productive!`;
			let button = document.createElement('button');
			button.innerText = 'Get started';
			button.disabled = true;
			button.addEventListener('click', (e) => {
				authViews.renderLoginForm();
			});
			aboutContainer.appendChild(indexHeader);
			aboutContainer.appendChild(aboutHeader);
			aboutContainer.appendChild(aboutText);
			// aboutContainer.appendChild(button);
			main.appendChild(aboutContainer);
		})();
	};

	const checkLogin = () => {
		if (storageObject.users.loggedInUser !== null) {
			return renderUserIndex();
		}
		return renderNoUserIndex();
	};

	return {
		renderUserIndex,
		renderNoUserIndex,
		checkLogin,
	};
})();

export { indexViews };
