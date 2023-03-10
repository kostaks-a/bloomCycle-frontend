import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from "react";
import BikeCard from '../components/BikeCard';
import PlantCard from '../components/PlantCard';
import { SessionContext } from '../contexts/SessionContext';



function UserProfile() {

const username = useParams().username
const [userId, setUserId] = useState('')
const [profile, setProfile] = useState('')
const [userPlants , setUserPlants] = useState([])
const [userBikes, setUserBikes] = useState([])

const { token } = useContext(SessionContext);
const { currentUser } = useContext(SessionContext);

const getProfile = async () => {
  try {
    const grabToken = window.localStorage.getItem("bearer");
    //console.log(bike._id)
    const response = await axios.get(
      `${import.meta.env.VITE_HOST}/auth/${username}`,
      {
        headers: {
          Authorization: `Bearer ${grabToken}`,
        },
      }
    );
    console.log(response.data);
    setProfile(response.data)
    setUserId(response.data.id)
  } catch (error) {
    console.log(error);
  }
};

const fetchUserPlants = async () => {
  const grabToken = window.localStorage.getItem("bearer");
  if (userId) {  try {
  
    const response = await axios.get(
      `${import.meta.env.VITE_HOST}/plants/personalAds/${userId}`,
      {
        headers: {
          authorization: `Bearer ${grabToken}`,
        },
      }
    );
    setUserPlants(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }}//console.log(user)

};

const fetchUserBikes = async () => {
  const grabToken = window.localStorage.getItem("bearer");
  if (userId) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_HOST}/bicycles/personalAds/${userId}`,
      {
        headers: {
          authorization: `Bearer ${grabToken}`,
        },
      }
    );
    setUserBikes(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
};



useEffect(() => {
  getProfile()
}, []);


useEffect(() => {
  fetchUserBikes()
  fetchUserPlants()
}, [userId]);


  return (
    <>
    <div style = {{display: 'flex' , gap:'100px'}}>
    {profile &&
    <div>
        <p>User: {profile.username}</p>
        <p>location: {profile.location}</p>
        <p>Number {profile.number}</p>
    </div>
    }
    {userBikes.length &&
    <div>
        {userBikes.map((bike) => {
            return (
              <BikeCard
                currentUser={currentUser}
                token={token}
                key={bike._id}
                bicycles={userBikes}
                setBicycles={setUserBikes}
                bike={bike}
              />
            );
          })}
    </div>
    }
    {userPlants.length && 
    <div>
    {userPlants.map((plant) => {
            return (
              <PlantCard
                currentUser={currentUser}
                token={token}
                key={plant._id}
                plants={userPlants}
                setPlants={setUserPlants}
                plant={plant}
              />
            );
          })}
    </div>
    }
    </div>
    </>

  )
}

export default UserProfile