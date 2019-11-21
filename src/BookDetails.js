import React, { useState, useEffect } from 'react';
import './App.css';

function BookDetails(props) {
  	useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    
    const fetchItems = async () => {
        const response = await fetch(
            'https://api.myjson.com/bins/j82l2'
        );  
        const itemsValue = await response.json();
        const items = itemsValue.slice(0, 20); 
        setItems(items);
    }

    const bookItems = items.filter(items => { 
		var myString = props.match.params.id;
		var _id = myString.substr(1);
		return items.isbn == _id;
	});	

    return (
         <React.Fragment>
      {bookItems}
    </React.Fragment>
    );
}

export default BookDetails;
