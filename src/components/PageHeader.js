import MainLogo from './MainLogo';
import SearchForm from './SearchForm';
import userAvatar from '../assets/images/user-avatar.jpg'
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

function PageHeader() {
  return (
    <header className="page-header container">
      <div className="page-header__logo">
        <MainLogo />
      </div>

      <SearchForm className="page-header__search" />

      <img className="page-header__user-avatar user-avatar"
        src={userAvatar}
        width={1200}
        height={798}
        alt="Muhur"
      />

      <Link className="page-header__button button" to={AppRoute.UPLOAD}>
        <svg className="button__icon" height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <path d="M7.4,10h1.59v5c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-5h1.59c0.89,0,1.34-1.08,0.71-1.71L12.7,3.7 c-0.39-0.39-1.02-0.39-1.41,0L6.7,8.29C6.07,8.92,6.51,10,7.4,10z M5,19c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1s-0.45-1-1-1H6 C5.45,18,5,18.45,5,19z" />
          </g>
        </svg>
        Upload
      </Link>
    </header>
  );
}

export default PageHeader;
