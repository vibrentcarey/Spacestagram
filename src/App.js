import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
  console.log(process.env);
  const [images, setImages] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`)
      .then(res => {
        const imagesInfo = res.data.map(image => {
          return { title: image.title, url: image.url, date: image.date }
        })
        setImages(imagesInfo)
      })
  }, [])
  return (
    <div className="App">
      {images.length > 0 && <h1>{images[0].title}</h1>}
    </div>
  );
}

export default App;
