import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

const App = () => {
  const ispis =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, expedita.";
  const drugiIspis =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi obcaecati incidunt magni quas debitis alias repellendus? Dolorem a dicta architecto.";
  return (
    <>
      <ClassComponent drugiIspis={drugiIspis}/>
      <FunctionComponent ispis={ispis} />
    </>
  );
};

export default App;
