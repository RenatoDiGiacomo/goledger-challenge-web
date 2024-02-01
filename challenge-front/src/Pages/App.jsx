import ContainerBodyStyled from "./styleApp"
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from "./Home";

function App() {
  return (
    <ContainerBodyStyled>
      <Outlet />
    </ContainerBodyStyled>
  );
}

export default App;

