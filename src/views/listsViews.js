import { listsControllers } from '../controllers/listsControllers';

const listsViews = (() => {
	const main = document.querySelector('main');

	const renderCreateListForm = () => {
		let listCreateContainer = document.querySelector('.list-create-container');
		listCreateContainer.innerHTML = '';
		let form = document.createElement('form');
		let input = document.createElement('input');
		input.placeholder = 'Enter list name';
		input.autocomplete = 'off';
		form.appendChild(input);
		listCreateContainer.appendChild(form);
	};

	const renderCreateListContainer = () => {
		let div = document.createElement('div');
		div.className = 'container list-create-container';
		main.appendChild(div);

		const renderCreateListButton = (() => {
			let button = document.createElement('button');
			button.innerText = 'Create List';
			button.addEventListener('click', (e) => {
				renderCreateListForm();
			});
			div.appendChild(button);
		})();
	};

	return {
		renderCreateListContainer,
	};
})();

export { listsViews };
