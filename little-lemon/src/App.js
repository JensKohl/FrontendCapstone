import './App.css';
import './index.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () =>{

  // TODO: replace these functions with calls to external API
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const [date, setDate] = React.useState("");

//const [timeslots, setTimeSlots] = React.useState(fetchAPI(date));
// TODO: hier available time slots rein als erster parameter
const [timeslots, setTimeSlots] = React.useState("");

const availableTimes = [
  { value: "19:00", label: "1900" },
  { value: "19:30", label: "1930" }
];

const updateTimes = () => {

}


// TODO: TEST. replace with reducer
/*
if (date !== ""){
  
  const testSlots =  fetchAPI(date); 
  console.log("Test in APP: " + testSlots);
  
}else {
  
}*/
  return (
    <div>
        <Header />
        <Main availableTimes={availableTimes} setTimeSlots={setTimeSlots} setDate={setDate}/>
        <Footer />
    </div>
  );
}

export default App;