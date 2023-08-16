import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import TotalCatchers from '../TotalCatchers/TotalCatchers';


function App() {
  const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');
  const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

  const [newPitcher, setNewPitcher] = useState('');
  const [newCatcher, setNewCatcher] = useState('');

  const dispatch = useDispatch();
  const pitcherList = useSelector(store => store.pitcherList);
  const catcherList = useSelector(store => store.catcherList);

  const handlePitcherNameChange = event => {
    setNewPitcher(event.target.value);
  };


  const handlePitcherSubmit = event => {
    event.preventDefault();
    dispatch({
      type: 'ADD_PITCHER',
      payload: newPitcher
    })
    setNewPitcher('');
  };

  const handleCatcherNameChange = event => {
    setNewCatcher(event.target.value);
  };

  // add new catcher to array. this will move to the catcher reducer!
  const handleCatcherSubmit = event => {
    event.preventDefault();
    // spread: give me everything in catcherList, then add this new thing
    dispatch({
      type: 'ADD_CATCHER',
      payload: newCatcher
    })
    setNewCatcher('');
  };

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <OnTheMound />
      <h2>Behind the Plate: {currentCatcher}</h2>
      <TotalPitchers />
      <TotalCatchers />
      <h3>All Pitchers</h3>
      <form onSubmit={handlePitcherSubmit}>
        <input
          type="text"
          value={newPitcher}
          onChange={handlePitcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form>
      <ul>
        {pitcherList.map((pitcher, i) => (
          <li key={i}
            onClick={() => setCurrentPitcher(pitcher)}
          >
            {pitcher}
          </li>
        ))}
      </ul>
      <h3>All Catchers</h3>
      <form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={handleCatcherNameChange}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
      <ul>
        {catcherList.map((catcher, i) => (
          <li key={i}
            onClick={() => setCurrentCatcher(catcher)}
          >
            {catcher}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
