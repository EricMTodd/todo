import { User } from '../models/userModel';
import { storageControllers as storage } from './storageControllers';

const usersControllers = (() => {
	let storageObject = storage.load();
	const create = (name, email, password, confirmPassword) => {
		if (name == '' || email == '' || password == '' || confirmPassword == '') {
			alert('Please fill out all form fields.');
			return;
		}

		if (password !== confirmPassword) {
			alert('Passwords do not match.');
			document.querySelector('#user-create-password-input').value = '';
			document.querySelector('#user-create-confirm-password-input').value = '';
			return;
		}

		let newUser = new User(storageObject.users.count, name, email, password);
		storageObject.users.count++;
		alert(`${newUser.name} has been added to the database!`);
		storageObject.users.usersList.push(newUser);
		storage.save();
		document.querySelector('#user-create-name-input').value = '';
		document.querySelector('#user-create-email-input').value = '';
		document.querySelector('#user-create-password-input').value = '';
		document.querySelector('#user-create-confirm-password-input').value = '';
	};

	return {
		create,
	};
})();

export { usersControllers };
