import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userID } = useParams();
  return <div>profile page</div>;
};

export default Profile;
