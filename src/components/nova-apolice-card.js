import PropTypes from "prop-types";
import { Box, ButtonBase, Typography } from "@mui/material";
import React from "react";

export const NovaApoliceSelectCard = ({ title, logo, background, selected, onClick }) => {

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: selected ? "rgba(0, 0, 0, 0.16)" : "transparent",
    pointerEvents: "none",
    transition: "background-color 0.3s", // Adicionando uma transição suave para a cor de fundo
  };
  return (
    <ButtonBase
      onClick={onClick}
      sx={(theme) => ({
        overflow: "hidden",
        cursor: "pointer",
        width: "100%",
        height: "90px",
        display: "flex",
        borderRadius: "20px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.myColors[background],
        // border: selected ? `7px solid ${theme.palette.primary.main}` : "transparent",
        boxSizing: "border-box",
        
        [theme.breakpoints.up("sm")]: {
          height: "70px",
        },
        [theme.breakpoints.up("xs")]: {
          height: "70px",
        },
        [theme.breakpoints.up("md")]: {
          height: "90px",
        },

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: selected ? `7px solid ${theme.palette.primary.main}` : "none",
          borderRadius: "inherit",
          boxSizing: "border-box",
        }

      })}
    >
      <div style={overlayStyle} />
      <Box
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {logo}
      </Box>
      <Box
        sx={{
          width: "4px",
          borderRadius: "20px",
          minHeight: "80%",
          backgroundColor: "#000000",
          cursor: "pointer",
        }}
      ></Box>
      <Box
        sx={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography align="center" gutterBottom variant="h5">
          {title}
        </Typography>
      </Box>
    </ButtonBase>
  );
};

NovaApoliceSelectCard.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.node,
};
