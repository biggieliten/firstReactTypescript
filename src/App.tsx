import Header from "./components/Header";
import Counter from "./components/Counter";
import TextToAlert from "./components/TextToAlert";
import ChangeText from "./components/ChangeText";
import QuestList from "./components/CodeExamples/QuestList";
import VehicleList from "./components/CodeExamples/VehicleList";
import ColorBox from "./components/ColorBox";
import Addition from "./components/Addition";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <>
      <Header title="Hello World!" level={12}>
        Header <span>asdad</span>
      </Header>

      <Counter />
      <TextToAlert />
      <ChangeText />

      <Addition />

      <ColorBox />

      <List />
      <div className="questList">
        <QuestList />

        <VehicleList />
      </div>
    </>
  );
}

export default App;
