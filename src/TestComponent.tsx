import React, { useState } from 'react'

interface Props {
  text: string
}

interface UserData {
  id: number
  name: string
}


export const TestComponent:React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(0)
  const [user, setUser] = useState<UserData>({id: 1, name:'dummy'})
  // setCount(1)
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{count}</h2>
    </div>
  )
}

export default TestComponent;