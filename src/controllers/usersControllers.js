import { userModel } from '../models/userModel';
import { storageControllers as storage } from './storageControllers';

const usersControllers = (() => {
	let storageObject = storage.load();
	const create = (name, email, password) => {
		let newUser = new userModel(name, email, password);
		console.log(newUser);
		storageObject.users.push(newUser);
		storage.save();
	};
	return {
		create,
	};
})();

export { usersControllers };
