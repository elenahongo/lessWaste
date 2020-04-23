import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from './components/Recipes/recipes'
import SearchBar from './components/SearchBar/SearchBar'
import Filter from './utils/Filter';

const baseUrl = 'http://localhost:4001/api';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      menuName: '',
      menuRecipes: []
    }
    this.search = this.search.bind(this);
  }

  getRecipes = () => {
    const url = `${baseUrl}/recipes`;
    return fetch(url).then(response => {
      if (!response.ok) {
        return new Promise(resolve => resolve([]));
      }
      return response.json().then(jsonResponse => {
        return jsonResponse.recipes;
      });
    });
  };

  componentDidMount() {
    this.getRecipes().then(recipes => {
      if (recipes.length) {
          console.log(recipes)
        this.setState({recipes: recipes});
      }
    });
  }

  search(term){
    Filter.search(term).then(recipes => this.setState({recipes: recipes}));
   }

   render(){
  return (
    <div className="App">
      <header>
        <SearchBar onSearch={this.search}/>
      </header>
      <Recipes recipes={this.state.recipes}/>
    </div>
  );
}
}

export default App;
