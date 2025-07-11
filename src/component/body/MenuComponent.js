import { useState } from 'react'
import MenuItem from './MenuItem'
import DISHES from '../../data/dishes';
import DishDetailComponent from './DishDetailComponent';

const MenuComponent = () => {
    const [dishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);
    const onSelectDish = (dish) => { 
        setSelectedDish(dish);
    };
    const menu = dishes.map((dish) => {
        return (<MenuItem dish={dish} onSelectDish={onSelectDish} key={dish.id}/>)
    });
    const dishDetail = selectedDish ? <DishDetailComponent dish={selectedDish} /> : null;
    return (
        <div className='container'>
            <div className='row' >
                <div className='col-5'>{menu}</div>
                <div className='col-7'>{dishDetail}</div>
            </div>
        </div>
    )
}

export default MenuComponent