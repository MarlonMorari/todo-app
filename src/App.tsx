import ToDoHeader from './components/ToDoHeader';
import ToDoFormInput from './components/ToDoFormInput';
import ToDoList from './components/ToDoList';
import { ToDoContainer } from './components/ToDoContainer';
import { useToDo } from './hooks/useToDo';

function App() {

  const { addToDo, toggleToDoCompleted, filteredToDos, setFilter, filter, clearCompleted, removeToDo } = useToDo();

  return (
    <ToDoContainer>
      <ToDoHeader></ToDoHeader>

      <ToDoFormInput addToDo={addToDo}></ToDoFormInput>

      <ToDoList
        toDoList={filteredToDos}
        toggleToDoCompleted={toggleToDoCompleted}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompleted}
        removeToDo={removeToDo}></ToDoList>
    </ToDoContainer>


  )
}

export default App