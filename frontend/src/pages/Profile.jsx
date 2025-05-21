import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const token = useSelector((state) => state.auth.token)
    console.log(token)
  return (
    <div>
        user token - {token}
      profile page
    </div>
  );
};

export default Profile;
