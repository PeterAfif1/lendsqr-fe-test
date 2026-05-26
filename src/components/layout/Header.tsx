import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <input
        className="header__search"
        type="text"
        placeholder="Search for anything"
      />
      <div className="header__right">
        <a href="#">Docs</a>
        <img src="/icons/notifications.svg" alt="notifications" />
        <span>Adedeji</span>
      </div>
    </header>
  );
}
