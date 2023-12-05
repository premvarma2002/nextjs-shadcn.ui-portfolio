import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import ThemeToggler from './ThemeToggler'

const header = () => {
  return (
    <header>
        <ThemeToggler/>
    </header>
  )
}

export default header