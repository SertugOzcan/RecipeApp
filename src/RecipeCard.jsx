import { useState } from "react";
import './RecipeCardFlip.css'


const RecipeCard = ({title,description,image,recipeDetail}) => {

  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (<>
  <div className={`recipe-card-container ${isFlipped ? 'flipped' : "" }`} onClick={handleCardFlip}>
    <div className='recipe-card-innercontainer'>
      <div className={`recipe-card-front ${isFlipped ? "hidden" : ""}`}> 
        <img src={image} alt="food-image"/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={`recipe-card-back ${isFlipped ? ""  : "hidden"}`}>
        <h3>{title}</h3>
        <h4>Recipe</h4>
        <p>{recipeDetail}</p>
      </div>
    </div>
  </div>
    </>
  );
};

export default RecipeCard