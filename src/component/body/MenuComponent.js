import { useState } from 'react'
import MenuItem from './MenuItem'
import DISHES from '../../data/dishes';

const MenuComponent = () => {
    const [dishes] = useState(DISHES);
    const menu = dishes.map((dish) => {
        return (<MenuItem dish={dish} key={dish.id}/>)
    });
    return (
        <div className='container'>
            <div className='row' >
                <div className='col-5'>
                    {menu}
                </div>
            </div>
        </div>
    )
}

export default MenuComponent