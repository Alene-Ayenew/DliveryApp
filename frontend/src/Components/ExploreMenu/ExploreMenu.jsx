import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
function ExploreMenu() {
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore Our Menu</h1>
       <p className='explore-menu-text'>choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and satisfy 
        your craving and elevate your dining experience,
         one delicious meal at a time</p>
         <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div className="menu-list-item">
                        <img src={item.menu_image} alt="" />
                        {item.menu_name}
                    </div>
                )
            })}
         </div>
    </div>
  )
}

export default ExploreMenu