import React from "react";

export const DataEntryContext = React.createContext({
  domainTreeOpen: false,
  openDomainTree: () => {},
  closeDomainTree: () => {},
});
