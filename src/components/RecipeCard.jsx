/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
// import { useState } from "react";

const RecipeCard = ({ id, title, description, image }) => {
  // const [isDeletedLoading, setIsDeletedLoading] = useState(false);
  const {deleteRecipe, isLoading} = useContext(ApiContext)
  return (
    <div className="recipe-card">
      <div className="recipe-info">
        <img src={image} alt="food-img" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="button">
        <button
          className="btn-delete"
          // onClick={async () => {
          //   setIsDeletedLoading(true);
          //   await deleteRecipe(id);
          //   setIsDeletedLoading(false);
          // }}
          onClick={() => deleteRecipe(id)}
        >
          {/* {isDeletedLoading ? "Loading..." : "Sil"} */}
          {isLoading.delete.some((deletedId) => deletedId === id) ? "Loading..." : "Sil"}
        </button>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default RecipeCard;
