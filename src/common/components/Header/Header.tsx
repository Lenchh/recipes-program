import type { JSX } from 'react/jsx-runtime';
import headerStyle from './header.module.scss';
import foodBankIcon from '../../../assets/HomePage/foodBankIcon.svg';
import accountIcon from '../../../assets/HomePage/accountIcon.svg';
import { Link } from 'react-router';

export function Header(): JSX.Element {
  return (
    <div className={headerStyle.header}>
      <Link to="/">
        <h1>
          <span>
            <img src={foodBankIcon} alt="food bank icon" />
            КНИГА
          </span>
          <br />
          СМАКІВ
        </h1>
      </Link>
      <div className={headerStyle.headerActions}>
        <img src={accountIcon} alt="account icon" />
        <button>+ ДОДАТИ РЕЦЕПТ</button>
      </div>
    </div>
  );
}
