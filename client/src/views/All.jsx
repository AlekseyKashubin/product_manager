import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const AllItems = () => {


    const [items, setItems] = useState([]);

    const fetchItems = ()=>{
        axios.get('http://localhost:8000/api/products')
        .then(res=>console.log(res.data))
        .then(res=>setItems(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(fetchItems, [])



    return (
        <div>
        <h1>All the items</h1>




            {items.map((item, i) =>
                <p key={i}>{item.name}, {item.price}, {item.discription} </p>
            )}

        </div>
    )
}

export default AllItems
