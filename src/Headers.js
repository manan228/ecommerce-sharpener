import { useContext, useState } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import Cart from './Cart';
import CartContext from './cart-context';
import classes from './Headers.module.css'

const Heading = () => {

    const cartCtx = useContext(CartContext)

    const [showCart, setShowCart] = useState(false)

    const onCartClickHander = () => {

        setShowCart(true)
    }

    const onXClickHandler = () => {

        setShowCart(false)
    }
    return <>
    <ul className={classes.menu}>
        {/* <Route path='/about'> */}
        <li>
            <NavLink to='/home'>Home</NavLink></li>
        <li>Store</li>
        <li>
            <NavLink to='/about'>About</NavLink></li>
        {/* </Route> */}
    </ul>
    <button onClick={onCartClickHander}>Cart</button>
    <sup>{cartCtx.items.length}</sup>
    {showCart && <Cart onXClick={onXClickHandler}/>}
    <h1 className={classes.heading}>The Generics</h1></>
}

export default Heading;