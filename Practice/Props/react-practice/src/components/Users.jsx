import { usersConfig } from "../usersConfig";
import User from "./User";

function Users() {
  return (
    <div>
      {usersConfig.map((user) => (
        <User key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default Users;
