import React from 'react'

import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["matheus","diego","josias"])

    const [users,setUsers] = useState([
        {id:1,name:'diego',age:20},
        {id:2,name:'josias',age:50},
        {id:3,name:'matheus',age:30},
        {id:4,name:'joão',age:20},
        {id:5,name:'lucas',age:20},
    ])
  return (
    <div>
        <ul>
            {list.map(item =>(
                <li>{item}</li>
            ))}
        </ul>

        <div>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name} - {user.age}anos</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ListRender