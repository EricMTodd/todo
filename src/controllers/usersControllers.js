import { User } from '../models/userModel';
import { storageControllers as storage } from './storageControllers';

const usersControllers = (() => {
	let storageObject = storage.load();
	const create = (name, email, password, confirmPassword) => {
		if (name == '' || email == '' || password == '' || confirmPassword == '') {
			return alert('Please fill out all form fields.');
		}
		for (let i = 0; i < storageObject.users.usersList.length; i++) {
			if (email === storageObject.users.usersList[i].email) {
				document.querySelector('#user-create-email-input').value = '';
				return alert(`A user with that email already exists.`);
			}
		}
		if (password !== confirmPassword) {
			document.querySelector('#user-create-password-input').value = '';
			document.querySelector('#user-create-confirm-password-input').value = '';
			return alert('Passwords do not match.');
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
