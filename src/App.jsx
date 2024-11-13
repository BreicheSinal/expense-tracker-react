import { Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Tracker from "./components/Tracker";

const App = () => {
  console.log("App rerendered");

  return (
    <div className="App">
      <Routes>
        {/*<Route path="/" element={<LoginForm />} />*/}

        <Route path="/" element={<Tracker />} />
      </Routes>
    </div>
  );
};

export default App;
