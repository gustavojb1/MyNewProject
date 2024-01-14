import { Box, ButtonBase } from '@mui/material'
import React from 'react'
import { usePathname } from "next/navigation";


const MenuItem = ({ icon, linkProps, title, disabled, isSubmenu, isFirst, path }) => {
  const pathname = usePathname();
  let active2 = false;

  // Verifica se o item tem um path e se ele corresponde ao pathname
  if (path) {
    active2 = pathname === path;
  }

  return (
    <ButtonBase
            sx={{
              alignItems: "center",
              borderRadius: 1,
              display: "flex",
              justifyContent: "flex-start",
            pl: isSubmenu  ? "48px" : "32px",
              pr: "16px",
              py: "6px",
              textAlign: "left",
              width: "100%",
              ...(active2 && {
                backgroundColor: "rgba(255, 255, 255, 0.04)",
              }),
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.04)",
              },
            }}
            {...linkProps}
          >
            {icon && (
              <Box
                component="span"
                sx={{
                  alignItems: "center",
                  color: "neutral.400",
                  display: "inline-flex",
                  justifyContent: "center",
                  mr: 2,
                  ...(active2 && {
                    color: "primary.main",
                  }),
                }}
              >
                {icon}
              </Box>
            )}
            <Box
              component="span"
              sx={{
                color: "neutral.400",
                flexGrow: 1,
                fontFamily: (theme) => theme.typography.fontFamily,
                fontSize: 14,
                fontWeight: 600,
                lineHeight: "24px",
                whiteSpace: "nowrap",
                ...(active2 && {
                  color: "common.white",
                }),
                ...(disabled && {
                  color: "neutral.500",
                }),
              }}
            >
              {title}
            </Box>
          </ButtonBase>
  )
}

export default MenuItem