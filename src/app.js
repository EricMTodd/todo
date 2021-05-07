import { indexViews } from './views/indexViews';
import { navViews } from './views/navViews';

const app = (() => {
	indexViews.checkLogin();
	return {};
})();
