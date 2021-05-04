import { usersControllers } from './usersControllers';
import { storageControllers } from './storageControllers';

const authControllers = (() => {
	const login = (email, password) => {
		let user = usersControllers.find(email);
		const authenticatePassword = (() => {
			if (password === user.password) {
				return console.log(`${user.name} successfully logged in!`);
			}
			return console.log(`Failed to login ${user.name}, please try again.`);
		})();
	};

	return {
		login,
	};
})();

export { authControllers };
