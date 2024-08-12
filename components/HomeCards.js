import React from 'react';
import "../style/style.css";

const BlogCard = ({ image, title, intro }) => {
    return (
        <div className='blog-card'>
            <img src={image} alt={title} className='blog-card-image'/>
            <h3 className='blog-card-title'>{title}</h3>
            <h3 className='blog-card-intro'>{intro}</h3>
        </div>
    );
}

export default BlogCard;
