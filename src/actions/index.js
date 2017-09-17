export function selectBook(book){
	//select book is an action creator , it need to return an object
	//an object with a type property
	return {
		type:'BOOK_SELECTED',
		payload:book
	};
}