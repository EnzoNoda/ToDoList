import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

function DoneImg(props) {
  if (props.done) {
    return <img alt="done" src="./assets/check.png"></img>
  } else {
    return <img alt="undone" src="./assets/uncheck.png"></img>
  }
}

function List(props) {
  const items = useSelector(state => state)

  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item}></ListItem>
      ))}
    </ul>
  )
}

export default List
