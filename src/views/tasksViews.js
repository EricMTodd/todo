import { storageControllers } from '../controllers/storageControllers';
import { usersControllers } from '../controllers/usersControllers';
import { tasksControllers } from '../controllers/tasksControllers';
import { listsViews } from '../views/listsViews';

const tasksViews = (() => {
	let storageObject = storageControllers.load();

	const renderCreateTaskForms = () => {
		let user = usersControllers.find(storageObject.users.loggedInUser.email);
		for (let i = 0; i < user.lists.length; i++) {
			let list = document.querySelector(`#list-${user.lists[i].id}`);
			let form = document.createElement('form');
			list.appendChild(form);

			let input = document.createElement('input');
			input.placeholder = 'New task';
			input.autocomplete = 'off';
			form.appendChild(input);

			let button = document.createElement('button');
			button.type = 'button';
			button.innerText = 'Save';
			button.addEventListener('click', (e) => {
				tasksControllers.create(list.dataset, input.value.trim());
				input.value = '';
				listsViews.renderLists();
			});
			form.appendChild(button);
		}
	};

	const renderTasks = () => {
		let user = usersControllers.find(storageObject.users.loggedInUser.email);
		for (let i = 0; i < user.lists.length; i++) {
			let listContainer = document.querySelector(`#list-${user.lists[i].id}`);
			console.log(user.lists[i].tasks);
			for (let j = 0; j < user.lists[i].tasks.length; j++) {
				console.log(user.lists[i].tasks[j]);
				let div = document.createElement('div');
				div.className = 'task-container';
				div.innerText = `${user.lists[i].tasks[j].description}`;
				listContainer.appendChild(div);
			}
		}
	};

	return {
		renderCreateTaskForms,
		renderTasks,
	};
})();

export { tasksViews };
