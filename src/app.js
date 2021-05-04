import { indexViews } from './views/indexViews';
const app = (() => {
	let content = document.querySelector('#content');

	const renderClearLocalStorageButton = (() => {
		let button = document.createElement('button');
		button.type = 'button';
		button.innerText = 'Clear localStorage';
		button.addEventListener('click', (e) => {
			localStorage.clear();
			window.location.reload();
		});
		return content.appendChild(button);
	})();
	return {};
})();
