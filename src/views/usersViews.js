import { usersControllers } from '../controllers/usersControllers';
import { authViews } from './authViews';

const usersViews = (() => {
	const content = document.querySelector('#content');

	const renderCreateUserForm = () => {
		content.innerHTML = '';
		let form = document.createElement('form');
		let fieldset = document.createElement('fieldset');
		let legend = document.createElement('legend');
		legend.innerText = 'Create User';
		fieldset.appendChild(legend);
		form.appendChild(fieldset);
		content.appendChild(form);

		const renderNameInput = (() => {
			let input = document.createElement('input');
			input.type = 'text';
			input.id = 'user-create-name-input';
			input.placeholder = 'Name';
			input.autocomplete = 'off';
			fieldset.appendChild(input);
			fieldset.appendChild(document.createElement('br'));
		})();

		const renderEmailInput = (() => {
			let input = document.createElement('input');
			input.type = 'text';
			input.id = 'user-create-email-input';
			input.placeholder = 'Email';
			input.autocomplete = 'off';
			fieldset.appendChild(input);
			fieldset.appendChild(document.createElement('br'));
		})();

		const renderPasswordInput = (() => {
			let input = document.createElement('input');
			input.type = 'password';
			input.id = 'user-create-password-input';
			input.placeholder = 'Password';
			input.autocomplete = 'off';
			fieldset.appendChild(input);
			fieldset.appendChild(document.createElement('br'));
		})();

		const renderConfirmPasswordInput = (() => {
			let input = document.createElement('input');
			input.type = 'password';
			input.id = 'user-create-confirm-password-input';
			input.placeholder = 'Confirm password';
			input.autocomplete = 'off';
			fieldset.appendChild(input);
			fieldset.appendChild(document.createElement('br'));
			fieldset.appendChild(document.createElement('br'));
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
			fieldset.appendChild(button);
		})();

		const renderLoginLink = (() => {
			let div = document.createElement('div');
			div.innerText = 'Already have an account? ';
			let link = document.createElement('a');
			link.innerText = 'Login here!';
			link.addEventListener('click', (e) => {
				authViews.renderLoginForm();
			});
			div.appendChild(link);
			content.appendChild(div);
		})();
	};

	return {
		renderCreateUserForm,
	};
})();

export { usersViews };
