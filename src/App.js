import VirtualizedList from "./Components/VirtualizedList";
import "./styles.css";

const LIST = Array.from({ length: 100000 }, (_, index) => index + 1);

export default function App() {
  return (
    <div className="App">
      <VirtualizedList List={LIST} height={400} width={300} itemHeight={35} />
    </div>
  );
}
