import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLatestRecipes } from './redux/recipes/recipes.actions';

import './App.css';

import Container from 'react-bootstrap/Container';

const App = ({ getLatestRecipes, recipes: { latestRecipes } }) => {
  useEffect(() => {
    getLatestRecipes();
    // eslint-disable-next-line
  }, []);

  latestRecipes && console.log(latestRecipes);

  return (
    <div className="App">
      <Container fluid="xl" className="border">
        <h1>World Recipes App</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid, corrupti quaerat rerum modi, culpa unde amet aspernatur vel quam corporis. Accusantium culpa magni ipsa officia, tempora explicabo earum voluptatem fugit numquam dolore est iure inventore aperiam minima repellat consequatur sapiente ratione consectetur libero, quisquam voluptas tempore voluptates. Exercitationem quibusdam enim illo, labore et cum? Dolorem commodi tempora fugit molestiae obcaecati. Necessitatibus enim aliquam nostrum eius! Cum nesciunt repudiandae exercitationem distinctio dolore repellendus quod minima aspernatur voluptatem beatae, nihil doloremque eum, animi, porro molestiae iusto molestias ratione error eaque in neque ab. Eum necessitatibus nobis quidem temporibus quia veritatis ex.</p>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps, { getLatestRecipes })(App);
