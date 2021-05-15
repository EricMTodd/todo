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
			for (let j = 0; j < user.lists[i].tasks.length; j++) {
				let div = document.createElement('div');
				div.id = `task-${user.lists[i].tasks[j].id}`;
				div.dataset.id = user.lists[i].tasks[j].id;
				div.className = 'task-container';
				div.innerText = user.lists[i].tasks[j].description;

				let button = document.createElement('button');
				button.type = 'button';
				button.className = 'task-destroy-button';
				button.innerText = 'x';
				button.addEventListener('click', (e) => {
					tasksControllers.destroy(user.lists[i].tasks[j].id);
				});
				div.appendChild(button);
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
