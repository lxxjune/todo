import { Link } from "react-router-dom";

export default function NavigationBar(): JSX.Element {
  return (
    <div>
      <Link to="/"> 메인 </Link>
      <Link to="/drawer"> 서랍 </Link>
      <Link to="/profile"> 내정보 </Link>
      <Link to="/trash"> 휴지통 </Link>
    </div>
  );
}
