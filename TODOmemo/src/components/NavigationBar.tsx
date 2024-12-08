import { Link } from "react-router-dom";

export default function NavigationBar(): JSX.Element {
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/write">Write</Link>
      <Link to="/profile">MyProfile</Link>
      <Link to="/detail">DETAIL</Link>
    </div>
  );
}
