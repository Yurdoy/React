const User = ({ name, email }) => {
  return (
    <div>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>E-mail:</strong> {email}
      </p>
      <hr />
    </div>
  );
};

export default User;
