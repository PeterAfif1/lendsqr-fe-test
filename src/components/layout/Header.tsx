import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__search-wrapper">
        <input
          className="header__search"
          type="text"
          placeholder="Search for anything"
        />
        <button className="header__search-btn">
          <img src="/icons/search.svg" alt="search" />
        </button>
      </div>
      <div className="header__right">
        <a
          className="header__docs"
          href="#"
          style={{ textDecoration: "underline" }}
        >
          Docs
        </a>
        <img
          src="/icons/notifications.svg"
          alt="notifications"
          className="header__bell"
        />
        <div className="header__user">
          <img src="/avatar.png" alt="Adedeji" className="header__avatar" />
          <span className="header__username">Adedeji</span>
          <img src="/icons/dropdown.svg" alt="" />
        </div>
      </div>
    </header>
  );
}
