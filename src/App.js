//buat komponen = function yg mereturn jsx
//buat komponen web
// <hello/> ini adalah tag

import { Hello, World } from "./components";

const App = () => {
  return (
    /* JSX */
    <div>
      <Hello />
      <World />
    </div>
  );
};

export default App;
