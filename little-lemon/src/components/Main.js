import React from "react";
import '../index.css'

const Main = () =>{
  return (
    <main className="grid-container">
    
      <div className="Main">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
      
      <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

      <button>Reserve a table</button>
    </div>
    <div className="Specials">
      <h1>This week's specials!</h1>
      <div class="row">
  		  <div class="column">Special 1</div>
  		  <div class="column">Special 2</div>
        <div class="column">Special 3</div>
	    </div>
    </div>
    </main>





  );
}

export default Main;
