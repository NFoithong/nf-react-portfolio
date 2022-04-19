import React from 'react';
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';

function PortfoliosPage() {

    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);

  return (
    <div className='PortfoliosPage'>
        <Title title={'Portfolios'} span = {'Portfolios'} /> 
        <div className="portfolios">
            <Categories />
            <MenuItems menuItem={menuItems}/>
        </div>
    </div>
    
  )
}

export default PortfoliosPage;