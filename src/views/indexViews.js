import { storageControllers } from '../controllers/storageControllers';
import { authControllers } from '../controllers/authControllers';
import { authViews } from '../views/authViews';

const indexViews = (() => {
	const content = document.querySelector('#content');
	let storageObject = storageControllers.load();

	const renderUserIndex = () => {
		content.innerHTML = '';
		let container = document.createElement('div');
		let welcomeMessage = document.createElement('h1');
		welcomeMessage.innerText = `Welcome ${storageObject.users.loggedInUser.name}!`;
		let link = document.createElement('a');
		link.innerText = 'Logout';
		link.addEventListener('click', (e) => {
			authControllers.logout();
		});
		container.appendChild(welcomeMessage);
		container.appendChild(link);
		content.appendChild(container);
	};

	const renderNoUserIndex = () => {
		content.innerHTML = '';
		const renderAboutContainer = (() => {
			let aboutContainer = document.createElement('div');
			aboutContainer.id = 'about-container';
			aboutContainer.className = 'container';
			let indexHeader = document.createElement('h1');
			indexHeader.innerText = `Welcome to #todo!`;
			let aboutHeader = document.createElement('h3');
			aboutHeader.innerText = `What is #todo?`;
			let aboutText = document.createElement('p');
			aboutText.innerText = `#todo is a place to keep all your lists of things, whatver they may be. Simply create an account, login and start making your day to day more productive!`;
			let button = document.createElement('button');
			button.innerText = 'Get started';
			button.addEventListener('click', (e) => {
				authViews.renderLoginForm();
			});
			aboutContainer.appendChild(indexHeader);
			aboutContainer.appendChild(aboutHeader);
			aboutContainer.appendChild(aboutText);
			aboutContainer.appendChild(button);
			content.appendChild(aboutContainer);
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
