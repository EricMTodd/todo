import { List } from '../models/listModel';
import { storageControllers } from './storageControllers';
import { usersControllers } from './usersControllers';
import { listsViews } from '../views/listsViews';

const listsControllers = (() => {
	let storageObject = storageControllers.load();

	const destroy = (id) => {
		let user = usersControllers.find(storageObject.users.loggedInUser.email);

		for (let i = 0; i < user.lists.length; i++) {
			if (id === user.lists[i].id) {
				user.lists.splice(i, 1);
				storageObject.loggedInUser = user;
				storageControllers.save();
				return listsViews.renderLists();
			}
		}
		return console.log('no match');
	};

	const create = (name) => {
		let user = usersControllers.find(storageObject.users.loggedInUser.email);

		if (name === '') {
			return alert('Please enter a name for the list.');
		}

		let newList = new List(storageObject.uniqueId, name);
		user.lists.push(newList);
		storageObject.users.loggedInUser = user;
		storageObject.uniqueId++;
		return storageControllers.save();
	};

	return {
		create,
		destroy,
	};
})();

export { listsControllers };
