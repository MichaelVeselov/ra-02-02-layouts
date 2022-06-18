import ShopItem from './ShopItem';
import nextId from 'react-id-generator';
import PropTypes from 'prop-types';

const ListView = (props) => {
  const { products, buttonTitle } = props;
  const elements = products.map((element) => {
    return <ShopItem key={nextId()} item={element} buttonTitle={buttonTitle} />;
  });
  return <ul className='list-unstyled'>{elements}</ul>;
};

ListView.propTypes = {
  products: PropTypes.array.isRequired,
  buttonTitle: PropTypes.string,
};

export default ListView;
