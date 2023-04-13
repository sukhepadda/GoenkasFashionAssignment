import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function FeaturedProduct() {
  const photos = [
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/girls21-copy.jpg",
      width: 1,
      height: 1
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/kurtaSUIT.jpg",
      width: 1,
      height: 1
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/wf.jpg",
      width: 2,
      height: 1
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/saari-1.jpg",
      width: 1,
      height: 1
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/girlsi-3.jpg",
      width: 1,
      height: 1
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/saari-2.jpg",
      width: 1,
      height: 2
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/girlsi-5.jpg",
      width: 1,
      height: 1
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/girlsi-4.jpg",
      width: 1,
      height: 1
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/western-2.jpg",
      width: 1,
      height: 2
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/western-1.jpg",
      width: 1,
      height: 1
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/kurta-.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/western-5.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/western-3.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/ug14.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/girlsi-1.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/zari-embroidered-soft-silk-royal-blue-saree-sarv117455-1.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/saari-4.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/girls-2.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/sari.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/western-4.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://goenkasfashion.com/wp-content/uploads/2022/12/saari-3.jpg",
      width: 4,
      height: 3
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback(( { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default FeaturedProduct