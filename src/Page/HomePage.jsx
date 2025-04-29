
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl mb-4 text-purple-700 font-bold">🎮 Memory Game</h1>
      <button
        onClick={() => navigate('/game')}
        className="bg-purple-700 px-4 py-2 rounded"
      >
        Start Game
      </button>
     </div>
  );
}
