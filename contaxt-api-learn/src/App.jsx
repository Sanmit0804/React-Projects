import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvide";
import "./App.css";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1 className="title-name">Hello how are you!</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
