import { StyledEditAndDeleteModal } from './styles/editAndDelete.styled'
import { FaEdit, FaTrash } from 'react-icons/fa'

const EditAndDelete = ({id, handleDelete, handleUpdate}: any) => {
  return (
    <StyledEditAndDeleteModal>
      <ul>
        <li onClick={() => handleUpdate(id)}>
          <FaEdit className="m-icon" />
          Edit
        </li>
        <li onClick={() => handleDelete(id)}>
          <FaTrash className="m-icon" />
          Delete
        </li>
      </ul>
    </StyledEditAndDeleteModal>
  )
}

export default EditAndDelete