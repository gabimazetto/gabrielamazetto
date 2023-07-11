import { Contato } from "./components/Contato.jsx";
import ImageOne from "./components/ImageOne.jsx";
import ImageThree from "./components/ImageThree";
import LastPage from "./components/LastPage.jsx";
import { PageFive } from "./components/PageFive.jsx";
import { PageFour } from "./components/PageFour.jsx";
import { PageOne } from "./components/PageOne.jsx";
import { BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <ImageOne />
        <PageOne/>
        <ImageThree/>
        <PageFour/>
        <PageFive/>
        <LastPage/>
        <Contato/>

      </Router>
      
    </div>
  );
}

export default App;
