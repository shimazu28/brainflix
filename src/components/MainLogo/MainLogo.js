import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import mainLogo from '../../assets/images/main-logo.svg';

function MainLogo() {
  return (
    <Link className="main-logo" to={AppRoute.HOME}>
      <img className="main-logo__image"
        src={mainLogo}
        alt="Go to the home page"
        width={113}
        height={23}
      />
    </Link>
  );
}

export default MainLogo;
