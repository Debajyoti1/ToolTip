import './App.css';
import Tooltip from './Components/Tooltip/Tooltip';

function App() {
  return (
    <div className="App">
      <div className='tooltip-components'>
        <h1>This is tooltip</h1>
        <Tooltip position="top" text="This is a top tooltip">
          <button>Top Hover</button>
        </Tooltip>

        <Tooltip position="bottom" text="This is a bottom tooltip">
          <button>Bottom Hover</button>
        </Tooltip>

        <Tooltip position="left" text="This is a left tooltip">
          <button>Left Hover</button>
        </Tooltip>

        <Tooltip position="right" text="This is a right tooltip">
          <button>Right Hover</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
