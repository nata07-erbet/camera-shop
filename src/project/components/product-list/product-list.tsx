import { ProductCard } from '../../components/product-card/product-card';
import { TCamera } from '../../types/product.types';

type ProductListProps = {
  getCameras: TCamera[];
};

function ProductList({ getCameras }: ProductListProps) {
  return (
    <div className="cards catalog__cards">
      {getCameras.map((camera) => (
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
