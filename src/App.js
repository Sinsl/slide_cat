import './App.scss';

import { Slider } from './Slider/Slider';
import { Slider2 } from './Slider2/Slider2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Slider</h1>

      </header>
      <h2>Тестовый слайдер 1</h2>
      <Slider />
      <h2>Тестовый слайдер 2</h2>
      <Slider2 />
    </div>
  );
}

export default App;
