// import { authControllers } from '../controllers/authControllers';
import { storageControllers } from '../controllers/storageControllers';
import { authViews } from '../views/authViews';
import { navViews } from '../views/navViews';
import { listsViews } from '../views/listsViews';

const indexViews = (() => {
	let storageObject = storageControllers.load();
	let main = document.querySelector('main');

	const renderUserIndex = () => {
		navViews.renderLogoutButton();
		main.innerHTML = '';
		main.className = 'list-view';
		listsViews.renderCreateListContainer();
	};

	const renderNoUserIndex = () => {
		navViews.renderLoginButtons();
		main.innerHTML = '';
		const renderAboutContainer = (() => {
			let aboutContainer = document.createElement('div');
			aboutContainer.classList.remove('list-create-container');
			aboutContainer.className = 'container';
			let indexHeader = document.createElement('h1');
			indexHeader.innerText = `Welcome to #todo!`;
			let aboutHeader = document.createElement('h2');
			aboutHeader.innerText = `What is #todo?`;
			let aboutText = document.createElement('p');
			aboutText.innerText = `#todo is a place to keep all your lists of things, whatver they may be. Simply create an account, login and start making your day to day more productive!`;
			let button = document.createElement('button');
			button.id = 'get-started-button';
			button.innerText = 'Get started';
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
