import { storageControllers as storage } from './controllers/storageControllers';
import { userViews } from './views/userViews';

const app = (() => {
	let storageObject = storage.load();
	userViews.renderCreateUserView();
})();
