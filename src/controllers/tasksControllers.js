import { storageControllers } from './storageControllers';
import { usersControllers } from './usersControllers';
import { Task } from '../models/taskModel';

const tasksControllers = (() => {
	let storageObject = storageControllers.load();
	const create = (data, inputValue) => {
		if (inputValue === '') {
			return alert('Please enter a task.');
		}
		let user = usersControllers.find(storageObject.users.loggedInUser.email);
		let listId = Number(data.id);

		for (let i = 0; i < user.lists.length; i++) {
			console.log(`user.lists[i].id: ${user.lists[i].id}`);
			if (listId === user.lists[i].id) {
				let newTask = new Task(storageObject.uniqueId, inputValue);
				storageObject.uniqueId++;

				console.log(newTask);
				console.log(user.lists[i]);
				user.lists[i].tasks.push(newTask);
				storageObject.users.loggedInUser = user;
				return storageControllers.save();
			}
		}
	};
	return {
		create,
	};
})();

export { tasksControllers };
