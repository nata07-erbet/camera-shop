import { BasketCard } from '../../components/basket-card/basket-card';
import { TCamera } from '../../types/product.types';

type BasketCardProps = {
  basketProducts: TCamera[];
}

function BasketList({ basketProducts }: BasketCardProps) {
  return (
    <ul className="basket__list">
      {basketProducts.map((product) => (
        <BasketCard
          product={product}
          key={product.id}
        />
      ))}

    </ul>
  );
}

export { BasketList };
