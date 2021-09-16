import React from "react";
import Button from "./Button";

import { BiRightArrowAlt } from 'react-icons/bi';

import { Todo } from './Home';
import { _NewTodo } from './NewTodo';

import axios from 'axios';

type ModalProps = {
    handleVisibility: React.MouseEventHandler<HTMLDivElement>;
    reloadTodoList: Function;
    oldTodo: Todo;
};

const Modal = (props: ModalProps) => {
    const [editedTodo, setEditedTodo] = React.useState<_NewTodo>({ description: "" });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTodo({ description: e.target.value });
    };

    const handleEditAction = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/todos/${props.oldTodo.todo_id}`, editedTodo);
        } catch(error: unknown) {
            console.error('Error fetching post todo: ' + (error as Error).message);
        };
        props.reloadTodoList();
    };

    const handleModalVisibility = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as Element;
        if(target.classList.contains('popup__container')) {
            props.handleVisibility(e);
        }
    };

    return(
        <div className="popup__container"
            onClick={handleModalVisibility}
        >
            <div className="modal__container">
                <p className="text-2xl font-bold mb-4">📝 Edit todo</p>
                <p className="mb-2">Inser a new description</p>
                <div className="flex">
                    <input
                        className="input mr-3"
                        name="description"
                        type="text"
                        placeholder="some description..."
                        onChange={handleInput}
                    />
                    <Button 
                        icon={BiRightArrowAlt}
                        danger={false}
                        buttonAction={handleEditAction}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;