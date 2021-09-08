import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // {usestate} täytyy importata, jos sitä haluaa käyttää
//tässä tehtävässä käytetty bootstrappia
function App() {
  const [age, setAge] = useState(0)
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setUpper((220 - age) * 0.85)
    setLower((220 - age) * 0.65)
  }
  return (
    <div id="container">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3 col-3"> 
          <label for="age" class="form-label">Age</label>
          <input type="number" onChange={e => setAge(e.target.value)} value={age} class="form-control" id="age" />
        </div>
        <div className="mb-3 col-3">
        <label for="hrlimit" class="form-label">Heart rate limits</label>
          {/* <input className="form-control" value={hrlimit} aria-label="Heartrate will display here" readonly /> */}
          <output className="form-control">{lower} - {upper} </output>
        </div>
        <button type="submit" class="btn btn-primary">Calculate</button>
      </form>
    </div>
  );
}

export default App;
