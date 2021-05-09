import { storageControllers } from './storageControllers';
import { List } from '../models/listModel';

const listsControllers = (() => {
	let storageObject = storageControllers.load();
	const create = (name) => {
		console.log('click');

		let newList = new List(storageObject.uniqueId, name);
	};

	return {
		create,
	};
})();

export { listsControllers };
