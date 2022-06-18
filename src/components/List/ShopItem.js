import PropTypes from 'prop-types';

const ShopItem = (props) => {
  const { item, buttonTitle } = props;
  return (
    <li
      className='d-flex justify-content-between align-items-center mb-2'
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div style={{ width: '75px', height: '75px' }}>
        <img className='w-100' src={item.img} alt={item.name} />
      </div>
      <div style={{ textTransform: 'uppercase' }}>{item.name}</div>
      <div>{item.color}</div>
      <div>{'$' + item.price}</div>
      <button className='btn btn-danger rounded-pill me-2'>
        {buttonTitle}
      </button>
    </li>
  );
};

ShopItem.propTypes = {
  item: PropTypes.array.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};
export default ShopItem;
