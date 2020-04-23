import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ' '};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

    search() {
        this.props.onSearch(this.state.term)
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    render(){
      return (
        <div className='SearchBar'>
          <input placeholder='Filter by ingredient'
          onChange={this.handleTermChange}>
          </input>
          <a onClick={this.search}>FILTER</a>
        </div>
      )
    }

}

export default SearchBar;