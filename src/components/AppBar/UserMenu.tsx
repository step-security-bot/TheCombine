import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import { ExitToApp, Person, SettingsApplications } from "@material-ui/icons";
import React from "react";
import { Translate } from "react-localize-redux";

import { avatarSrc } from "../../backend";
import { getCurrentUser, setProjectId } from "../../backend/localStorage";
import history from "../../history";
import theme from "../../types/theme";

/**
 * Avatar in appbar with dropdown (Site settings (for admins), user settings, log out)
 */
export default function UserMenu() {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null
  );
  const [avatar, setAvatar] = React.useState<null | string>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorElement(event.currentTarget);
  }

  function handleClose() {
    setAnchorElement(null);
  }

  async function getAvatar() {
    const user = getCurrentUser()!;
    const a = await avatarSrc(user);
    setAvatar(a);
  }

  getAvatar();

  // Determine if the user is an Admin user.
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const isAdmin: boolean = user && user.isAdmin;

  return (
    <div>
      <Button
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {avatar ? (
          <Avatar alt="User avatar" src={avatar} />
        ) : (
          <Person style={{ fontSize: 40 }} />
        )}
      </Button>
      <Menu
        getContentAnchorEl={null}
        id="user-menu"
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* Only show Site Settings link to Admin users. */}
        {isAdmin && (
          <MenuItem
            onClick={() => {
              setProjectId("");
              history.push("/site-settings");
            }}
          >
            <SettingsApplications style={{ marginRight: theme.spacing(1) }} />
            <Translate id="userMenu.siteSettings" />
          </MenuItem>
        )}

        <MenuItem
          onClick={() => {
            history.push("/user-settings");
          }}
        >
          <Person style={{ marginRight: theme.spacing(1) }} />
          <Translate id="userMenu.userSettings" />
        </MenuItem>

        <MenuItem
          onClick={() => {
            history.push("/login");
          }}
        >
          <ExitToApp style={{ marginRight: theme.spacing(1) }} />
          <Translate id="userMenu.logout" />
        </MenuItem>
      </Menu>
    </div>
  );
}
