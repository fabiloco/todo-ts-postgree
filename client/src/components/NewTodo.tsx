import React from 'react';
import { VscAdd } from 'react-icons/vsc';

import Button from "./Button";

import axios from 'axios';

export type _NewTodo = {
    description: string;
};

type NewTodoProps = {
    reloadTodoList: Function;
};

const NewTodo = (props: NewTodoProps):JSX.Element => {
    const [newTodo, setNewTodo] = React.useState<_NewTodo>({ description: "" });

    const handleNewTodo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/todos', newTodo);
        } catch(error: unknown) {
            console.error('Error fetching create todos: ' + (error as Error).message);
        };
        props.reloadTodoList();
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({ description: e.target.value });
    };

    return(
        <form className="w-full flex">
            <input
                className="input"
                type="text"
                placeholder="some description..."
                onChange={handleInput}
            />
            <Button 
                icon={VscAdd}
                danger={false}
                buttonAction={handleNewTodo}
            />
        </form>
    );
};

export default NewTodo;