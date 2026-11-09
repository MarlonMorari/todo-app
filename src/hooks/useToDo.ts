import { useState, type FormEvent } from 'react'


export interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

export const useToDo = () => {
    const [toDoList, setToDoList] = useState<ToDo[]>([]);

    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>("all");

    const addToDo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const toDoItem = formData.get("todo") as string;

        if (!toDoItem.trim()) return

        setToDoList(prev => [...prev, {
            id: Date.now(),
            text: toDoItem,
            completed: false
        }])

        event.currentTarget.reset()

        setFilter("all")
    }

    const toggleToDoCompleted = (id: number) => {

        const newToDoList = toDoList.map(toDo => {
            if (id === toDo.id) {
                const completed = !toDo.completed;

                return {
                    ...toDo,
                    completed,
                }
            }

            return toDo;

        })

        setToDoList(newToDoList);
    }

    const filteredToDos = toDoList.filter(toDo => {
        if (filter === 'active') return !toDo.completed;
        if (filter === 'completed') return toDo.completed;
        return true
    })

    const clearCompleted = () => {
        setToDoList(prev => prev.filter(toDo => !toDo.completed))
    }

    const removeToDo = (id: number) => {
        setToDoList(prev => prev.filter(todo => todo.id !== id))
    }

    return {
        addToDo,
        toggleToDoCompleted,
        filteredToDos,
        setFilter,
        filter,
        clearCompleted,
        removeToDo
    }
}