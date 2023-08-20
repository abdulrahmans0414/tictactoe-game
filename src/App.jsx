import Square from "./components/Square";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Title</h1>

      <Square>
        <div>hello there</div>
        <h5>this is title</h5>
      </Square>
      <Square value="something" />
      <Square value="hi" />
      <Square value="5" />
    </div>
  );
}

export default App;
