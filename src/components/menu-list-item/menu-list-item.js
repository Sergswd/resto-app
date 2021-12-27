import React from 'react';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';

const MenuListItem = ({ menuItem, addToCart }) => {
  const { title, price, url, category, id } = menuItem;
  return (
    <li className="menu__item">
      <Link to={`/${id}`}>
        <div className="menu__title">{title}</div>
      </Link>
      <img className="menu__img" src={url} alt={title}></img>
      <div className="menu__category">
        Category: <span>{category}</span>
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>
      <button className="menu__btn" onClick={() => addToCart()}>
        Add to cart
      </button>
      <span className={`menu__category_Img ${category}`}></span>
    </li>
  );
};

export default MenuListItem;