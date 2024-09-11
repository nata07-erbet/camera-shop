import { BasketCard } from '../../components/basket-card/basket-card';
import { TCamera } from '../../types/product.types';

type BasketCardProps = {
  basketProducts: TCamera[];
  onClickDeleteProduct?: (id: TCamera['id']) => void;
  isShowItem: boolean;
}

function BasketList({ basketProducts, onClickDeleteProduct, isShowItem }: BasketCardProps) {
  return (
    <ul className="basket__list">
      {basketProducts.map((product) => (
        <BasketCard
          product={product}
          key={product.id}
          onClickDeleteProduct={onClickDeleteProduct}
          isShowItem={isShowItem}
        />
      ))}
    </ul>
  );
}

export { BasketList };
