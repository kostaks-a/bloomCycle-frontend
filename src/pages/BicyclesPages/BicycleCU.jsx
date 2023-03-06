import { useState } from 'react'
import BikeCreateForm from '../../components/BikeCreateForm';
import { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import { useParams } from 'react-router-dom';
import BikeUpdateForm from '../../components/BikeUpdateForm';

const Bicycle = () => {
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [condition, setCondition] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");


    const params = useParams().bike;
    const {token} = useContext(SessionContext)
    const {currentUser} = useContext(SessionContext)



    return (
        <>
        <h1>Bike ad</h1>
        { params === "create" ? 
            <BikeCreateForm
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
            token={token}
            currentUser={currentUser}
        />
        :
        <BikeUpdateForm
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
            params = {params}
            token={token}
            currentUser={currentUser}
        />


        }
    </>

    )
}



export default Bicycle