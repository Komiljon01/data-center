import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MainLayout;
