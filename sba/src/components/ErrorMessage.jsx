const ErrorMessage = ({ message }) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h4>{message}</h4>
      <button onClick={() => window.location.reload()}>RELOAD PAGE</button>
    </div>
  );
};

export default ErrorMessage;
