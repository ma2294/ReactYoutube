import React, { Component } from 'react'; //pull Component as well

class SearchBar extends Component { //same as using: extends React.Component
    constructor(props) {
        super(props);

        this.state = { term: '' }; //this.state only in constructor
    }
    render() {
        return (
            <div className='search-bar'>
                <input value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;