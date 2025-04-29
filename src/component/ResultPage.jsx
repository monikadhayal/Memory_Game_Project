
import { useLocation , useNavigate } from 'react-router-dom';

export default function ResultPage({count}) {
  const navigate = useNavigate();
//    const location = useLocation();

//   const count = location.state?.count || 0; 
   
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white ">
      <h1 className="text-3xl text-pink-500">🎉 Game Over</h1>
      <h2 className="text-xl m-4 font-bold">Congratulations!</h2>
      <div className="flex">
        <p> You completed the game in {Math.ceil(count / 2)} moves </p>
      </div>
      <button
        onClick={() => navigate("/game")}
        className="bg-purple-700 px-4 py-2 rounded m-3"
      >
        Play Again
      </button>
      <button
        onClick={() => navigate("/")}
        className="bg-purple-700 px-4 py-2 rounded"
      >
        Go to Home
      </button>
    </div>
  );
}
