import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          200 Park Street
        </div>
      </header>
      <div>
        Now I need a body of some kind
        <table>
          <thead>here's a table</thead>
          <tbody>
            <tr>1</tr>
            <tr>2</tr>
            <tr>3</tr>
            <tr>4</tr>
          </tbody>
        </table>
      <a target="_blank" href="https://www.google.fi/maps/place/200+Park+St,+Morristown,+VT+05661/@44.5630162,-72.5946736,17z/data=!3m1!4b1!4m6!3m5!1s0x4cb5eab30507a617:0x8d898d0e54d32085!8m2!3d44.5630124!4d-72.5924849!16s%2Fg%2F11c227kw5m"><img alt="map" src="/200ParkMap.png" width="40%"/></a>
      </div>
    </div>
  );
}

export default App;
