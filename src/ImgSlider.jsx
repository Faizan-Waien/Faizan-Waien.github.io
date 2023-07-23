import { useEffect, useState } from 'react';
import './imgSlider.css';

const photos = [
  {
    id: '1',
    url: '/src/images/SS.jpg',
  },
  {
    id: '2',
    url: '/src/images/EZ.jpg',
  },
  {
    id: '3',
    url: '/src/images/FH.jpg',
  },
  {
    id: '4',
    url: '/src/images/PR.jpg',
  },
];

const ImgSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    // setCurrentIndex((currentIndex + 1) % photos.length);
    setCurrentIndex((v) => (v === 3 ? 0 : v + 1))
  };

  const prev = () => {
    // setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    setCurrentIndex((v) => (v === 0 ? 3 : v - 1))
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 50000);
    return () => clearInterval(interval)
  }, [])

  return (
    <div>

      <div className='slider-container'>
        {photos.map((photo) => (
          <div
            key={photo.id}

            className={
              photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
            }
          >
            <img className='photo' src={photo.url} alt={photo.id} />
          </div>
        ))}

        <button onClick={prev} className='prev'>
          &lt;
        </button>

        <button onClick={next} className='next'>
          &gt;
        </button>

        <div className='dots'>
          {photos.map((photo) => (
            <span
              key={photo.id}

              className={
                photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
              }

              onClick={() => setCurrentIndex(photos.indexOf(photo))}
            ></span>
          ))}

        </div>

      </div>
    </div>
  )
}

export default ImgSlider;