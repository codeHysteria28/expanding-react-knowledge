import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input 
                        id="search" 
                        value={this.state.term} 
                        name="search" type="text" 
                        onChange={e => this.setState({term: e.target.value}) }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;