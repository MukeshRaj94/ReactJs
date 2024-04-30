const User = (props) => {
  return (
    <div className="user-card">
      <h1>Name : {props.name}</h1>
      <h2>Location: CHENNAI</h2>
      <h3>Contact: check</h3>
    </div>
  );
};

export default User;
