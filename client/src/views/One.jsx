import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate  } from 'react-router-dom'

const One = () => {

    const { id } = useParams()

    const navigator = useNavigate()
    const [itemData, setItemData] = useState({})

    const getItemData = () =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>setItemData(res.data))
        .catch(err=>console.log(err))

    }

useEffect(getItemData, [])

const handleDelete = (id)=>{
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(res=>navigator('/'))
    .catch(err=>{console.log(err)})
    
}

    return (
        <div>
            <div className='oneCard'>
                <p className='oneName'>{itemData.name}</p>
                <p className='oneDesc'>{itemData.price}</p>
                <p className='oneDesc'>{itemData.discription}</p>
                <button onClick={() => { navigator(`/edit/${itemData._id}`) }}>Update</button>
                <button onClick={()=>handleDelete(itemData._id)}>Delete</button>
            </div>

        </div>
    )
}

export default One
