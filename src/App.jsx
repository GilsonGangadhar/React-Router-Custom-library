import Blog from "./components/Blog";
import BrowerRouter from "./components/BrowerRouter";
import NavBar from "./components/NavBar";
import Route from "./components/Route";

function App() {
  return (
    <>
      <h1>React router project</h1>
      <BrowerRouter>
        <h2>Browser Router!</h2>
        <NavBar />
        <Route path="/home">
          <h3>Route 1</h3>
          <>Checking</>
        </Route>
        <Route path="/blog">
          <h3>Route 2</h3>
          <Blog />
        </Route>
      </BrowerRouter>
    </>
  );
}

export default App;
