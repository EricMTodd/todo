import { usersControllers } from '../controllers/usersControllers';

const usersViews = (() => {
	const main = document.querySelector('main');

	const renderCreateUserForm = () => {
		main.innerHTML = '';
		let form = document.createElement('form');
		form.className = 'container';
		let h1 = document.createElement('h1');
		h1.innerText = 'Signup';
		form.appendChild(h1);
		main.appendChild(form);

		const renderNameInput = (() => {
			let input = document.createElement('input');
			input.type = 'text';
			input.id = 'user-create-name-input';
			input.placeholder = 'Name';
			input.autocomplete = 'off';
			form.appendChild(input);
			form.appendChild(document.createElement('br'));
		})();

		const renderEmailInput = (() => {
			let input = document.createElement('input');
			input.type = 'text';
			input.id = 'user-create-email-input';
			input.placeholder = 'Email';
			input.autocomplete = 'off';
			form.appendChild(input);
			form.appendChild(document.createElement('br'));
		})();

		const renderPasswordInput = (() => {
			let input = document.createElement('input');
			input.type = 'password';
			input.id = 'user-create-password-input';
			input.placeholder = 'Password';
			input.autocomplete = 'off';
			form.appendChild(input);
			form.appendChild(document.createElement('br'));
		})();

		const renderConfirmPasswordInput = (() => {
			let input = document.createElement('input');
			input.type = 'password';
			input.id = 'user-create-confirm-password-input';
			input.placeholder = 'Confirm password';
			input.autocomplete = 'off';
			form.appendChild(input);
			form.appendChild(document.createElement('br'));
		})();

		const renderSubmitButton = (() => {
			let button = document.createElement('button');
			button.type = 'button';
			button.id = 'create-new-user-button';
			button.innerText = 'Submit';
			button.addEventListener('click', (e) => {
				usersControllers.create(
					document.querySelector('#user-create-name-input').value.trim(),
					document.querySelector('#user-create-email-input').value.trim(),
					document.querySelector('#user-create-password-input').value.trim(),
					document
						.querySelector('#user-create-confirm-password-input')
						.value.trim()
				);
			});
			form.appendChild(button);
		})();
	};

	return {
		renderCreateUserForm,
	};
})();

export { usersViews };
