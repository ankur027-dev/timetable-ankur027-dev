import { useState } from "react";
import './App.css';

function App() {

  
  const images = [
     "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // mountain
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // beach
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b", // forest
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"  // desert
   
  ]
  
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);

  const next = () => setIndex((index + 1) % images.length);

  return (
    <>
      <div className="img-slider">
        <h1>Image Slider</h1>
        <img src={images[index]} alt="image-here" />
        <div className="slider-btn">
            <button onClick={prev}>left</button>
            <button onClick={next}>right</button>
        </div>
      </div>
    </>
  )
}

export default App