import { storageControllers } from '../controllers/storageControllers';
import { listsControllers } from '../controllers/listsControllers';
import { usersControllers } from '../controllers/usersControllers';

const listsViews = (() => {
	let storageObject = storageControllers.load();
	const main = document.querySelector('main');

	const renderLists = () => {
		main.innerHTML = '';
		let user = usersControllers.find(storageObject.users.loggedInUser.email);
		for (let i = 0; i < user.lists.length; i++) {
			let div = document.createElement('div');
			div.className = 'container';
			div.id = `list-${user.lists[i].id}`;
			div.innerText = `${user.lists[i].name}`;
			main.appendChild(div);
		}
		renderCreateListContainer();
	};

	const renderCreateListContainer = () => {
		let div = document.createElement('div');
		div.className = 'container list-create-container';
		main.appendChild(div);

		const renderNewListButton = (() => {
			let button = document.createElement('button');
			button.innerText = 'Add new list';
			button.type = 'button';
			button.addEventListener('click', (e) => {
				renderCreateListForm();
			});
			div.appendChild(button);
		})();
	};

	const renderCreateListForm = () => {
		let listCreateContainer = document.querySelector('.list-create-container');
		listCreateContainer.innerHTML = '';
		let form = document.createElement('form');

		const renderCreateListNameInput = (() => {
			let input = document.createElement('input');
			input.id = 'list-name-input';
			input.placeholder = 'Enter list name';
			input.autocomplete = 'off';
			form.appendChild(input);
		})();

		const renderCreateListButton = (() => {
			let button = document.createElement('button');
			button.id = 'create-list-button';
			button.innerText = 'Create list';
			button.type = 'button';
			button.addEventListener('click', (e) => {
				listsControllers.create(
					document.querySelector('#list-name-input').value.trim()
				),
					renderLists();
			});
			form.appendChild(button);
		})();

		listCreateContainer.appendChild(form);
	};

	return {
		renderCreateListContainer,
		renderLists,
	};
})();

export { listsViews };
