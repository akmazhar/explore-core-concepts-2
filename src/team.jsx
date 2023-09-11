
import { useState } from "react"

export default function Team(){
    const [Team, setTeam] = useState(11);
 
 const teamStyle = {
    border: '8px solid blue',
    margin: '15px',
    padding: '15px',
    borderRadius: '20px',
 }
 
 
    return (
    <div style={teamStyle}>
       <h3>Players:{Team(12)}</h3> 
    </div>
  )

}


