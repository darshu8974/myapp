function displayName(props) {
  return (
    <div>
          <h1>{props.name}</h1>
    </div>
  )
}

import React from 'react'

export default function ListProps() {
    const students =["Darshan","Deepak","Akash"]
    const sName=students.map((stu)=><displayName name ={stu}/>)
  return (
    <div>
      {sName}
    </div>
  )
}

