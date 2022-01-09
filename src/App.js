import './App.css';
import { useEffect, useState } from 'react';
// Component Imports
import Image from './components/Image/Image';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
// Package Imports
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import ReactTypingEffect from 'react-typing-effect';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  // State
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`)
      .then(res => {
        // Format the objects with only necessary data
        const imagesInfo = res.data.map(image => {
          return { title: image.title, url: image.url, date: image.date };
        })
        setLoading(false)
        setImages(imagesInfo);
      })
      .catch(err => console.log(err));
  }, [])
  return (
    <div className="App">
      <Header />
      {loading && <Loading />}
      {!loading && <ReactTypingEffect
        text={["Welcome To: The Final Frontier 🚀"]}
        className="typed"
        speed={50}
        eraseDelay={100000}
      />
      }
      <br />
      {images.length > 0 && images.map(image => {
        return <Image key={uuid()} title={image.title} date={image.date} url={image.url} />
      })}
    </div>
  );
}

export default App;
