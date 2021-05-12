import { storageControllers } from '../controllers/storageControllers';
import { usersControllers } from '../controllers/usersControllers';

const tasksViews = (() => {
	let storageObject = storageControllers.load();
	let user = usersControllers.find(storageObject.users.loggedInUser.email);

	const renderCreateTaskForms = () => {
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
				console.log('click');
			});
			form.appendChild(button);
		}
	};

	return {
		renderCreateTaskForms,
	};
})();

export { tasksViews };
