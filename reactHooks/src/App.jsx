import React from 'react';
import AutocompleteSearch from './components/AutoCompleteSearch';
import useDeviceType from './hooks/useDeviceType';
import UserList from './components/UserList';
import Pagination from './utils/Pagination';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DropdownQue from './components/DropdownQue';

const queryClient = new QueryClient();

function App() {
  // const value = useDeviceType();

  return (
    <div className="App">
      {/* <AutocompleteSearch /> */}
      <QueryClientProvider client={queryClient}>
        {/* <UserList /> */}
        {/* <Pagination/> */}
        <DropdownQue />
      </QueryClientProvider>
    </div>
  );
}

export default App;
