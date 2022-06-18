import { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './Cards/CardsView';
import ListView from './List/ListView';
import products from './data/products';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'view_list',
    };
  }

  onSwitch = (e) => {
    let icon = e.target.textContent;
    if (icon === 'view_list') {
      icon = 'view_module';
    } else {
      icon = 'view_list';
    }
    this.setState({ icon });
  };

  render() {
    return (
      <div>
        <IconSwitch icon={this.state.icon} onSwitch={this.onSwitch} />

        {this.state.icon === 'view_module' && (
          <CardsView products={products} buttonTitle={'Add to cart'} />
        )}

        {this.state.icon === 'view_list' && (
          <ListView products={products} buttonTitle={'Add to cart'} />
        )}
      </div>
    );
  }
}
export default Store;
