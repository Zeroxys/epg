import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import IndexPage from "./index";
import '@testing-library/jest-dom'

test('Print EPG button', () => {

    const sut = render(<IndexPage />)
    const buttonTittle = sut.getAllByText('lele')
    expect(buttonTittle).toBeInTheDocument()
  
})
