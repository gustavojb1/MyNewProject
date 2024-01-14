import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const MenuDivider = ({icon, title, active}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        pl: "16px",
        pr: "16px",
        py: "6px",
        // mt: isFirst===false ? "30px" : "0px",
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
        }}
      />
    </Box>
  );
};

export default MenuDivider;
