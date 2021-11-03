import { Button } from "@material-ui/core";
import React from "react";
import { Translate } from "react-localize-redux";

import history, { Path } from "browserHistory";
import { DataEntryContext } from "components/DataEntry/DataEntryContext";
import { tabColor } from "types/theme";

interface NavigationButtonsProps {
  currentTab: Path;
}

/** A button that redirects to the home page */
export default function NavigationButtons(props: NavigationButtonsProps) {
  return (
    <React.Fragment>
      <Button
        id="data-entry"
        onClick={() => {
          history.push(Path.DataEntry);
        }}
        color="inherit"
        style={{
          width: "min-content",
          background: tabColor(props.currentTab, Path.DataEntry),
        }}
      >
        <Translate id="appBar.dataEntry" />
      </Button>
      <DataEntryContext.Consumer>
        {({ openDomainTree }) => (
          <Button
            id="goals"
            onClick={() => {
              openDomainTree();
              history.push(Path.Goals);
            }}
            color="inherit"
            style={{
              width: "min-content",
              background: tabColor(props.currentTab, Path.Goals),
            }}
          >
            <Translate id="appBar.dataCleanup" />
          </Button>
        )}
      </DataEntryContext.Consumer>
    </React.Fragment>
  );
}
