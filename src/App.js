import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from "react-query-devtools";

const queryClient = new QueryClient()
function App() {
  const [page, setPage] = useState('planets');

  return (
    <>
      <div className="App">
       <h1>Star Wars Info</h1>
       <Navbar setPage={setPage} />
       <QueryClientProvider client={queryClient}>
       <div className="content">
         { page === 'planets' ? <Planets /> : <People /> }
       </div>
       </QueryClientProvider>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
}

export default App;
