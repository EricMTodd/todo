import { storageControllers } from './storageControllers';
import { indexViews } from '../views/indexViews';
import { usersControllers } from './usersControllers';

const authControllers = (() => {
	let storageObject = storageControllers.load();
	const alphanumerics =
		' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}|,<.>/?`~';

	const encrypt = (password) => {
		let salt = '';
		let saltedEncryption = '';
		let saltLettersIndexes = [];
		let shiftLettersIndexes = [];
		let encryptedPassword = '';

		let saltLength = Math.floor(Math.random() * 12) + 9;
		for (let i = 0; i < saltLength; i++) {
			saltLettersIndexes.push(
				Math.floor(Math.random() * alphanumerics.length) + 1
			);
		}

		for (let i = 0; i < saltLettersIndexes.length; i++) {
			for (let j = 0; j < alphanumerics.length; j++) {
				if (saltLettersIndexes[i] === j) {
					salt += alphanumerics[j];
				}
			}
		}

		let passwordLettersIndexes = [];
		for (let i = 0; i < password.length; i++) {
			for (let j = 0; j < alphanumerics.length; j++) {
				if (password[i] == alphanumerics[j]) {
					passwordLettersIndexes.push(j);
				}
			}
		}

		let i = 0;
		let j = 0;
		while (i < password.length) {
			let shiftedIndex = passwordLettersIndexes[i] + saltLettersIndexes[j];
			if (shiftedIndex > alphanumerics.length) {
				shiftedIndex -= alphanumerics.length;
			}

			shiftLettersIndexes.push(shiftedIndex);

			if (i < password.length - 1) {
				i++;
			} else {
				i++;
			}
			if (j < salt.length - 1) {
				j++;
			} else {
				j = 0;
			}
		}

		for (let i = 0; i < password.length; i++) {
			for (let j = 0; j < alphanumerics.length; j++) {
				if (shiftLettersIndexes[i] === j) {
					encryptedPassword += alphanumerics[j];
				}
			}
		}

		saltedEncryption = encryptedPassword + salt;
		return saltedEncryption;
	};

	const decrypt = (encryptedString, password) => {
		let encryptedPasswordLettersIndexes = [];
		let saltLettersIndexes = [];
		let shiftLettersIndexes = [];
		let salt = '';
		let encryptedPassword = '';
		let decryptedPassword = '';

		for (let i = 0; i < password.length; i++) {
			encryptedPassword += encryptedString[i];
		}

		for (let i = password.length; i < encryptedString.length; i++) {
			salt += encryptedString[i];
		}

		for (let i = 0; i < encryptedPassword.length; i++) {
			for (let j = 0; j < alphanumerics.length; j++) {
				if (encryptedPassword[i] === alphanumerics[j]) {
					encryptedPasswordLettersIndexes.push(j);
				}
			}
		}

		for (let i = 0; i < salt.length; i++) {
			for (let j = 0; j < alphanumerics.length; j++) {
				if (salt[i] === alphanumerics[j]) {
					saltLettersIndexes.push(j);
				}
			}
		}

		let i = 0;
		let j = 0;

		while (i < password.length) {
			let shiftedIndex =
				encryptedPasswordLettersIndexes[i] - saltLettersIndexes[j];

			if (shiftedIndex < 0) {
				shiftedIndex += alphanumerics.length;
			} else {
			}

			shiftLettersIndexes.push(shiftedIndex);

			if (i < password.length - 1) {
				i++;
			} else {
				i++;
			}
			if (j < salt.length - 1) {
				j++;
			} else {
				j = 0;
			}
		}

		for (let i = 0; i < shiftLettersIndexes.length; i++) {
			for (let j = 0; j < alphanumerics.length; j++) {
				if (shiftLettersIndexes[i] === j) {
					decryptedPassword += alphanumerics[j];
				}
			}
		}
		return decryptedPassword;
	};

	const login = (email, password) => {
		let user = usersControllers.find(email);
		let encryptedString = user.password;
		let decryptedPassword = decrypt(encryptedString, password);
		if (password === decryptedPassword) {
			storageObject.users.loggedInUser = user;
			storageControllers.save();
			return indexViews.renderUserIndex();
		}
		return console.log(`Failed to log ${user.name} in.`);
	};

	const logout = () => {
		storageObject.users.loggedInUser = null;
		storageControllers.save();
		window.location.reload();
	};

	return {
		encrypt,
		// decrypt,
		login,
		logout,
	};
})();

export { authControllers };
