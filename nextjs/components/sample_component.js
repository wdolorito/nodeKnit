import { useContext, useEffect } from 'react'
import SampleContext from '../context/sample_context'

export default function SampleComponent() {
  const { contextValue, setContextValue } = useContext(SampleContext)

  useEffect(() => {
    console.log('Hello World!')
  },[])

  return(
    <>
      Something interesting.
    </>
  )
}