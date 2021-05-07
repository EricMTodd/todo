import { indexViews } from './indexViews';

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
			button.className = 'push';
			return nav.appendChild(button);
		})();
		const renderCreateUserButton = (() => {
			let button = document.createElement('button');
			button.innerText = 'Sign Up';
			return nav.appendChild(button);
		})();
	};

	return {
		renderLoginControlsContainer,
	};
})();

export { navViews };
