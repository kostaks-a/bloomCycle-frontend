import { AppShell, Box, Button, Header } from '@mantine/core'
import { useEffect } from 'react'
import { Link } from "react-router-dom";


function DisplayPlant({plant}) {


  return (
        <>
        <div key={plant._id} className="singleCard">
                    <div>
                      <img
                        src='/./monstera.jpg'
                        alt={plant.name}
                        style={{ height: "150px" }}
                      />
                    </div>
                    <div className="singleCardText">
                      <h2>{plant.variety}</h2>
                      <h3>{plant.age}</h3>
                      <h4>{plant.description}</h4>
                      <h4>{plant.price}</h4>
                      <h4>{plant.owner}</h4>
                    </div>
                    <div>
                    </div>
                  </div>
        </>
  )

}

export default DisplayPlant