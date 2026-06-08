// Styles
import { useState } from 'react';
import './Video.scss';

const BASE_URL = import.meta.env.BASE_URL;

export const Video = ({
  imgSrc,
  src = 'https://youtube.com/embed/DLzxrzFCyOs?si=IzWs7gog01FmDsHM',
}) => {
  const [isPlayed, setIsPlayed] = useState(false);
  const finalImgSrc = imgSrc?.startsWith('/') ? BASE_URL + imgSrc.slice(1) : imgSrc;

  return (
    <div className="Video">
      {isPlayed ? (
        <iframe
          width="100%"
          height="100%"
          src={`${src}&autoplay=1&mute=1`}
          allow="autoplay"
          allowFullScreen
        />
      ) : (
        <>
          <img src={finalImgSrc} className="Video__Image" />

          <button
            type="button"
            className="Video__Button"
            onClick={() => { setIsPlayed(true) }}
          />
        </>
      )}
    </div>
  );
};
