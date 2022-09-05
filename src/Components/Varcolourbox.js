//Here we create colour box using variables with props

const Varcolourbox = (props) => {
  const value = {
    //in this all css we stroed in the  variable as an object
    backgroundColor: props.colour, //here props paramter . argument variable colour are used which assign diff colors on it when we call function
    height: "6rem",
    width: "3rem",
    padding: "2rem",
    display: "inline-block",
    margin: "1rem"
  };

  return <div style={value}></div>;
};

export default Varcolourbox;
