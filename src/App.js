import {  BrowserRouter as Router} from "react-router-dom";
import {Header} from "./Components/Header";
import Menu from "./Components/Menu";
import Routes from "./routes";

function App() {
  return (
    <>
  <Router>
    <Header/>
    <Menu />
  <Routes/>
  </Router>
   </> 
  );
}

export default App;
