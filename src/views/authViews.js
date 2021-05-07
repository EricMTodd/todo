import { authControllers } from '../controllers/authControllers';

const authViews = (() => {
	const main = document.querySelector('main');

	const renderLoginForm = () => {
		main.innerHTML = '';
		let form = document.createElement('form');
		form.className = 'container';
		let h2 = document.createElement('h2');
		h2.innerText = 'Login';
		form.appendChild(h2);
		main.appendChild(form);

		const renderEmailInput = (() => {
			let input = document.createElement('input');
			input.type = 'text';
			input.id = 'login-email-input';
			input.placeholder = 'Email';
			input.autocomplete = 'off';
			form.appendChild(input);
			form.appendChild(document.createElement('br'));
		})();

		const renderPasswordInput = (() => {
			let input = document.createElement('input');
			input.type = 'password';
			input.id = 'login-password-input';
			input.placeholder = 'Password';
			input.autocomplete = 'off';
			form.appendChild(input);
			form.appendChild(document.createElement('br'));
		})();

		const renderLoginButton = (() => {
			let button = document.createElement('button');
			button.type = 'button';
			button.innerText = 'Login';
			button.addEventListener('click', (e) => {
				authControllers.login(
					document.querySelector('#login-email-input').value.trim(),
					document.querySelector('#login-password-input').value.trim()
				);
			});
			form.appendChild(button);
		})();
	};

	return {
		renderLoginForm,
	};
})();

export { authViews };
