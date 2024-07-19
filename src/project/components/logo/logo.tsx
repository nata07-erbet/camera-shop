function Logo() {
  return (
    <a
      className="header__logo"
      href="index.html"
      aria-label="Переход на главную"
    >
      <svg width={100} height={36} aria-hidden="true">
        <use xlinkHref="#icon-logo" />
      </svg>
    </a>
  );
}

export { Logo };
