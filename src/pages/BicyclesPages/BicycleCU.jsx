import axios from 'axios';
import { useState } from 'react'
import { Navigate, redirect, useNavigate } from "react-router-dom";
import BikeForm from '../../components/BikeForm';
import { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';

const Bicycle = () => {
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [condition, setCondition] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    const {token} = useContext(SessionContext)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const body = { type: type, size: size, condition: condition, price: price, description: description, image: image }
        try {
            await axios.post("http://localhost:5005/bicycles/newbicycle", body , {
                headers : {
                    Authorization: `Bearer ${token}`
                },
            });
            navigate("/allbicycles");
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <>
        <h1>Bike ad</h1>
        <BikeForm
            type={type}
            setType={setType}
            size={size}
            setSize={setSize}
            condition={condition}
            setCondition={setCondition}
            price={price}
            setPrice={setPrice}
            description={description}
            setDescription={setDescription}
            image={image}
            setImage={setImage}
            handleSubmit={handleSubmit}
        />
    </>

    )
}



export default Bicycle