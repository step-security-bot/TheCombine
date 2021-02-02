import React from "react";
import renderer from "react-test-renderer";

import DeleteEntry from "components/DataEntry/DataEntryTable/EntryCellComponents/DeleteEntry";

describe("DeleteEntry", () => {
  it("renders without crashing", () => {
    renderer.act(() => {
      renderer.create(<DeleteEntry removeEntry={jest.fn()} />);
    });
  });
});
