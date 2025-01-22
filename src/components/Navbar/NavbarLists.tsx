import { Box, Typography } from "@mui/material";
import { NavbarListsData } from "../../constants";
import "./NavbarLists.css";
import { Link } from "react-router-dom";
import React from "react";

function NavbarLists({ menu }: { menu: boolean }) {
  return (
    <>
      {NavbarListsData.map((item) => {
        const { id, path, text, icon: Icon, type } = item;

        return (
          <React.Fragment key={id}>
            {type === "link" && (
              <Link
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
          </React.Fragment>
        );
      })}
    </>
  );
}

export default NavbarLists;
