import NextLink from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/solid/ArrowTopRightOnSquareIcon";
import ChevronUpDownIcon from "@heroicons/react/24/solid/ChevronUpDownIcon";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Logo } from "src/components/logo";
import { Scrollbar } from "src/components/scrollbar";
import { items } from "./config";
import { SideNavItem } from "./side-nav-item";
import React from "react";
import MenuDivider from "src/components/menu-divider";
import MenuDividerWithDropdown from "src/components/menu-divider-with-dropdown";

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const groupedServices = Object.values(
    items.reduce((groups, service) => {
      const group = groups[service.group] || [];
      group.push(service);
      groups[service.group] = group;
      return groups;
    }, {})
  );

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: "inline-flex",
              height: 32,
              width: 32,
              textDecoration: "none",
            }}
          >
            <Typography variant="h5" color="white">
              UniRisk360
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              
            }}
          >
            {groupedServices.map((group, index) => {
              let active0 = false;

              group.forEach((item) => {
                if (item.path) {
                  active0 = pathname === item.path;
                }

                // Se o item não está ativo e tem um submenu, verifica se algum path do submenu corresponde ao pathname
                if (!active0 && item.submenu) {
                  active0 = item.submenu.some((subItem) => pathname === subItem.path);
                }
              });

              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                  }}
                >
                  <MenuDividerWithDropdown title={group[0].group} active={active0}>
                    {group.map((item, index) => {
                      let active = false;

                      if (item.path) {
                        active = pathname === item.path;
                      }

                      // Se o item não está ativo e tem um submenu, verifica se algum path do submenu corresponde ao pathname
                      if (!active && item.submenu) {
                        active = item.submenu.some((subItem) => pathname === subItem.path);
                      }
                      //       // console.log(item);
                      return (
                        <SideNavItem
                          active={active}
                          disabled={item.disabled}
                          external={item.external}
                          icon={item.icon}
                          key={`${item.title} - ${index}`}
                          path={item.path}
                          title={item.title}
                          isDivider={item.isDivider}
                          isFirst={index === 0}
                          submenu={item.submenu}
                        />
                      );
                    })}
                  </MenuDividerWithDropdown>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.800",
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
