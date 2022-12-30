import React from "react";
import '../index.css'
import BookingForm from './BookingPage'

const Main = ({availableTimes, setTimeSlots, setDate}) =>{
  const [open, setOpen] = React.useState(false);
  const onClickHandle = () => {setOpen(true);
  };

  const [visible, setVisible] = React.useState(false);

  function click(e) {
    e.preventDefault();
    setVisible(true);
  }

  return (
    <main className="grid-container">
      <div className="Main">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button onClick={(event) => {
                click(event)
        }}>Reserve a table</button>
        {visible && (<BookingForm timeOptions={availableTimes} setTimeSlots={setTimeSlots} setDate={setDate}/>)}
      </div>

    <div className="Specials">
      <h1>This week's specials!</h1>
      <div className="row">
  		  <div className="column">Special 1</div>
  		  <div className="column">Special 2</div>
        <div className="column">Special 3</div>
	    </div>
    </div>
    </main>
  );
}

export default Main;
