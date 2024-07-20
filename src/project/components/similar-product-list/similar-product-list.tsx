import { TCamera } from '../../types/product.types';
import { ProductCard } from '../product-card/product-card';

type SimilarProductListProps = {
  similarProducts: TCamera[];
}

function SimilarProductList({ similarProducts }: SimilarProductListProps) {
  return (
    <div className="product-similar__slider-list">
      {similarProducts.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
}

export { SimilarProductList };
