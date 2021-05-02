import { usersControllers as user } from '../controllers/usersControllers';

const userViews = (() => {
	const content = document.querySelector('#content');

	const renderCreateUserView = () => {
		const renderNameInput = (() => {
			let input = document.createElement('input');
			let lineBreak = document.createElement('br');

			input.type = 'text';
			input.id = 'user-create-name-input';
			input.placeholder = 'Name';
			input.autocomplete = 'off';
			content.appendChild(input);
			content.appendChild(lineBreak);
		})();

		const renderEmailInput = (() => {
			let input = document.createElement('input');
			let lineBreak = document.createElement('br');

			input.type = 'text';
			input.id = 'user-create-email-input';
			input.placeholder = 'Email';
			input.auotcomplete = 'off';
			content.appendChild(input);
			content.appendChild(lineBreak);
		})();

		const renderPasswordInput = (() => {
			let input = document.createElement('input');
			let lineBreak = document.createElement('br');

			input.type = 'password';
			input.id = 'user-create-password-input';
			input.placeholder = 'Password';
			input.autocomplete = 'off';
			content.appendChild(input);
			content.appendChild(lineBreak);
		})();

		// const renderConfirmPasswordInput = (() => {
		// 	let input = document.createElement('input');
		// 	let lineBreak = document.createElement('br');

		// 	input.type = 'password';
		// 	input.id = 'create-user-confirm-password-input';
		// 	input.placeholder = 'Confirm password';
		// 	input.autocomplete = 'off';
		// 	content.appendChild(input);
		// 	content.appendChild(lineBreak);
		// })();

		const renderSubmitButton = (() => {
			let button = document.createElement('button');
			button.type = 'button';
			button.id = 'create-new-user-button';
			button.innerText = 'Submit';
			button.addEventListener('click', (e) => {
				user.create(
					document.querySelector('#user-create-name-input').value,
					document.querySelector('#user-create-email-input').value,
					document.querySelector('#user-create-password-input').value
				);
				document.querySelector('#user-create-name-input').value = '';
				document.querySelector('#user-create-email-input').value = '';
				document.querySelector('#user-create-password-input').value = '';
			});
			content.appendChild(button);
		})();
	};

	return {
		renderCreateUserView,
	};
})();

export { userViews };
