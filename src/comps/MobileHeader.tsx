import { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="MobileHeader">
      <h1>The Planets</h1>
      <img
        onClick={() => setToggle(!toggle)}
        src="/assets/icon-hamburger.svg"
        alt="menu button"
      />
      <nav
        style={{
          display: `${toggle ? "flex" : "none"}`,
          flexDirection: "column",
          position: "absolute",
          top: "68px",
          left: "0",
          background: "#070724",
          height: "calc(100vh - 68px)",
          width: "100vw",
          padding: "0 24px",
          paddingTop: "20px",
        }}
      >
        <NavLink color="#DEF4FC" planetName="Mercury" />
        <NavLink color="#F7CC7F" planetName="Venus" />
        <NavLink color="#545BFE" planetName="Earth" />
        <NavLink color="#FF6A45" planetName="Mars" />
        <NavLink color="#ECAD7A" planetName="Jupiter" />
        <NavLink color="#FCCB6B" planetName="Saturn" />
        <NavLink color="#65F0D5" planetName="Uranus" />
        <NavLink color="#497EFA" planetName="Neptune" />
      </nav>
    </header>
  );
};
export default MobileNav;

interface INavLink {
  color: string;
  planetName: string;
}
const NavLink: FC<INavLink> = ({ color, planetName }) => (
  <Link to={`planets/${planetName}`}>
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column",
        alignItems: "center",
        grid: "auto / 40px 1fr 5px",
        height: "80px",
        borderBottom: "rgba(255,255,255, .1) solid 1px",
      }}
    >
      <div
        style={{
          backgroundColor: `${color}`,
          width: "20px",
          height: "20px",
          borderRadius: "100%",
        }}
      ></div>
      <h3>{planetName.toUpperCase()}</h3>
      <img src="/assets/icon-chevron.svg" alt="chevron" />
    </div>
  </Link>
);
