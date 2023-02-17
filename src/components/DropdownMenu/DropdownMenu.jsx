import { useState } from 'react'
import styles from './DropdownMenu.module.css'

function DropdownMenu(props) {
  const { children } = props

  const [isOpen, setIsOpen] = useState(false)

  function toggleOpen() {
    setIsOpen(
      (wasOpen) => !wasOpen
    )
  }

  return (
    <div onClick={toggleOpen}>
      <h1>Navigations</h1>
      {
        isOpen &&
        children
      }
    </div>
  )
}

export default DropdownMenu