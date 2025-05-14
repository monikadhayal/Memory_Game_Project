// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function GamePage({count,setCount}) {
//   const navigate = useNavigate();

//   const fruitEmojiLinks = [
//     "https://em-content.zobj.net/thumbs/240/apple/354/green-apple_1f34f.png", // 🍏
//     "https://em-content.zobj.net/thumbs/240/apple/354/red-apple_1f34e.png", // 🍎
//     "https://em-content.zobj.net/thumbs/240/apple/354/grapes_1f347.png", // 🍇
//     "https://em-content.zobj.net/thumbs/240/apple/354/banana_1f34c.png", // 🍌
//     "https://em-content.zobj.net/thumbs/240/apple/354/strawberry_1f353.png", // 🍓
//     "https://em-content.zobj.net/thumbs/240/apple/354/watermelon_1f349.png", // 🍉
//     "https://em-content.zobj.net/thumbs/240/apple/354/red-apple_1f34e.png", // 🍎
//     "https://em-content.zobj.net/thumbs/240/apple/354/pear_1f350.png", // 🍐\
//     "https://em-content.zobj.net/thumbs/240/apple/354/pineapple_1f34d.png", // 🍍
//     "https://em-content.zobj.net/thumbs/240/apple/354/watermelon_1f349.png", // 🍉
//     "https://em-content.zobj.net/thumbs/240/apple/354/green-apple_1f34f.png", // 🍏
//     "https://em-content.zobj.net/thumbs/240/apple/354/banana_1f34c.png", // 🍌
//     "https://em-content.zobj.net/thumbs/240/apple/354/grapes_1f347.png", // 🍇
//     "https://em-content.zobj.net/thumbs/240/apple/354/pear_1f350.png", // 🍐
//     "https://em-content.zobj.net/thumbs/240/apple/354/pineapple_1f34d.png", // 🍍
//     "https://em-content.zobj.net/thumbs/240/apple/354/strawberry_1f353.png", // 🍓
//   ];

//   const [images, setImages] = useState([]);
//   const [flipped, setFlipped] = useState(null);
//   const [current, setCurrent] = useState(null);
//   const [previous, setPrevious] = useState(null);
//   const [match, setMatch] = useState(Array(16).fill(false));
  

//     useEffect(() => {  
//       setImages(ImageChangefunction(fruitEmojiLinks));
//     }, []);

// const ImageChangefunction = (array) => {
//   let newArray = [...array];
//   for (let i = newArray.length-1; i>0; i--){
//     let j = Math.floor(Math.random()*(i+1));
//     let temp = newArray[i];
//     newArray[i] = newArray[j];
//     newArray[j] = temp;
//   }
//   return newArray;
// }

//   const handleFlip = (index) => {
//     if (match[index]) return;
    
//     setFlipped(index);
//     setCurrent(index);
//     setCount(count + 1);
//     setPrevious(current);
//     const newImages = ImageChangefunction(images);
//     setImages(newImages);
//   };

//   useEffect(() => {
   
//     if (
//       current !== previous &&
//       previous !== null &&
//       fruitEmojiLinks[current] === fruitEmojiLinks[previous]
//     ) {
//       const newMatch = [...match];

//       newMatch[current] = true;
//       newMatch[previous] = true;

//       setMatch(newMatch);
//     }
//   }, [current, previous]);

//   useEffect(() => {
//     const allMatched = match.every((match) => match === true);

//     if (allMatched) {
//       navigate("/result");
//     }
//   }, [match]);

//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
//       <h2 className="text-3xl mb-4 text-purple-700 font-medium">Memory Game</h2>
//       <div className="flex ">
//         <div className="m-3 mr-9">
//           Previous image:
//           {previous !== null && (
//             <img
//               src={images[previous]}
//               className="w-5  ml-2 inline-block"
//             />
//           )}
//         </div>
//         <p className="m-3 ml-7"> Moves: {Math.ceil(count / 2)}</p>
//       </div>
//       <div className="grid grid-cols-4 ">
//         {images.map((link, index) => (
//           <div
//             onClick={() => handleFlip(index)}
//             className={`w-14 h-14 m-2 flex justify-center items-center rounded cursor-pointer 
//         ${
//           match[index]
//             ? "bg-black border-2 border-green-300"
//             : "bg-purple-700"
//         }`}
//           >
//             {match[index] || flipped == index ? (
//               <img src={link} className="w-8 " />
//             ) : null}
           
//           </div>
//         ))}
//       </div>

//       <div>
//         <button
//           onClick={() => navigate("/result")}
//           className="bg-purple-700 px-4 py-2 m-5 rounded"
//         >
//           Quit Game
//         </button>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GamePage({ count, setCount }) {
  const navigate = useNavigate();

  const fruitEmojiLinks = [
    "https://em-content.zobj.net/thumbs/240/apple/354/green-apple_1f34f.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/red-apple_1f34e.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/grapes_1f347.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/banana_1f34c.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/strawberry_1f353.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/watermelon_1f349.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/pear_1f350.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/pineapple_1f34d.png",

    "https://em-content.zobj.net/thumbs/240/apple/354/green-apple_1f34f.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/red-apple_1f34e.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/grapes_1f347.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/banana_1f34c.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/strawberry_1f353.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/watermelon_1f349.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/pear_1f350.png",
    "https://em-content.zobj.net/thumbs/240/apple/354/pineapple_1f34d.png",
  ];

  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const [images, setImages] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);

  useEffect(() => {
    setImages(shuffle(fruitEmojiLinks));
  }, []);

  const handleFlip = (index) => {
    if (flipped.includes(index) || matchedIndexes.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setCount((prev) => prev + 1);
      const [first, second] = newFlipped;

      if (images[first] === images[second]) {
        const newMatched = [...matchedIndexes, first, second];

        setTimeout(() => {
          // Freeze matched positions, shuffle the rest
          const remaining = images.map((img, idx) =>
            newMatched.includes(idx) ? img : null
          );

          const toShuffle = images.filter(
            (_, idx) => !newMatched.includes(idx)
          );
          const shuffled = shuffle(toShuffle);

          const newImages = remaining.map((val) =>
            val !== null ? val : shuffled.shift()
          );

          setImages(newImages);
          setMatchedIndexes(newMatched);
          setFlipped([]);
        }, 800);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedIndexes.length === fruitEmojiLinks.length) {
      navigate("/result");
    }
  }, [matchedIndexes]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h2 className="text-3xl mb-4 text-purple-700 font-medium">Memory Game</h2>
      <p className="text-lg mb-6">Moves: {Math.ceil(count)}</p>

      <div className="grid grid-cols-4">
        {images.map((img, index) => {
          const isVisible =
            flipped.includes(index) || matchedIndexes.includes(index);
          return (
            <div
              key={index}
              onClick={() => handleFlip(index)}
              className={`w-14 h-14 m-2 flex justify-center items-center rounded cursor-pointer 
                ${
                  matchedIndexes.includes(index)
                    ? "bg-black border-2 border-green-300"
                    : "bg-purple-700"
                }`}
            >
              {isVisible ? <img src={img} className="w-8" /> : null}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => navigate("/result")}
        className="bg-purple-700 px-4 py-2 m-5 rounded"
      >
        Quit Game
      </button>
    </div>
  );
}
