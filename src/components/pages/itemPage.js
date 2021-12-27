import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {
  menuLoaded,
  menuRequested,
  menuError,
  addToCart,
} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import './itemPage.scss';

class ItemPage extends Component {
  componentDidMount() {
    if (this.props.menuItems.length === 0) {
      this.props.menuRequested();

      const { RestoService } = this.props;
      RestoService.getMenuItems()
        .then((res) => this.props.menuLoaded(res))
        .catch(() => this.props.menuOnError());
    }
  }

  render() {
    const { menuItems, error, loading } = this.props;

    if (error) {
      return <Error />;
    }

    if (loading || menuItems.length === 0) {
      return <Spinner />;
    }


    const item = menuItems.find(
      (el) => +el.id === +this.props.match.params.id
    );
    const { title, url, category, price, id } = item;

    return (
      <div className="item_page">
        <div className="menu__item item_block">
          <div className="menu__title">{title}</div>
          <img className="menu__img" src={url} alt={title}></img>
          <div className="menu__category">
            Category: <span>{category}</span>
          </div>
          <div className="menu__price">
            Price: <span>{price}$</span>
          </div>
          <button
            onClick={() => this.props.addToCart(id)}
            className="menu__btn"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
  };
};

const mapDispatchToProps = {
  menuLoaded,
  menuRequested,
  menuError,
  addToCart,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(ItemPage)
);
