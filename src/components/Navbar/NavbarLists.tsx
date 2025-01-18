import { Box, Typography } from "@mui/material";
import { NavbarListsData } from "../../constants";
import "./NavbarLists.css";
import { Link } from "react-router-dom";

function NavbarLists({ menu }: { menu: boolean }) {
  return (
    <>
      {NavbarListsData.map((item) => {
        const { id, path, text, icon: Icon, type } = item;

        return (
          <>
            {type === "link" && (
              <Link
                key={id}
                to={path as string}
                className={`navbar__list ${menu && "navbar__menu-item"}`}
              >
                <Box component="span">
                  <Icon />
                </Box>
                <Typography variant="body1" className="navbar__list-text">
                  {text}
                </Typography>
              </Link>
            )}

            {type === "modal" && (
              <Box
                component="div"
                key={id}
                className={`navbar__list ${menu && "navbar__menu-item"}`}
              >
                <Box component="span">
                  <Icon />
                </Box>
                <Typography variant="body1" className="navbar__list-text">
                  {text}
                </Typography>
              </Box>
            )}
          </>
        );
      })}
    </>
  );
}

export default NavbarLists;
