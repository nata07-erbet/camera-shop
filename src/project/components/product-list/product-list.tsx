import { ProductCard } from '../../components/product-card/product-card';
import { TCamera } from '../../types/product.types';

type ProductListProps = {
  cameras: TCamera[];
};

function ProductList({ cameras }: ProductListProps) {
  return (
    <div className="cards catalog__cards">
      {cameras.map((camera) => (
        <ProductCard
          key={camera.id}
          product={camera}
        />
      )
      )}
    </div>
  );
}

export { ProductList };
