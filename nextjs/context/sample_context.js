import { createContext, useState } from 'react'

const SampleContext = createContext()

const SampleProvider = props => {
  const [ contextValue, setContextValue ] = useState('')

  const value = {
    contextValue,
    setContextValue
  }

  return (
    <SampleContext.Provider value={ value }>
      { props.children }
    </SampleContext.Provider>
  )
}

export { SampleContext as default, SampleProvider }