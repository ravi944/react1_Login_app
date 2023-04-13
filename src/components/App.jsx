import React from "react";
import Login from "./Login";

var loginStatus = true;

function App() {
  return (
    <div className="container">{loginStatus ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;




// import React from "react";
// import Login from "./Login";

// var loginStatus = false;

// function App() {
//   return (
//     <div className="container">{loginStatus ? <h1>Hello</h1> : <Login />}</div>
//   );
// }

// export default App;