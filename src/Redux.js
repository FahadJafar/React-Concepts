import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, incrementbyAmount ,printName,clearData} from "./Counter";

const Redux = () => {
  const { count } = useSelector((state) => state.counter);
  const {name}=useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  return (
    <div className="Redux">
      {count}
      {name}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementbyAmount(22))}>
      
        Increment By amount
      </button>
      
      <button onClick={() => dispatch(printName("Fahad"))}>Set Name</button>
      <button onClick={()=>dispatch(clearData())}>Clear Values</button>
    </div>
  );
};

export default Redux;
