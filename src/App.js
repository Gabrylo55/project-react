import './App.css';
import InfoBox from './components/infobox/infobox';
import PeopleList from './components/infobox/PeopleList/PeopleList';
import List from './List/List';
import Button from './components/infobox/Button/Button';
import Iterator from './components/infobox/Iterator/Iterator';


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    <InfoBox/>
    <List/>
    <Button/>
    <PeopleList/>
    <Iterator/>
    </div>
  );
}

export default App;
