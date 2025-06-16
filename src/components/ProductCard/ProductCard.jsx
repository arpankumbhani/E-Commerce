import React from "react";
import {
  FaStar,
  FaRegHeart,
  FaEye,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }

    return stars;
  };
  return (
    <div className="group rounded-lg w-[270px] bg-white relative min-h-[300px] flex flex-col justify-between">
      <div className="bg-[#F5F5F5] rounded-t-lg relative">
        <div className="p-4 rounded-lg relative">
          {product?.discount && (
            <div className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-[2px] rounded">
              {product?.discount}
            </div>
          )}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <div className="bg-white p-1.5 rounded-full shadow cursor-pointer">
              <FaRegHeart className="text-gray-700 text-sm" />
            </div>
            <div className="bg-white p-1.5 rounded-full shadow cursor-pointer">
              <FaEye className="text-gray-700 text-sm" />
            </div>
          </div>

          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-32 object-contain mx-auto mt-4"
          />
        </div>
        <button className="w-full bg-black text-white text-sm py-2 mt-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>
      <div className="pt-4 flex flex-col flex-grow">
        <h3 className="text-sm font-semibold text-black mb-2">
          {product?.title}
        </h3>

        {product?.oldPrice ? (
          <>
            <div className="mb-2">
              <span className="text-[#DB4444] font-semibold mr-2">
                ${product?.price}
              </span>
              <span className="text-gray-500 font-semibold line-through text-sm">
                ${product?.oldPrice}
              </span>
            </div>
            <div className="flex items-center text-yellow-500 text-sm">
              {renderStars(product?.rating || 0)}
              <span className="text-gray-500 font-semibold ml-2">
                ({product?.reviews})
              </span>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3 text-sm mb-2">
            <span className="text-red-500 font-semibold">
              ${product?.price}
            </span>
            <div className="flex items-center text-yellow-500">
              {renderStars(product?.rating || 0)}
              <span className="text-gray-500 font-semibold ml-2">
                ({product?.reviews})
              </span>
            </div>
          </div>
        )}
        {product?.colors && (
          <div className="flex gap-2 mt-2">
            {product.colors.map((c, i) => (
              <span
                key={i}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
