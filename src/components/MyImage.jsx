/* eslint-disable react/prop-types */
import { useState } from "react";
import { styled } from "styled-components";

const MyImage = ({ image }) => {
  const [mainImage, setMainImage] = useState(image && image[0]);

  return (
    <Div>
      <div className="thumbnail-image">
        {image &&
          image.map((item) => {
            return (
              <div
                key={item.id}
                className="image-box"
                onClick={() => setMainImage(item)}
                style={{cursor: "pointer"}}
              >
                <img src={item.url} alt={item.filename} />
              </div>
            );
          })}
      </div>
      <div className="main-image">
        {image && <img src={mainImage.url} alt={mainImage.filename} />}
      </div>
    </Div>
  );
};

const Div = styled.div`
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  align-items: center;
  justify-content: center;

  .thumbnail-image {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    .image-box {
      height: 70px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .main-image {
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default MyImage;
