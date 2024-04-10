import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.category}/${product.id}`}>
      <div className="p-4 cursor-pointer product-data">
        <div className="border rounded-lg overflow-hidden product-card shadow-xl">
          <img src={product.image} alt={product.title} className="w-full h-48 product-img" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 product-title">{product.title}</h3>
            <p className="text-gray-600 mb-2 product-category">{product.category}</p>
            <p className="mb-2 product-price" >${product.price}</p>
            <p className="text-sm text-gray-500 mb-2 product-description">{product.description}</p>
            <div className="flex product-count">
              <p className="text-sm text-gray-500 mr-2 product-rating">{product.rating.count} Ratings</p>
              <p className="text-sm text-gray-500">{product.rating.rate} Stars</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;