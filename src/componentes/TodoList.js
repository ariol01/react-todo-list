import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";
export const TodoList = () => {

    const defaultListItems = [
        { name: 'tarefea 1', isCompleted: false },
        { name: 'tarefea 2', isCompleted: false },
        { name: 'tarefea 3', isCompleted: false },
        { name: 'tarefea 4', isCompleted: false }
    ]

    const [Items, setItems] = useState(defaultListItems)

    return (

        <ul>
            {Items.map(item => <TodoListItem item={item}/> ) }

        </ul>

            )

}




