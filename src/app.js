import { indexViews } from './views/indexViews';
import { loginViews } from './views/loginViews';

const app = (() => {
	loginViews.renderLoginForm();
})();
