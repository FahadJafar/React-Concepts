import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditAdd = () => {
  const Nav = useNavigate();
  const location = useLocation();

  const isEditMode = location.pathname.startsWith("/edit");
  const initialState = { title: "", body: "", userId: "" };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!isEditMode) {
      setFormData(initialState);
    } else {
      setFormData(location.state.d);
    }
  }, [isEditMode, location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.title === "" ||
      formData.body === "" ||
      formData.userId === ""
    ) {
      alert("One of the Fields is empty! Please Fill Fields Correctly");
    } else {
      if (isEditMode) {
        axios
          .patch(
            `https://jsonplaceholder.typicode.com/posts/${formData.id}`,
            formData
          )
          .then((response) => {
            console.log(response.data);
            alert("Data has been updated! Redirecting to HomePage");
            setTimeout(() => {
              Nav("/home");
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", formData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="Add">
      <form onSubmit={handleSubmit}>
        <h2>Title:</h2>
        <input
          type="text"
          name="title"
          placeholder="Title...."
          value={formData.title}
          onChange={handleChange}
        />

        <h2>Body:</h2>
        <input
          type="text"
          name="body"
          placeholder="Body...."
          value={formData.body}
          onChange={handleChange}
        />
        <br></br>

        <h2>UserId:</h2>
        <input
          type="text"
          name="userId"
           placeholder="UserId...."
          value={formData.userId}
          onChange={handleChange}
        />
        <br></br>

        <button>{isEditMode ? "Edit" : "Add"} List</button>
      </form>
    </div>
  );
};

export default EditAdd;
