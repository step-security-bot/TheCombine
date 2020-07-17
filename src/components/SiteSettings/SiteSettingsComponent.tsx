import { Grid } from "@material-ui/core";
import { List, People } from "@material-ui/icons";
import React from "react";
import {
  LocalizeContextProps,
  withLocalize,
  Translate,
} from "react-localize-redux";

import { CurrentTab } from "../../types/currentTab";
import AppBarComponent from "../AppBar/AppBarComponent";
import BaseSettingsComponent from "../BaseSettings/BaseSettingsComponent";
import ProjectManagement from "./ProjectManagement";

class SiteSettingsComponent extends React.Component<LocalizeContextProps> {
  render() {
    return (
      <React.Fragment>
        <AppBarComponent currentTab={CurrentTab.SiteSettings} />
        <Grid container justify="center" spacing={6}>
          {/* Project List */}
          <BaseSettingsComponent
            icon={<List />}
            title={<Translate id="projectSettings.projectList" />}
            body={<ProjectManagement />}
          />

          {/* User List */}
          <BaseSettingsComponent
            icon={<People />}
            title={<Translate id="projectSettings.userList" />}
            body={
              "TO BE ADDED... (searchable?) list of users with option to delete each, and popup to confirm deletion."
            }
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default withLocalize(SiteSettingsComponent);