import {  BrowserRouter as Router} from "react-router-dom";
import { Header } from "./Components/Header";
import Routes from "./routes";

function App() {
  return (
    <>
  <Router>
  <Header/>
  <Routes/>
  </Router>
   </> 
  );
}

export default App;
