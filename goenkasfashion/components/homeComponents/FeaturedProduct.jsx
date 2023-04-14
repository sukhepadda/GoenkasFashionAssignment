import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function FeaturedProduct() {
  const photos = [
    {

      id: 0,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/girls21-copy.jpg",
      width: 0.7,
      height: 1,
      className: "galleryImg"
    },
    {
      id: 1,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/kurtaSUIT.jpg",
      width: 1,
      height: 1,
      className: "galleryImg"
    },
    {
      id: 2,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/wf.jpg",
      width: 2,
      height: 1,
      className: "galleryImg"
    },
    {
      id: 3,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/saari-1.jpg",
      width: 1,
      height: 1,
      className: "galleryImg"
    },
    {
      id: 4,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/western-3.jpg",
      width: 1,
      height: 1,
      className: "galleryImg"
    },
    {
      id: 5,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/saari-2.jpg",
      width: 1,
      height: 2,
      className: "galleryImg"
    },
    {
      id: 6,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/girlsi-5.jpg",
      width: 1,
      height: 1,
      className: "galleryImg"
    },
    {
      id: 7,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/girlsi-4.jpg",
      width: 1,
      height: 1,
      className: "galleryImg"
    },
    {
      id: 8,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/western-2.jpg",
      width: 1,
      height: 2,
      className: "galleryImg"
    },
    {
      id: 9,
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/kurta-.jpg",
      width: 3,
      height: 3,
      className: "galleryImg"
    }

  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="bg-pink-600 p-8 font-semibold">
      <h1 className="text-4xl text-center my-8">Featured Product</h1>
      <div className="w-[80%] m-auto">

        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,

                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  )
}

export default FeaturedProduct