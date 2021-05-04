import { User } from '../models/userModel';
import { storageControllers } from './storageControllers';
import { authControllers } from './authControllers';
import { indexViews } from '../views/indexViews';

const usersControllers = (() => {
	let storageObject = storageControllers.load();

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

		let encryptedString = authControllers.encrypt(password);

		let newUser = new User(
			storageObject.users.count,
			name,
			email,
			encryptedString
		);

		storageObject.users.count++;
		alert(`${newUser.name} has been added to the database!`);
		storageObject.users.usersList.push(newUser);
		storageObject.users.loggedInUser = newUser;
		storageControllers.save();
		// document.querySelector('#user-create-name-input').value = '';
		// document.querySelector('#user-create-email-input').value = '';
		// document.querySelector('#user-create-password-input').value = '';
		// document.querySelector('#user-create-confirm-password-input').value = '';
		return indexViews.renderUserIndex();
	};

	const find = (email) => {
		let usersList = storageObject.users.usersList;
		for (let i = 0; i < usersList.length; i++) {
			if (email === usersList[i].email) {
				return usersList[i];
			}
		}
		return console.log('No match found.');
	};

	return {
		create,
		find,
	};
})();

export { usersControllers };
