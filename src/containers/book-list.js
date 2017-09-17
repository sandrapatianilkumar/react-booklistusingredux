import React,{Component} from 'react';
import {connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
	renderList(){
		return this.props.books.map((book)=>{
			return (
					<li key={book.title} onClick={()=>this.props.selectBook(book)} className="list-group-item">
					{book.title}
					</li>	
				);
		});
	}
	render(){
		return (
				<ul className="List-group col-sm-4">
				{this.renderList()}
				</ul>

			)
	}
}

function mapStateToProps(state) {
	//whatever is returned will show up as props
	//inside of BookList
	return {
		books:state.books
	};
}

//anything returned from this will end up as props
//on the BookList container
function mapDispathToProps(dispatch){
	//whenever selectBook is called, the result should be passed
	//to all of our reducers
	return bindActionCreators({selectBook:selectBook},dispatch);
}

//promote BookList from a component to a container
//about this new dispatch method, selectBook.make it available
//as a props
export default connect(mapStateToProps,mapDispathToProps)(BookList);


