import { TCamera } from '../../types/product.types';
import { ProductCard } from '../../components/product-card/product-card';

type SimilarProductProps = {
  similarProducts: TCamera[];
}

function SimilarProduct({ similarProducts }: SimilarProductProps) {
  return (
    <div className="product-card is-active">
      {similarProducts.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
}

export { SimilarProduct };
