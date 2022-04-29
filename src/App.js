import News from "./News";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <h1>News Application</h1>
      <h4>
        The data is fetched from firebase that was previously scraped from
        website using python.
      </h4>

      <News />
    </div>
  );
}
