import { useContext, useState } from 'react';
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
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
    </ul>
    <button onClick={onCartClickHander}>Cart</button>
    <sup>{cartCtx.items.length}</sup>
    {showCart && <Cart onXClick={onXClickHandler}/>}
    <h1 className={classes.heading}>The Generics</h1></>
}

export default Heading;