import { listsControllers } from '../controllers/listsControllers';

const listsViews = (() => {
	const main = document.querySelector('main');

	const renderCreateListContainer = () => {
		let div = document.createElement('div');
		div.className = 'container';
		main.appendChild(div);

		const renderCreateListButton = (() => {
			let button = document.createElement('button');
			button.innerText = 'Create List';
			button.addEventListener('click', (e) => {
				listsControllers.create();
			});
			div.appendChild(button);
		})();
	};

	return {
		renderCreateListContainer,
	};
})();

export { listsViews };
