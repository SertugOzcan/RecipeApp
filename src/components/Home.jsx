/* eslint-disable no-unused-vars */
import React from 'react';
import NewRecipe from './NewRecipe';

const Home = () => {


  return (
    <main className="home">
      <h1>Welcome to the Recipe Sharing Platform</h1>
      <p>Find and share the best recipes from around the world!</p>
      <NewRecipe/>
    </main>
  );
};

export default Home;
