import { ListItemButton } from "@mui/material";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";

import { ProjectSwitch } from "components/ProjectSettings/ProjectSwitch/ProjectSwitch";
import { newProject, randomProject } from "types/project";

const projects = [randomProject(), randomProject(), randomProject()];
let switchMaster: renderer.ReactTestRenderer;
let switchHandle: ProjectSwitch;

const createMockStore = configureMockStore();

describe("ProjectSwitch", () => {
  beforeAll(() => {
    const state = { currentProject: newProject() };
    const mockStore = createMockStore(state);
    renderer.act(() => {
      switchMaster = renderer.create(
        <Provider store={mockStore}>
          <ProjectSwitch project={newProject()} setCurrentProject={jest.fn()} />
        </Provider>
      );
    });
    switchHandle = switchMaster.root.findByType(ProjectSwitch).instance;
  });

  it("generates correct number of ListItems", () => {
    switchHandle.setState({ projectList: projects });
    expect(switchMaster.root.findAllByType(ListItemButton).length).toEqual(
      projects.length
    );
  });
});
