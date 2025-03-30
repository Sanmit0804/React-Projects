import React from 'react';
import AutocompleteSearch from './components/AutoCompleteSearch';
import useDeviceType from './hooks/useDeviceType';
import UserList from './components/UserList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pagination from './utils/Pagination';

const queryClient = new QueryClient(); 

function App() {
  const value = useDeviceType();
  console.log(value);

  return (
    <div className="App">
      {/* <AutocompleteSearch /> */}
      <QueryClientProvider client={queryClient}>
        <UserList />
        <Pagination/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
