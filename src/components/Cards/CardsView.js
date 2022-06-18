import ShopCard from './ShopCard';
import nextId from 'react-id-generator';
import PropTypes from 'prop-types';

const CardsView = (props) => {
  const { products, buttonTitle } = props;
  const elements = products.map((element) => {
    return <ShopCard key={nextId()} item={element} buttonTitle={buttonTitle} />;
  });
  return (
    <ul
      className='list-unstyled d-flex flex-wrap justify-content-evenly my-0 mx-auto'
      style={{ width: '1200px' }}
    >
      {elements}
    </ul>
  );
};

CardsView.propTypes = {
  products: PropTypes.array.isRequired,
  buttonTitle: PropTypes.string,
};

export default CardsView;
