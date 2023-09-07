import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const View = () => {
  const Nav = useNavigate();
  const [data, setData] = useState("");
  const [IsPending, setIsPending] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    console.log("called");

    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        console.log(res.data);
        setIsPending(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsPending(false);
        console.log(err);
      });
  }, [id]);

  const handleH = () => {
    Nav("/home");
  };

  return (
    <div className="View">
      {IsPending && <div className="Loading">Loading.......</div>}
      <div className="content">
        <h2>ID :</h2>
        <p>{data.id}</p>
        <h2>Title :</h2>
        <p>{data.title}</p>
        <h2>Body :</h2>
        <p>{data.body}</p>
      </div>
      <h2>Click Below Button for going back to Home Page!</h2>
      <button onClick={handleH}>Home</button>
    </div>
  );
};

export default View;
