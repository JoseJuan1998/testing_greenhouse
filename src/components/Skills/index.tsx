import React, { useEffect, useState } from 'react'
import { SkillsProps } from './Skills.types'

function Skills({ skills = [], incrementHandler }: SkillsProps) {
  const [isLogged, setIsLogged] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIsLogged(true)
    }, 1000)
  }, [])

  if (skills.length === 0) return <h1>Empty</h1>

  return (
    <>
      <ul>
        {
          skills.map(skill => <li key={skill}>{skill}</li>)
        }
        {
          isLogged ?
          <button>Start Learnig</button>
          :
          <button onClick={() => setIsLogged(true)}>Login</button>
        }
      </ul>
      {
        incrementHandler &&
        <button onClick={incrementHandler}>Increment</button>
      }
    </>
  )
}

export default Skills