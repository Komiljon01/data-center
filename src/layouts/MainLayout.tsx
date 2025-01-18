import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
    </>
  );
}

export default MainLayout;
