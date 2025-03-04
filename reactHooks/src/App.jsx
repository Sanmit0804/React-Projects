import React from 'react';
import AutocompleteSearch from './components/AutoCompleteSearch';
import useDeviceType from './hooks/useDeviceType';

function App() {
  const value = useDeviceType();
  console.log(value);

  return (
    <div className="App">
      <AutocompleteSearch />
    </div>
  );
}

export default App;
