import Link from "./Link";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default NavBar;
