import { List } from '../models/listModel';
import { storageControllers } from './storageControllers';
import { usersControllers } from './usersControllers';

const listsControllers = (() => {
	let storageObject = storageControllers.load();

	const create = (name) => {
		let user = usersControllers.find(storageObject.users.loggedInUser.email);

		if (name === '') {
			return alert('Please enter a name for the list.');
		}

		let newList = new List(storageObject.uniqueId, name);
		storageObject.users.loggedInUser.lists.push(newList);
		user.lists.push(newList);
		storageObject.uniqueId++;
		return storageControllers.save();
	};

	return {
		create,
	};
})();

export { listsControllers };
