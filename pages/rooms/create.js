import gql from "graphql-tag";
import Layout from "../../components/layout/Layout";
import MutationMessage from "../../components/MutationMessage";
import MutationRedirection from "../../components/MutationRedirection";
import MutationWrapper from "../../components/MutationWrapper";
import RoomCreateForm from "../../components/room/RoomCreateForm";
import { userRoomsQuery } from "../../components/room/RoomList";
const createRoomGql = gql`
  mutation createRoomGql($name: String!, $type: RoomType!, $members: [ID]) {
    roomCreate(name: $name, type: $type, members: $members) {
      id
      name
    }
  }
`;

const RoomCreatePage = () => (
  <Layout>
    <h1>Create a room</h1>
    <MutationWrapper
      mutation={createRoomGql}
      refetchQueries={() => [{ query: userRoomsQuery }]}
    >
      <RoomCreateForm />
      <MutationMessage success="Room Created" error={true} />
      <MutationRedirection url="/rooms" />
    </MutationWrapper>
  </Layout>
);

export default RoomCreatePage;
