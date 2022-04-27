import React, { useContext, useState } from 'react';
import handleAdviceAndCatImage from '../../helpers/handleAdviceAndCatImage';
import myContext from '../../contextAPI/myContext';
import '../../style/pages.css';

function PageAdvices() {
  const { handleInfos, setHandleInfos } = useContext(myContext);

  const [uploadedImage, setUploadedImage] = useState(false);

  const handleImageLoaded = () => {
    setUploadedImage(true);
  };

  return (
    <main>
      <section className="container">
        <h1>
          Wise
          <span>Cat</span>
        </h1>
        <button
          type="button"
          onClick={async () => {
            setUploadedImage(false);
            setHandleInfos({ catImage: '' });
            setHandleInfos(await handleAdviceAndCatImage());
          }}
        >
          Next advice
        </button>
        <div className="content">
          { uploadedImage && <h1>{ handleInfos.advice }</h1> }
          { handleInfos.catImage
          && (
          <img
            className="cat-image"
            src={handleInfos.catImage}
            alt="Cat"
            onLoad={handleImageLoaded}
          />
          )}
        </div>
      </section>
    </main>
  );
}

export default PageAdvices;
