import { ProductCard } from '../../components/product-card/product-card';
import { TCamera } from '../../types/product.types';

type ProductListProps = {
  getCameras: TCamera[];
  onButtonBuyClick?: (id: TCamera['id']) => void;
};

function ProductList({ getCameras, onButtonBuyClick }: ProductListProps) {
  return (
    <div className="cards catalog__cards">
      {getCameras.map((camera) => (
        <ProductCard
          key={camera.id}
          product={camera}
          onButtonBuyClick={onButtonBuyClick}
        />
      )
      )}
    </div>
  );
}

export { ProductList };
