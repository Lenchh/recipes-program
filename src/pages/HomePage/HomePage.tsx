import { useState, type ChangeEvent, type JSX } from 'react';
import HomePageStyle from './HomePage.module.scss';
import cookieIcon from '../../assets/HomePage/foodBankIcon.svg';
import accountIcon from '../../assets/HomePage/accountIcon.svg';
import searchIcon from '../../assets/HomePage/searchIcon.svg';

export function HomePage(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (/^[а-яА-ЯіІїЇєЄґҐ `-]*$/.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  return (
    <div className={HomePageStyle.homePage}>
      <div className={HomePageStyle.header}>
        <h1>
          <span>
            <img src={cookieIcon} alt="cookie icon" />
            КНИГА
          </span>
          <br />
          СМАКІВ
        </h1>
        <div className={HomePageStyle.headerActions}>
          <img src={accountIcon} alt="account icon" />
          <button>+ ДОДАТИ РЕЦЕПТ</button>
        </div>
      </div>
      <div className={HomePageStyle.searchRecipe}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Знайти рецепт(наприклад яблучний пиріг)"
        />
        <button>
          <img src={searchIcon} alt="search icon" />
        </button>
      </div>
    </div>
  );
}
