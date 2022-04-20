import React from 'react';
import Title from '../Components/Title';
// import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';

const allCategories = ['All', ...new Set(portfolios.map(item=>item.category))];
console.log(allCategories);


function PortfoliosPage() {

    // const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        const filteredData = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
  return (
    <div className='PortfoliosPage'>
        <Title title={'Portfolios'} span = {'Portfolios'} /> 
        <div className="portfolios">
            {/* <Categories filter={filter} categories={categories}/> */}
            <MenuItems menuItem={menuItems}/>
        </div>
    </div>
    
  )
}

export default PortfoliosPage;