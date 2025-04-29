import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import GamePage from './component/GamePage';
import ResultPage from './component/ResultPage';
import {useState} from 'react';

export default function App() {
 const [count, setCount] = useState(0);

  return (
    <div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage count={count} setCount={setCount} />} />
        <Route path="/result" element={<ResultPage count = {count} />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}
