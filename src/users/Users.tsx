import { SearchBarU } from "./SearchBarU";
import { UsersList } from "./UsersList"

export const Users = () => {
    return (
      <div>
        <div>
          <SearchBarU />
        </div>
        <div>
          <UsersList />
        </div>
      </div>
    );
  };