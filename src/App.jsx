import Board from "./Component/List/Board/Board";
import Editable from "./Component/List/Editable/Editable";
import BoardAppBar from "./Component/Header/Header";
import "./App.css";
import Discription from "./Component/discription/Discription";
import CardDetails from "./Component/discription/Discription";

// import Navbar from "./Component/navBar/NavBar";
const App = () => {
  return (
    <>
      {/* //  <Discription />
    // <div className="app">
    //   <div className="app_navbar"> */}
      {/* <BoardAppBar /> */}
      <CardDetails />
      {/* <Navbar /> */}
      {/* </div>
      <div className="app_outer">
        <div className="app_boards">
          <Board />

          <Editable />
        </div>
      </div>
    </div> */}
    </>
  );
};

export default App;
