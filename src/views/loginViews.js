import { userViews } from './userViews';
import { loginControllers as login } from '../controllers/loginControllers';

const loginViews = (() => {
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
			input.placeholder = 'Email';
			input.autocomplete = 'off';
			fieldset.appendChild(input);
			fieldset.appendChild(document.createElement('br'));
		})();

		const renderPasswordInput = (() => {
			let input = document.createElement('input');
			input.type = 'password';
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
				login.login();
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

export { loginViews };
