import './App.css';
import List from './List';
import ListProvider from './ListProvider'

function App() {
  return (
    <>
     <ListProvider>
        <h1>TODO</h1>
          <List />
        
     </ListProvider>
    </>
  )
}

export default App
