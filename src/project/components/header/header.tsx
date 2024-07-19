import { Logo } from '../logo/logo';
import { NavMap } from '../../../project/const/const';

function Header() {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            {Object.values(NavMap)
              .map((item) => (
                <li className="main-nav__item" key={item}>
                  <a className="main-nav__link" href="catalog.html">
                    {item}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <div className="form-search">
          <form>
            <label>
              <svg
                className="form-search__icon"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-lens" />
              </svg>
              <input
                className="form-search__input"
                type="text"
                autoComplete="off"
                placeholder="Поиск по сайту"
              />
            </label>
            <ul className="form-search__select-list">
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 8i
              </li>
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 7i
              </li>
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 6i
              </li>
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 5i
              </li>
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 4i
              </li>
            </ul>
          </form>
          <button className="form-search__reset" type="reset">
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
            <span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
        <a className="header__basket-link" href="#">
          <svg width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-basket" />
          </svg>
        </a>
      </div>
    </header>
  );
}

export { Header };
