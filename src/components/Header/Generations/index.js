import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";
const Generations = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Gen1 text="Gen1 - using props" />
      <Gen2 text="Gen2 - using props" />
      <Gen3 text="Gen3 - using props" />
      <Gen4 text="Gen4 - using props" />
    </div>
  );
};

export default Generations;
