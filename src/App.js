import "./styles.css";
import Varcolourbox from "./Components/Varcolourbox";
export default function App() {
  const colorarr = [
    "red",
    "green",
    "blue",
    "violet",
    "silver",
    "brown",
    "pink",
    "skyblue",
    "gray",
    "orange",
    "yellow",
    "crimson",
    "purple"
  ];

  return (
    <div className="App">
      <h1>Colour Boxes using variables </h1>
      <Varcolourbox colour="green" />
      <Varcolourbox colour="red" />
      <Varcolourbox colour="blue" />
      <Varcolourbox colour="gray" />
      <Varcolourbox colour="purple" />
      <Varcolourbox colour="crimson" />
      <Varcolourbox colour="yellow" />
      <Varcolourbox colour="skyblue" />
      <Varcolourbox colour="orange" />
      <Varcolourbox colour="pink" />
      <Varcolourbox colour="brown" />
      <Varcolourbox colour="silver" />

      <h1>
        Colour Boxes using Maping(To avoid multiple n time functin call like
        variables so, we use map){" "}
      </h1>

      {/*Here we use 
        map function :- it use on array take a single values from array and return it one by one 
                         it's also same for index    
      
       colorarr: Its array variable which holds colors so we put it inside curly brackets 
      
        .map : here we applied map function on it and it's having 2 parameters inside it
       
        1) Array element 2) Array index 
       
        so map we just call it and it's upto array end so it just like loop and we can
        use return inside it but,inside forEach loop we can't use return 
        
        return: inside return we call function 
        
        colour variable :-  holds  array values means elements one by one
        
        Key variable  :- holds array index as per value 1 bu 1
        */}

      {colorarr.map((element, idx) => {
        return <Varcolourbox colour={element} key={idx} />;
      })}
    </div>
  );
}
