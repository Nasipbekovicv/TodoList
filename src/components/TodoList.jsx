
import { Input } from 'antd';

// eslint-disable-next-line react/prop-types
const TodoList = ({onChange, onAdd, child, onEditChangeInput}) => {
  return (
    <div>
        <div className='input-block'>
        <Input placeholder="Basic usage" onChange={onChange} />
        </div>
        <div>
            <button onClick={onAdd} >OnAdd</button>
        </div>
        <div>
            <ul>
                {child}
            </ul>
        </div>
    </div>
  )
}

export default TodoList