import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[50px] bg-[black]">
        <div className="flex flx-row text-[white] justify-center justify-items-center pt-[10px]">
          <Link to="/home" className="pr-[30px]">
            Home
          </Link>
          <Link to="/typography" className="pr-[30px]">
            Typography
          </Link>
          <Link to="/contact" className="pr-[30px]">
            Contact
          </Link>
          <Link to="profile" className="pr-[30px]">
            My Account
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
