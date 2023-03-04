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




    return (
        <>
        <h1>Bike ad</h1>
        { 
             ? value1
        : condition2 ? value2
        }

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
         //   handleSubmit={handleSubmit}
        />
    </>

    )
}



export default Bicycle