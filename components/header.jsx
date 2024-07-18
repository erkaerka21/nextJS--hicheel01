const Header = () => {
  return (
    <header
      style={{
        color: "pink",
        display: "flex",
        height: "80px",
        backgroundColor: "gray",
      }}
    >
      <img src="./LEGO.svg.png" alt="logo" />
      <div>
        <ul className="menu">
          <li>MENU</li>
          <li>Uilchilgee</li>
          <li>TUHAI</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
