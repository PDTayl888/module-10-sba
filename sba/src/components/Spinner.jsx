const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    width: '100%'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }
};

const Spinner = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p>LOADING...</p>
    </div>
  );
};

export default Spinner;