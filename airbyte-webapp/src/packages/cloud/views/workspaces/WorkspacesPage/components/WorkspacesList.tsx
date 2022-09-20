import React from "react";
import styled from "styled-components";

import {
  useCreateCloudWorkspace,
  useListCloudWorkspaces,
  useWorkspaceService,
} from "packages/cloud/services/workspaces/CloudWorkspacesService";

import WorkspaceItem from "./WorkspaceItem";
import WorkspacesControl from "./WorkspacesControl";

const Content = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding-bottom: 26px;
`;

const WorkspacesList: React.FC = () => {
  const workspaces = useListCloudWorkspaces();
  const { selectWorkspace } = useWorkspaceService();
  const createWorkspace = useCreateCloudWorkspace();

  return (
    <Content>
      {workspaces.map((workspace) => (
        <WorkspaceItem key={workspace.workspaceId} id={workspace.workspaceId} onClick={selectWorkspace}>
          {workspace.name}
        </WorkspaceItem>
      ))}
      <WorkspacesControl onSubmit={createWorkspace} />
    </Content>
  );
};

export default WorkspacesList;
