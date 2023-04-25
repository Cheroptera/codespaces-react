
import { Button } from './components/Button'

function App() {
  const handleClick = () => {
    console.log('Button was clicked');
  }
  return (
    <div className="App">
    <Button
    title='button' 
    onClick={handleClick}
    
    >
 
    </Button>
    </div>
  );
}

export default App;
