import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    { id: 0, name: "Home", to: "/" },
    { id: 1, name: "Products", to: "/products" },
    { id: 2, name: "Login", to: "/login" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm px-[3em] flex justify-between">
      <div className="flex">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="">
        <ul className="flex gap-[2em] px-1">
          {links.map(({ id, name, to }) => (
            <li>
              <Link to={to}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
