// Importing necessary styles and components
import './App.css';
import Tooltip from './Components/Tooltip/Tooltip';

// The main App component
function App() {
  return (
    <div className="App">
      {/* The container div for the tooltips */}
      <div className='tooltip-components'>
        <h1>This is tooltip</h1>
        
        {/* Tooltip with position "top" and text */}
        <Tooltip position="top" text="This is a top tooltip">
          <button>Top Hover</button>
        </Tooltip>

        {/* Tooltip with position "bottom" and text */}
        <Tooltip position="bottom" text="This is a bottom tooltip">
          <button>Bottom Hover</button>
        </Tooltip>

        {/* Tooltip with position "left" and text */}
        <Tooltip position="left" text="This is a left tooltip">
          <button>Left Hover</button>
        </Tooltip>

        {/* Tooltip with position "right" and text */}
        <Tooltip position="right" text="This is a right tooltip">
          <button>Right Hover</button>
        </Tooltip>
      </div>
    </div>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;
