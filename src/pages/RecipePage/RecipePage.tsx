import type { JSX } from 'react/jsx-runtime';
import { useParams } from 'react-router';
import recipePageStyle from './recipePage.module.scss';
import { recipes } from '../../data/mock-data';
import { Header } from '../../common/components/Header/Header';

export function RecipePage(): JSX.Element {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === Number(id));
  return (
    <div className={recipePageStyle.recipePage}>
      <Header />
      {recipe ? <p>{recipe.title}</p> : <p>{':('}</p>}
    </div>
  );
}
