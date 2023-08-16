
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import PitcherForm from '../PitcherForm/PitcherForm';
import PitcherList from '../PitcherList/PitcherList';
import CatcherForm from '../CatcherForm/CatcherForm';
import CatcherList from '../CatcherList/CatcherList';
import OnTheMound from '../OnTheMound/OnTheMound';
import BehindThePlate from '../BehindThePlate/BehindThePlate';


function App() {
  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <OnTheMound />
      {/* <BehindThePlate /> */}
      <TotalPitchers />
      <TotalCatchers />
      <h3>All Pitchers</h3>
      <PitcherForm />
      <PitcherList />
      <h3>All Catchers</h3>
      <CatcherForm />
      <CatcherList />
    </div>
  );
}

export default App;








