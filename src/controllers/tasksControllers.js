import { storageControllers } from './storageControllers';
import { usersControllers } from './usersControllers';

const tasksControllers = (() => {
	let storageObject = storageControllers.load();
	return {};
})();

export { tasksControllers };
