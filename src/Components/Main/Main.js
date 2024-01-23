import React from 'react'
import Corosel from '../Corosel/Corosel'
import Category from '../Category/Category'

export default function Main() {
  return (
    <>
      <Category />
      <Corosel />
      <h1 style={{ 'min-height': '400px' }}>This is Main Component</h1>
    </>
  )
}
