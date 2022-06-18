import PropTypes from 'prop-types';

const ShopCard = (props) => {
  const { item, buttonTitle } = props;
  return (
    <li
      className='m-4 p-4'
      style={{
        borderRadius: '20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        className='d-flex flex-column justify-content-center'
        style={{ width: '300px' }}
      >
        <div style={{ textTransform: 'uppercase' }}>{item.name}</div>
        <div className='mt-2'>{item.color}</div>
      </div>

      <div>
        <div style={{ width: '300px', height: '250px' }}>
          <img className='w-100' src={item.img} alt={item.name} />
        </div>
      </div>

      <div className='d-flex justify-content-around align-items-center mt-2'>
        <div style={{ color: 'red' }}>{'$' + item.price}</div>
        <button className='btn btn-danger rounded-pill'>{buttonTitle}</button>
      </div>
    </li>
  );
};

ShopCard.propTypes = {
  item: PropTypes.array.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default ShopCard;
