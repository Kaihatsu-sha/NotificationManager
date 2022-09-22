import {
  Link
} from "react-router-dom";

function Main() {
  return (<div><h3>Наполнение</h3>
    <div>
      <Link to="/login">Sign In</Link>
    </div>
    <div>
      <Link to="/signup">Sign Up</Link>
    </div>
  </div>);
}

export default Main;