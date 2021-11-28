import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";

export const App = () => {
  return (
    <div className="container-app">
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </div>
  );
};
