import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import { styled } from "styled-components";

const Review = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    const number = i + 0.5;

    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Div>
      <div className="star">{ratingStar}</div>
      <p className="review">{reviews} : Customers Review</p>
    </Div>
  );
};


const Div = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  .star {
    display: flex;
    align-items: center;
    gap: 5px;
    color: goldenrod;
    font-size: 20px;
  }

  .review{
    font-size: 16px;
    color: black;
  }
`

export default Review;
