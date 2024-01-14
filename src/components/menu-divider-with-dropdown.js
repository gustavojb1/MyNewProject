import { Box, Divider, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { CSSTransition } from "react-transition-group";

const MenuDividerWithDropdown = ({ icon, title, active, children }) => {
  const [open, setOpen] = React.useState(active ? true : false);

  return (
    <>
      {title === "Home" ? (
        <>{children}</>
      ) : (
        <>
          <Box
            onClick={() => setOpen(!open)}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 1,
              pl: "16px",
              pr: "16px",
              py: "6px",
              minHeight: "36px",
              // mt: isFirst===false ? "30px" : "0px",
              ...(active && {
                backgroundColor: "rgba(255, 255, 255, 0.04)",
              }),
            }}
          >
            {icon && (
              <Box
                component="span"
                sx={{
                  alignItems: "center",
                  color: "neutral.400",
                  display: "inline-flex",
                  justifyContent: "center",

                  mr: 1.3,
                  ...(active && {
                    color: "primary.main",
                  }),
                }}
              >
                {icon}
              </Box>
            )}
            <Typography
              sx={{
                color: "neutral.400",
                cursor: "default",
                fontFamily: (theme) => theme.typography.fontFamily,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>

            <Divider
              sx={{
                borderColor: "neutral.400",
                ml: "10px",
                flexGrow: 1,
                mr: "10px",
              }}
            />
            <Box
              component="span"
              sx={{
                alignItems: "center",
                color: "neutral.400",
                display: "inline-flex",
                justifyContent: "center",
                ...(active && {
                  color: "primary.main",
                }),
              }}
            >
              <SvgIcon fontSize="small">{open ? <FaCaretUp /> : <FaCaretDown />}</SvgIcon>
            </Box>
          </Box>
          <CSSTransition in={open} timeout={500} classNames="my-node" unmountOnExit>
            <Box overflow="hidden" sx={{}}>
              {children}
            </Box>
          </CSSTransition>
        </>
      )}
    </>
  );
};

export default MenuDividerWithDropdown;
