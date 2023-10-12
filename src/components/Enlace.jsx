import { Link } from "react-router-dom";
const Enlace = ({ children, address }) => {
  return (
    <Link
      className="text-2xl block hover:text-blue-300 focus:text-white"
      to={address}
    >
      {children}
    </Link>
  );
};

export default Enlace;
