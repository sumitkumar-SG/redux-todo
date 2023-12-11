import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>TODO USING REDUX</h1>
      <h4>INCREMENT AND DECREMENT</h4>

      <div className='input'>
        <button className='inc'>-</button>
        <input type="text" className="val" value="0"></input>
        <button className='dec'>+</button>
      </div>
    </div>
  );
}

export default App;
