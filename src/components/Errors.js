import { useRouteError } from "react-router-dom";

const Errors = () => {
  const err1 = useRouteError();
  console.log(err1);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something Went Wrong</h2>
      <h3>{err1.status}</h3>
    </div>
  );
};

export default Errors;
