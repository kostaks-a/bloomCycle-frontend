import { useState , useContext} from 'react'
import { Navigate } from "react-router-dom";
import { SessionContext } from '../../contexts/SessionContext';
import { useParams } from 'react-router-dom';
import PlantCreateForm from '../../components/PlantCreateForm';
import PlantUpdateForm from '../../components/PlantUpdateForm';


const Plant = () => {
    const [variety, setVariety] = useState("");
    const [size, setSize] = useState("");
    const [age, setAge] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    
    const params = useParams().plant;
    const {token} = useContext(SessionContext)
    const {currentUser} = useContext(SessionContext)



    return (
        <div className="pageswithfooter">
        { params === "create" ?
        <PlantCreateForm
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
            token={token}
            params={params}
            currentUser={currentUser}
        />
        :
        <PlantUpdateForm
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
            params={params}
            token={token}
            currentUser={currentUser}
        />
        }
    </div>
    )
}



export default Plant