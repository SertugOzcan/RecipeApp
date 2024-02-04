/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { ApiContext } from "../context/ApiContext";

const RecipeList = () => {
  const { recipes, isLoading } = useContext(ApiContext);
  return (
    <div className="recipe-list">
      {isLoading.read && <p>Loading...</p>}
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
