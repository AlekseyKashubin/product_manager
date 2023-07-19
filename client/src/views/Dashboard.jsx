import React, { useEffect, useState } from 'react'
import axios from 'axios';
import One from './One';
import NewProduct from './New';
import { Link } from 'react-router-dom';






const Dashboard = () => {
    const [items, setItems] = useState([])


    const fetchItem = () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setItems(res.data))
            .catch(err => console.error(err));
    }

    useEffect(fetchItem, []);

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(()=>fetchItem())
        .catch(err=>{console.log(err)})
        
    }



    return (
        <div>
        <NewProduct createNew={fetchItem}/>
        <h3>All Prodcuts</h3>
        {items.map( (item, index)=> {
            return (
                
                <div key={index}>
                
                    <Link to={`/one/${item._id}`}>{item.name}</Link>
                    <button onClick={()=>handleDelete(item._id)}>Delete</button>
                    
                    <hr/>

                </div>
            )
        })}

        </div>
    )
}

export default Dashboard