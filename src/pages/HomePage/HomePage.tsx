import HomePageStyle from './HomePage.module.scss';
import cookieIcon from '../../assets/HomePage/foodBankIcon.svg';
import accountIcon from '../../assets/HomePage/accountIcon.svg';

export function HomePage() {
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
    </div>
  );
}
