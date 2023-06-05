// Write your code here

import './index.css'

const TodoItem = props => {
  const {title, deleteBtn, id} = props

  const onDelete = () => {
    deleteBtn(id)
  }

  return (
    <li className="list-item-container">
      <p className="heading">{title}</p>
      <button className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
