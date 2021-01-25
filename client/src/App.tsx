import React from 'react';

import {searchLocations} from './api/GeoLocations/searchLocations';
import GeoLocation from '../../interfaces/GeoLocation';
import List from './components/List';
import SearchBox from './components/SearchBox';

function App() {
  const [items, setItems] = React.useState<GeoLocation[]>([]);

  const fetchLocations = async (name: string) => {
    var response = await searchLocations(name);
    var data = response.data;

    setItems(data);
  }

  const onSearch = React.useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    var text = event.currentTarget.value;
    await fetchLocations(text);
  }, []);


  return (
    <div className="App">
      <SearchBox labelText="Search: " onChange={onSearch} />
      <List items={items} />
    </div>
  );
}





export default App;
