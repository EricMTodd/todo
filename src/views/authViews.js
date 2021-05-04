import { userViews } from './userViews';
import { authControllers } from '../controllers/authControllers';
import { usersControllers } from '../controllers/usersControllers';

const authViews = (() => {
	const content = document.querySelector('#content');

	const renderLoginForm = () => {
		content.innerHTML = '';
		let form = document.createElement('form');
		let fieldset = document.createElement('fieldset');
		let legend = document.createElement('legend');
		legend.innerText = 'Login';
		fieldset.appendChild(legend);
		form.appendChild(fieldset);
		content.appendChild(form);

		const renderEmailInput = (() => {
			let input = document.createElement('input');
			input.type = 'text';
			input.id = 'login-email-input';
			input.placeholder = 'Email';
			input.autocomplete = 'off';
			fieldset.appendChild(input);
			fieldset.appendChild(document.createElement('br'));
		})();

		const renderPasswordInput = (() => {
			let input = document.createElement('input');
			input.type = 'password';
			input.id = 'login-password-input';
			input.placeholder = 'Password';
			input.autocomplete = 'off';
			fieldset.appendChild(input);
			fieldset.appendChild(document.createElement('br'));
			fieldset.appendChild(document.createElement('br'));
		})();

		const renderLoginButton = (() => {
			let button = document.createElement('button');
			button.type = 'button';
			button.innerText = 'Login';
			button.addEventListener('click', (e) => {
				authControllers.login(
					document.querySelector('#login-email-input').value,
					document.querySelector('#login-password-input').value
				);
			});
			fieldset.appendChild(button);
		})();

		const renderCreateUserFormLink = (() => {
			let div = document.createElement('div');
			div.innerText = `Need an account? `;
			let link = document.createElement('a');
			link.innerText = 'Create one here!';
			link.addEventListener('click', (e) => {
				userViews.renderCreateUserForm();
			});
			content.appendChild(div);
			div.appendChild(link);
		})();
	};

	return {
		renderLoginForm,
	};
})();

export { authViews };
