import type { JSX } from 'react/jsx-runtime';
import type { Recipe } from '../../../data/mock-data';
import recipeStyle from './recipeBlock.module.scss';
import editIcon from '../../../assets/HomePage/editIcon.svg';
import deleteIcon from '../../../assets/HomePage/deleteIcon.svg';
import eyeIcon from '../../../assets/HomePage/eyeIcon.svg';
import { Link } from 'react-router';

interface props {
  recipe: Recipe;
}
export function RecipeBlock({ recipe }: props): JSX.Element {
  return (
    <div className={recipeStyle.container}>
      <img src={recipe.imgUrl} alt="recipe image" />
      <div className={recipeStyle.info}>
        <div className={recipeStyle.text}>
          <p className={recipeStyle.title}>{recipe.title}</p>
          <p className={recipeStyle.category}>{recipe.category}</p>
        </div>
        <div className={recipeStyle.mainActions}>
          <Link to={`/recipe/${recipe.id}`}>
            <img src={eyeIcon} alt="eye icon" />
          </Link>
          <button>
            <img src={editIcon} alt="edit icon" />
          </button>
          <button>
            <img src={deleteIcon} alt="delete icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
