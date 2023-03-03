import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PlantForm from '../../components/PlantForm';


const Plant = () => {
    const [variety, setVariety] = useState("");
    const [size, setSize] = useState("");
    const [age, setAge] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        const body = { variety: variety, size: size, age: age, price: price, description: description, image: image }
        try {
            await axios.post("http://localhost:5005/plants", body);
            navigate("/profile")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <h1>Plant ad</h1>
        <PlantForm
            variety={variety}
            setVariety={setVariety}
            size={size}
            setSize={setSize}
            age={age}
            setAge={setAge}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            image={image}
            setImage={setImage}
            handleSubmit={handleSubmit}
        />
    </>
    )
}



export default Plant