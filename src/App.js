import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from './components/Image/Image';
import { v4 as uuid } from 'uuid';
import Header from './components/Header/Header';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
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
      <Header />
      {images.length > 0 && images.map(image => {
        return <Image key={uuid()} title={image.title} date={image.date} url={image.url} />
      })}
    </div>
  );
}

export default App;
