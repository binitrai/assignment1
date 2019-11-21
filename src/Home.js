import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await fetch(
            'https://api.myjson.com/bins/j82l2'
        );  
        const items = await response.json();
        setItems(items);
    };

    const bookItems = items.slice(0, 20).map((item) =>
        <div className='post-module hover' key={item.isbn}>
            <div className='thumbnail'>
                <img src={item.thumbnailUrl} alt={item.longDescription}/>
            </div>
            <div className='post-content'>
                <Link to={{pathname: `/bookdetails:${item.isbn}`}}>   
                <h2 className='title'>{item.title}</h2></Link>
                <p className='description'>
                    {item.longDescription}
                </p>
                <div className='post-meta'></div>
            </div>
            <div className='post-button'>
                <button className='btn-danger'>Buy Now</button>
                <button className='btn-success'>Add to Cart</button>
            </div>
        </div>
    ); 

    return (
        <div className='flexcontainer'>{bookItems}</div>  
    );
}

export default Home;
