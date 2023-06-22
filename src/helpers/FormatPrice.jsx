/* eslint-disable react/prop-types */

const FormatPrice = ({ price }) => {
  return (
    <>
      <p>
        {new Intl.NumberFormat("bn", {
          style: "currency",
          currency: "BDT",
        }).format(price / 100)}
      </p>
    </>
  );
};

export default FormatPrice;
