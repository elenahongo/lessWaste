import React, { Component } from 'react';

//import { withRouter } from "react-router-dom"; 



class Recipes extends Component {

    constructor(props) {
        super(props);    
        this.renderRecipes = this.renderRecipes.bind(this);
    }

      renderRecipes() {
        return this.props.recipes.map(recipe => {
          return (
            <div
               key={recipe.Id}>
              <h3>{recipe.Dish}</h3>
              <p>{recipe.Ingredients}</p>
            </div>
          );
        });
      }
      
    render() {
        return (
            <div>
                <h2>Recipes</h2>
                {this.renderRecipes()}
            </div>
        )
      } 
}

export default Recipes