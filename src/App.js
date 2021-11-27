import { Routes } from './routes';
import GlobalStyle from './styles/global'

export const App = () => {
  return (
    <div className="container-app">
      <GlobalStyle />
      <Routes />
    </div>
  );
};
