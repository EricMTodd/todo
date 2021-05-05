import { indexViews } from './views/indexViews';
const app = (() => {
	document.querySelector('#index-link').addEventListener('click', (e) => {
		indexViews.checkLogin();
	});
	indexViews.checkLogin();
	return {};
})();
