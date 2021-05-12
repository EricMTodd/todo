import { storageControllers } from '../controllers/storageControllers';
import { usersControllers } from '../controllers/usersControllers';
import { tasksControllers } from '../controllers/tasksControllers';

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
			});
			form.appendChild(button);
		}
	};

	return {
		renderCreateTaskForms,
	};
})();

export { tasksViews };
