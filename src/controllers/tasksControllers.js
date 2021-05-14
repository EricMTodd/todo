import { storageControllers } from './storageControllers';
import { usersControllers } from './usersControllers';
import { Task } from '../models/taskModel';
import { listsViews } from '../views/listsViews';

const tasksControllers = (() => {
	let storageObject = storageControllers.load();

	const find = (id) => {
		let user = usersControllers.find(storageObject.users.loggedInUser.email);
		for (let i = 0; i < user.lists.length; i++) {
			for (let j = 0; j < user.lists[i].tasks.length; j++) {
				if (id === user.lists[i].tasks[j].id) {
					user.lists[i].tasks.splice(j, 1);
					storageObject.loggedInUser = user;
					storageControllers.save();
					return listsViews.renderLists();
				}
			}
		}
		return console.log('no match');
	};

	const destroy = (id) => {
		find(id);
	};

	const create = (data, inputValue) => {
		if (inputValue === '') {
			return alert('Please enter a task.');
		}
		let user = usersControllers.find(storageObject.users.loggedInUser.email);
		let listId = Number(data.id);

		for (let i = 0; i < user.lists.length; i++) {
			if (listId === user.lists[i].id) {
				let newTask = new Task(storageObject.uniqueId, inputValue);
				storageObject.uniqueId++;
				user.lists[i].tasks.push(newTask);
				storageObject.users.loggedInUser = user;
				return storageControllers.save();
			}
		}
	};
	return {
		find,
		create,
		destroy,
	};
})();

export { tasksControllers };
