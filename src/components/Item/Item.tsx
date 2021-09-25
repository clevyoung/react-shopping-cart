import { Button } from '@material-ui/core';

import { CartItemType } from '../../App';
import { Wrapper } from './item.styles';

interface Props {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const { image, title, description, price } = item;

  return (
    <Wrapper>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <h3>${price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
