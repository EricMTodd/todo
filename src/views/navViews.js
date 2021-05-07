import { indexViews } from './indexViews';

const navViews = (() => {
	let nav = document.querySelector('nav');

	const renderLoginControlsContainer = () => {
		const renderIndexButton = (() => {
			let button = document.createElement('button');
			button.innerText = 'Index';
			button.addEventListener('click', (e) => {
				indexViews.checkLogin;
			});
			return nav.appendChild(button);
		})();

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
