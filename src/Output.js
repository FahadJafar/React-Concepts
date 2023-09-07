const Output = (props) => {
  const data = props.data;

  return (
    <div className="Output">
      {data &&
        data.map((D) => (
          <div className="content" key={D.id}>
            <h2>Title {D.id}:</h2>
            <p>{D.title}</p>

            <h2>Body :</h2>
            <p>{D.body}</p>

            <h2>UserId:</h2>
            <p>{D.userId}</p>

            <button onClick={() => props.handleB(D.id)}>Details</button>
            <button onClick={() => props.handleE(D)}>Edit List</button>
            <button onClick={() => props.handleD(D.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default Output;
