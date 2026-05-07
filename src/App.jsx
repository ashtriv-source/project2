


import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import luborder from './luborder.png';
import ruborder from './ruborder.png';
import lbborder from './lbborder.png';
import rbborder from './rbborder.png';
import shoes1 from './Shoes1.png';
import shoes2 from './Shoes2.png'
import shoes3 from './Shoes3.png'
import bag1 from'./bag1.png'
import bag2 from'./bag2.png'
import bag3 from'./bag3.png'
import shirts1 from'./shirts1.png'
import shirts2 from'./shirts2.png'
import shirts3 from'./shirts3.png'
import shirts4 from './shirts4.png'
import shirts5 from './shirts5.png'
import pants1 from'./pants1.png'
import pants2 from'./pants2.png'
import pants3 from'./pants3.png'
import pants4 from'./pants4.png'
import pants5 from'./pants5.png'

function LuBorder() {
  const [count, setCount] = useState(0)
  return <img src={luborder} className= "mylu-border" alt="luborder"/>;
 
}

function RuBorder (){
  const [count, setCount] = useState(0)
  return <img src={ruborder} className = "myru-border" alt="ruborder"/>;
}

function LbBorder (){
  const [count, setCount] = useState(0)
  return <img src={lbborder} className = "mylb-border" alt="lbborder"/>;
}

function RbBorder (){
  const [count, setCount] = useState(0)
  return <img src={rbborder} className = "myrb-border" alt="rbborder"/>;
}

function ShoesGallery({ images, currentIndex, setCurrentIndex }) {
  return (
    <div className="shoe-container">

      <button onClick={() =>
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
      }>
        ←
      </button>

      <img
        src={images[currentIndex]}
        className="myshoes-1"
        alt="shoe"
      />

      <button onClick={() =>
        setCurrentIndex((currentIndex + 1) % images.length)
      }>
        →
      </button>

    </div>
  );
}

function BagsGallery({ images, currentIndex, setCurrentIndex }) {
  return (
    <div className="bag-container">

      <button onClick={() =>
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
      }>
        ←
      </button>

      <img
        src={images[currentIndex]}
        className="mybags-1"
        alt="bag"
      />

      <button onClick={() =>
        setCurrentIndex((currentIndex + 1) % images.length)
      }>
        →
      </button>

    </div>
  );
}


function ShirtsGallery({ images, currentIndex, setCurrentIndex }) {
  return (
    <div className="shirt-container">

      <button onClick={() =>
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
      }>
        ←
      </button>

      <img
        src={images[currentIndex]}
        className="myshirts-1"
        alt="shirt"
      />

      <button onClick={() =>
        setCurrentIndex((currentIndex + 1) % images.length)
      }>
        →
      </button>

    </div>
  );
}

function PantsGallery({ images, currentIndex, setCurrentIndex }) {
  return (
    <div className="pants-container">

      <button onClick={() =>
        setCurrentIndex((currentIndex - 1 + images.length) % images.length)
      }>
        ←
      </button>

      <img
        src={images[currentIndex]}
        className="mypants1"
        alt="pants"
      />

      <button onClick={() =>
        setCurrentIndex((currentIndex + 1) % images.length)
      }>
        →
      </button>

    </div>
  );
}

async function saveOutfit(outfit) {
  console.log(outfit);

  const response = await fetch("http://localhost:3000/save-outfit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(outfit)
  });

  const data = await response.text();
  console.log(data);
}



function App(){
  const [savedOutfits, setSavedOutfits] = useState([]);
  const [selected, setSelected] = useState("");

const shirts = [shirts1, shirts2, shirts3, shirts4, shirts5];
const pants = [pants1, pants2, pants3, pants4, pants5];
const shoes = [shoes1, shoes2, shoes3];
const bags = [bag1, bag2, bag3];

const [shirtIndex, setShirtIndex] = useState(0);
const [pantsIndex, setPantsIndex] = useState(0);
const [shoesIndex, setShoesIndex] = useState(0);
const [bagIndex, setBagIndex] = useState(0);

useEffect(() => {
  fetch("http://localhost:3000/outfits")
    .then(res => res.json())
    .then(data => {
      setSavedOutfits(data);
    });
}, []);

const outfit = {
  top: shirts[shirtIndex],
  bottom: pants[pantsIndex],
  shoes: shoes[shoesIndex],
  bag: bags[bagIndex]
};

function handleSelect(value) {
  setSelected(value);

  const selectedOutfit = savedOutfits[value];

  if (!selectedOutfit) return;

  setShirtIndex(shirts.indexOf(selectedOutfit.top));
  setPantsIndex(pants.indexOf(selectedOutfit.bottom));
  setShoesIndex(shoes.indexOf(selectedOutfit.shoes));
  setBagIndex(bags.indexOf(selectedOutfit.bag));
}
  // MAIN DATA GOES HERE



  return(
    <>
    
<div className="dropdown-container">
  <select
    value={selected}
    onChange={(e) => handleSelect(e.target.value)}
    className="outfit-dropdown"
  >
    <option value="">Select Saved Outfit</option>

    {savedOutfits.map((outfit, index) => (
      <option key={outfit._id} value={index}>
        Outfit {index + 1}
      </option>
    ))}
  </select>
</div>

    <div>
      <h1>Outfit Generator</h1>
    </div>
    <RuBorder />
    <LuBorder />
    <LbBorder/>
    <RbBorder/>
   <ShirtsGallery
  images={shirts}
  currentIndex={shirtIndex}
  setCurrentIndex={setShirtIndex}
/>

<PantsGallery
  images={pants}
  currentIndex={pantsIndex}
  setCurrentIndex={setPantsIndex}
/>

<ShoesGallery
  images={shoes}
  currentIndex={shoesIndex}
  setCurrentIndex={setShoesIndex}
/>

<BagsGallery
  images={bags}
  currentIndex={bagIndex}
  setCurrentIndex={setBagIndex}
/>

<button
  className="save-button"
  onClick={async () => {
    console.log(outfit);

    await saveOutfit(outfit);

    fetch("http://localhost:3000/outfits")
      .then(res => res.json())
      .then(data => {
        setSavedOutfits(data);
      });
  }}
>
  ⭐
</button>
    
    </>

    

  );

}

export default App