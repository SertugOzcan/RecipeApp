/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState({
    read: false,
    delete: [],
    add: false,
  });

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: true }));
        const response = await axios
          .get("http://localhost:3001/recipes")
          .then((res) => setRecipes(res.data));
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: false }));
      } catch (error) {
        console.error("There was an error while fetching the data", error);
      }
    };

    getRecipes();
  }, []);

  const deleteRecipe = async (id) => {
    setIsLoading((prevIsLoading) => ({
      ...prevIsLoading,
      delete: [...prevIsLoading.delete, id],
    }));
    const response = await axios.delete(`http://localhost:3001/recipes/${id}`);
    if (response.status === 200) {
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id)
      );
    }
    setIsLoading((prevIsLoading) => ({
      ...prevIsLoading,
      delete: prevIsLoading.delete.filter((deleteID) => deleteID !== id),
    }));
  };

  const addRecipeToList = async ({ title, description, image }) => {
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: true }));
    const response = await axios.post("http://localhost:3001/recipes", {
      title,
      description,
      image,
    });
    if (response.status === 201) {
      setRecipes((prevRecipes) => [...prevRecipes, response.data]);
    } else {
      console.error(
        "There was an error while fetching the data",
        response.status
      );
    }
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: false }));
  };

  return (
    <ApiContext.Provider
      value={{ recipes, isLoading, deleteRecipe, addRecipeToList }}
    >
      {children}
    </ApiContext.Provider>
  );
};
