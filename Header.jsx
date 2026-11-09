import headerImage from "./assets/headerbg.png";

function Header() {
  return (
    <div className="header">
      <img
        className="header-image"
        src={headerImage}
        alt="Indo Danish Tool Room, Jamshedpur"
      />
    </div>
  );
}

export default Header;
