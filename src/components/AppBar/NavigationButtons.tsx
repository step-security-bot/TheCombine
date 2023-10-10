import { PlaylistAdd, Rule } from "@mui/icons-material";
import { Button, Hidden, Tooltip, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Permission } from "api/models";
import { getCurrentPermissions } from "backend";
import {
  TabProps,
  appBarHeight,
  buttonMinHeight,
  tabColor,
} from "components/AppBar/AppBarTypes";
import { StoreState } from "types";
import { useAppSelector } from "types/hooks";
import { Path } from "types/path";
import { useWindowSize } from "utilities/useWindowSize";

export const dataEntryButtonId = "data-entry";
export const dataCleanupButtonId = "data-cleanup";

const navButtonMaxWidthProportion = 0.2;

/** Buttons for navigating to Data Entry and Data Cleanup */
export default function NavigationButtons(props: TabProps): ReactElement {
  const projectId = useAppSelector(
    (state: StoreState) => state.currentProjectState.project.id
  );
  const [hasGoalPermission, setHasGoalPermission] = useState(false);

  useEffect(() => {
    getCurrentPermissions().then((perms) => {
      setHasGoalPermission(
        perms.includes(Permission.CharacterInventory) ||
          perms.includes(Permission.MergeAndReviewEntries)
      );
    });
  }, [projectId]);

  return (
    <>
      <NavButton
        buttonId={dataEntryButtonId}
        currentTab={props.currentTab}
        icon={<PlaylistAdd />}
        targetPath={Path.DataEntry}
        textId="appBar.dataEntry"
      />
      {hasGoalPermission && (
        <NavButton
          buttonId={dataCleanupButtonId}
          currentTab={props.currentTab}
          icon={<Rule />}
          targetPath={Path.Goals}
          textId="appBar.dataCleanup"
        />
      )}
    </>
  );
}

interface NavButtonProps extends TabProps {
  buttonId: string;
  icon: ReactElement;
  targetPath: Path;
  textId: string;
}

function NavButton(props: NavButtonProps): ReactElement {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { windowWidth } = useWindowSize();

  return (
    <Button
      id={props.buttonId}
      onClick={() => navigate(props.targetPath)}
      color="inherit"
      style={{
        background: tabColor(props.currentTab, props.targetPath),
        marginLeft: 2,
        marginRight: 2,
        maxHeight: appBarHeight,
        maxWidth: navButtonMaxWidthProportion * windowWidth,
        minHeight: buttonMinHeight,
        minWidth: 0,
        width: "fit-content",
      }}
    >
      <Tooltip title={t(props.textId)}>{props.icon}</Tooltip>
      <Hidden smDown>
        <Typography style={{ marginLeft: 5, marginRight: 5 }}>
          {t(props.textId)}
        </Typography>
      </Hidden>
    </Button>
  );
}
