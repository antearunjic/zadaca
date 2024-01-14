import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

const App = () => {
  const ispis =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, expedita.";
  return (
    <>
      <ClassComponent />
      <FunctionComponent ispis={ispis} />
    </>
  );
};

export default App;
