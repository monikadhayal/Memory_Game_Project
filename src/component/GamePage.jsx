import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GamePage({count,setCount}) {
  const navigate = useNavigate();

  const fruitEmojiLinks = [
    "https://em-content.zobj.net/thumbs/240/apple/354/green-apple_1f34f.png", // 🍏
    "https://em-content.zobj.net/thumbs/240/apple/354/red-apple_1f34e.png", // 🍎
    "https://em-content.zobj.net/thumbs/240/apple/354/grapes_1f347.png", // 🍇
    "https://em-content.zobj.net/thumbs/240/apple/354/banana_1f34c.png", // 🍌
    "https://em-content.zobj.net/thumbs/240/apple/354/strawberry_1f353.png", // 🍓
    "https://em-content.zobj.net/thumbs/240/apple/354/watermelon_1f349.png", // 🍉
    "https://em-content.zobj.net/thumbs/240/apple/354/red-apple_1f34e.png", // 🍎
    "https://em-content.zobj.net/thumbs/240/apple/354/pear_1f350.png", // 🍐\
    "https://em-content.zobj.net/thumbs/240/apple/354/pineapple_1f34d.png", // 🍍
    "https://em-content.zobj.net/thumbs/240/apple/354/watermelon_1f349.png", // 🍉
    "https://em-content.zobj.net/thumbs/240/apple/354/green-apple_1f34f.png", // 🍏
    "https://em-content.zobj.net/thumbs/240/apple/354/banana_1f34c.png", // 🍌
    "https://em-content.zobj.net/thumbs/240/apple/354/grapes_1f347.png", // 🍇
    "https://em-content.zobj.net/thumbs/240/apple/354/pear_1f350.png", // 🍐
    "https://em-content.zobj.net/thumbs/240/apple/354/pineapple_1f34d.png", // 🍍
    "https://em-content.zobj.net/thumbs/240/apple/354/strawberry_1f353.png", // 🍓
  ];


  const [flipped, setFlipped] = useState(null);
  const [current, setCurrent] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [match, setMatch] = useState(Array(16).fill(false));
  

  const handleFlip = (index) => {
    if (match[index]) return;
    
    setFlipped(index);
    setCurrent(index);
    setCount(count + 1);
    setPrevious(current);
  };

  useEffect(() => {
   
    if (
      current !== previous&&
      fruitEmojiLinks[current] === fruitEmojiLinks[previous]) {
      const newMatch = [...match];

      newMatch[current] = true;
      newMatch[previous] = true;

      setMatch(newMatch);
    }
  }, [current, previous]);

  useEffect(() => {
    const allMatched = match.every((match) => match === true);

    if (allMatched) {
      navigate("/result");
    }
  }, [match]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h2 className="text-3xl mb-4 text-purple-700 font-medium">Memory Game</h2>
      <div className="flex ">
        <div className="m-3 mr-9">
          Previous image:
          {previous !== null && (
            <img
              src={fruitEmojiLinks[previous]}
              className="w-5  ml-2 inline-block"
            />
          )}
        </div>
        <p className="m-3 ml-7"> Moves: {Math.ceil(count / 2)}</p>
      </div>
      <div className="grid grid-cols-4 ">
        {fruitEmojiLinks.map((link, index) => (
          <div
            onClick={() => handleFlip(index)}
            className={`w-14 h-14 m-2 flex justify-center items-center rounded cursor-pointer 
        ${
          match[index]
            ? "bg-black border-2 border-green-300"
            : "bg-purple-700"
        }`}
          >
            {match[index] || flipped == index ? (
              <img src={link} className="w-8 " />
            ) : null}
            {/* {match[index] === true ? <img src={link} /> : null} */}
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={() => navigate("/result")}
          className="bg-purple-700 px-4 py-2 m-5 rounded"
        >
          Quit Game
        </button>
      </div>
    </div>
  );
}
