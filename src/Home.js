import axios from "axios";
import Output from "./Output";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPost, getDel } from "./urls";
const Home = () => {
  const [data, setData] = useState(null);
  const NAV = useNavigate();

  useEffect(() => {
    axios
      .get(getPost)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleB = (
    id //View Detail of List
  ) => {
    const iddd = id;
    NAV("/view/" + iddd); //Redirecting to View with ID
  };
  const handleE = (d) => {
    const state = { d };

    NAV("/edit/" + d.id, { state }); //Redirecting to Edit Page with Whole Data of List
  };

  const handleD = (id) => {
    const id1 = id;
    console.log(id1);
    axios
      .delete(getDel + id1)
      .then((res) => {
        console.log(res.data);
        console.log(res.status);
        alert("ID Number " + id1 + " Has been succesfully Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Home">
      
      <Output
        data={data}
        handleB={handleB}
        handleE={handleE}
        handleD={handleD}
      />
    </div>
  );
};

export default Home;
