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
		let container = document.createElement('div');
		let welcomeMessage = document.createElement('h1');
		welcomeMessage.innerText = `Welcome to #todo!`;
		let link = document.createElement('a');
		link.innerText = 'Login/Sign up';
		link.addEventListener('click', (e) => {
			authViews.renderLoginForm();
		});
		container.appendChild(welcomeMessage);
		container.appendChild(link);
		content.appendChild(container);
	};

	const loggedInConditional = (() => {
		if (storageObject.users.loggedInUser !== null) {
			return renderUserIndex();
		}
		return renderNoUserIndex();
	})();
	return {
		renderUserIndex,
	};
})();

export { indexViews };
