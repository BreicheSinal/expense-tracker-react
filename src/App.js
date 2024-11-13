import LoginForm from "./components/LoginForm";

const App = () => {
  console.log("App rerendered");

  return (
    <div className="app">
      <LoginForm />
    </div>
  );
};

export default App;
