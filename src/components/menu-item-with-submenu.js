import { Box, ButtonBase, SvgIcon } from "@mui/material";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { CSSTransition } from "react-transition-group";
import NextLink from "next/link";
import MenuItem from "./menu-item";
import { usePathname } from "next/navigation";

const MenuWithSubMenu = ({ title, icon, active, submenu, disabled, path, external }) => {
  const [open, setOpen] = React.useState(active ? true : false);
  const [openSubmenu, setOpenSubmenu] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <ButtonBase
        onClick={() => setOpen(!open)}
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          pl: "32px",
          pr: "16px",
          py: "6px",
          textAlign: "left",
          width: "100%",
          ...(active && {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          }),
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
      >
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
            ...(active && {
              color: "common.white",
            }),
            ...(disabled && {
              color: "neutral.500",
            }),
          }}
        >
          {title}
        </Box>
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
      </ButtonBase>
      <CSSTransition in={open} timeout={500} classNames="my-node" unmountOnExit>
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          {submenu.map((item, index) => {
            const linkProps = item.path
              ? item.external
                ? {
                    component: "a",
                    href: item.path,
                    target: "_blank",
                  }
                : {
                    component: NextLink,
                    href: item.path,
                  }
              : {};
            return (
              <>
                {item.submenu ? (
                  <>
                    <>
                      <ButtonBase
                        onClick={() => setOpenSubmenu(!openSubmenu)}
                        sx={{
                          maxHeight: "100%",
                          alignItems: "center",
                          borderRadius: 1,
                          display: "flex",
                          justifyContent: "flex-start",
                          pl: "48px",
                          pr: "16px",
                          py: "6px",
                          textAlign: "left",
                          width: "100%",
                          ...(active && {
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                          }),
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                          },
                        }}
                      >
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
                            ...(active && {
                              color: "common.white",
                            }),
                            ...(disabled && {
                              color: "neutral.500",
                            }),
                          }}
                        >
                          {item.title}
                        </Box>
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
                          <SvgIcon fontSize="small">
                            {openSubmenu ? <FaCaretUp /> : <FaCaretDown />}
                          </SvgIcon>
                        </Box>
                      </ButtonBase>
                      <CSSTransition
                        in={openSubmenu}
                        timeout={500}
                        classNames="my-node"
                        unmountOnExit
                      >
                        <Box
                          sx={{
                            overflow: "hidden",
                          }}
                        >
                          {item.submenu.map((item2, index2) => {
                            const linkProps = item2.path
                              ? item2.external
                                ? {
                                    component: "a",
                                    href: item2.path,
                                    target: "_blank",
                                  }
                                : {
                                    component: NextLink,
                                    href: item2.path,
                                  }
                              : {};
                            return (
                              <>
                                <ButtonBase
                                  sx={{
                                    alignItems: "center",
                                    borderRadius: 1,
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    pl: "64px",
                                    pr: "16px",
                                    py: "6px",
                                    textAlign: "left",
                                    width: "100%",
                                    ...(active && {
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
                                        ...(active && {
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
                                      ...(active && {
                                        color: "common.white",
                                      }),
                                      ...(disabled && {
                                        color: "neutral.500",
                                      }),
                                    }}
                                  >
                                    {item2.title}
                                  </Box>
                                </ButtonBase>
                              </>
                            );
                          })}
                        </Box>
                      </CSSTransition>
                    </>
                  </>
                ) : (
                  <MenuItem
                    {...item}
                    key={`${item.title} - ${index}`}
                    isSubmenu={true}
                    linkProps={linkProps}
                    path={item.path}
                  />
                )}
              </>
            );
          })}
        </Box>
      </CSSTransition>
    </>
  );
};

export default MenuWithSubMenu;
