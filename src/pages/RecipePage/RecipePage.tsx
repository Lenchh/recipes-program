import type { JSX } from 'react/jsx-runtime';
import { useParams } from 'react-router';
import recipePageStyle from './recipePage.module.scss';
import { recipes } from '../../data/mock-data';
import { Header } from '../../common/components/Header/Header';
import hourglassIcon from '../../assets/RecipePage/hourglassIcon.svg';
// import clockIcon from '../../assets/RecipePage/clockIcon.svg';
// import pieceIcon from '../../assets/RecipePage/pieceIcon.svg';

export function RecipePage(): JSX.Element {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));
  return (
    <div className={recipePageStyle.recipePage}>
      <Header />
      {recipe ? (
        <div className={recipePageStyle.recipe}>
          <div className={recipePageStyle.info}>
            <p className={recipePageStyle.category}>{recipe.category}</p>
            <div className={recipePageStyle.mainInfo}>
              <p>
                <span>
                  <img src={hourglassIcon} alt="clock icon" />
                  {recipe.cookingTime} хв
                </span>
              </p>
              <p>Порції: {recipe.servings}</p>
            </div>
          </div>
          <div className={recipePageStyle.blockIngredients}>
            <img src={recipe.imgUrl} alt={recipe.title} className={recipePageStyle.imgRecipe} />
            <div className={recipePageStyle.ingredients}>
              <p>ІНГРЕДІЄНТИ:</p>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li>
                    <span>{ingredient.name}</span> - {ingredient.amount}
                    {ingredient.unit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>{':('}</p>
      )}
    </div>
  );
}
