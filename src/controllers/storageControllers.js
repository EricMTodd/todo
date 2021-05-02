const storageControllers = (() => {
	let storageObject;
	const initStorage = (() => {
		if (!localStorage.todo) {
			let storageString = JSON.stringify({
				users: { count: 0, loggedInUser: null, usersList: [] },
			});
			localStorage.setItem('todo', storageString);
		}
		storageObject = JSON.parse(localStorage.todo);
	})();

	const load = () => {
		return storageObject;
	};

	const save = () => {
		let storageString = JSON.stringify(storageObject);
		localStorage.setItem('todo', storageString);
	};

	return {
		load,
		save,
	};
})();

export { storageControllers };
