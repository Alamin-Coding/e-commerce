/* eslint-disable react/prop-types */

const FormatPrice = ({ price }) => {
  return (
    <div>
      {new Intl.NumberFormat("bn", {
        style: "currency",
        currency: "BDT",
      }).format(price / 100)}
    </div>
  );
};

export default FormatPrice;
