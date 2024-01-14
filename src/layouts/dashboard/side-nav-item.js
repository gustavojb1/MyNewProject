import NextLink from "next/link";
import PropTypes from "prop-types";
import { Box, ButtonBase, Divider, SvgIcon, Typography } from "@mui/material";
import { FaCaretDown } from "react-icons/fa6";
import React from "react";
import { CSSTransition } from "react-transition-group";
import { FaCaretUp } from "react-icons/fa6";
import MenuDivider from "src/components/menu-divider";
import MenuWithSubMenu from "src/components/menu-item-with-submenu";
import MenuItem from "src/components/menu-item";

export const SideNavItem = (props) => {
  const {
    active = false,
    disabled,
    external,
    icon,
    path,
    title,
    isDivider,
    isFirst,
    submenu,
  } = props;
  const linkProps = path
    ? external
      ? {
          component: "a",
          href: path,
          target: "_blank",
        }
      : {
          component: NextLink,
          href: path,
        }
    : {};

  // console.log("SideNavItem: ", props);
  return (
    <li>
      {submenu ? (
        <MenuWithSubMenu
          icon={icon}
          title={title}
          active={active}
          submenu={submenu}
          path={path}
          external={external}
        />
      ) : (
        <MenuItem icon={icon} title={title} path={path} external={external} linkProps={linkProps} />
      )}
    </li>
  );
};

SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  isDivider: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
  submenu: PropTypes.array,
};
