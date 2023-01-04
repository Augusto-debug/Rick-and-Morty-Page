import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <nav
        className="navbar sticky-top navbar-light
bg-dark"
      >
        <Header />
      </nav>
      <List />
    </div>
  );
}
export default App;
