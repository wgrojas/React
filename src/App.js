import './App.css';
import Musica from './components/Musica/Musica';
import Videos from "./components/Musica/Videos"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (

    <Router>

      <Route exact path="/videos" component={Videos} />

      <Musica />

    </Router>


  );
}

export default App;
