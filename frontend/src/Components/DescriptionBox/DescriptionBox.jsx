import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online. It facilitates the transaction between a buyer and seller. A digital storefront can serve as the virtual equivalent of the product shelves, sales staff, and cash register of a physical shop.</p>
                <p>India is one of the largest markets of e-commerce players. With giants like Amazon, Flipkart, Snapdeal, and Myntra, new entrants like PayTm Mall, Shopclues, etc are also establishing a strong hold in the Indian market.</p>
            </div>
        </div>
    )
}

export default DescriptionBox 