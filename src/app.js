import { indexViews } from './views/indexViews';

const app = (() => {
	const renderContent = (() => {
		const content = document.querySelector('#content');

		const renderNav = (() => {
			let nav = document.createElement('nav');
			nav.innerText = '#nav';
			return content.appendChild(nav);
		})();

		const renderMain = (() => {
			let main = document.createElement('main');
			main.innerText = indexViews.checkLogin();
			return content.appendChild(main);
		})();

		const renderFooter = (() => {
			let footer = document.createElement('footer');
			footer.innerText = '#footer';
			return content.appendChild(footer);
		})();
	})();
	return {};
})();
