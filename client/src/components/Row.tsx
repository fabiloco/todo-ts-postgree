import { useState } from "react";

import { VscTrash, VscEdit } from 'react-icons/vsc';

import axios from 'axios';

import Button from "./Button";
import Modal from "./Modal";

import { Todo } from './Home';

type RowProps = {
    reloadTodoList: Function;
    todo: Todo;
};

const Row = (props: RowProps): JSX.Element => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleDeleteAction = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:3001/todos/${props.todo.todo_id}`);
        } catch(error: unknown) {
            console.error('Error fetching delete todo: ' + (error as Error).message);
        };
        props.reloadTodoList();
    };

    const handleEditAction = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // e.preventDefault();
        // try {
        //     await axios.post(`http://localhost:3001/todos/${props.todo.todo_id}`, props.todo);
        // } catch(error: unknown) {
        //     console.error('Error fetching delete todo: ' + (error as Error).message);
        // };
        // props.reloadTodoList();
    };

    return(
        <>
            <article className="flex w-full justify-evenly items-center">
                <div className="flex w-2/3 justify-start">
                    <p className=""> {props.todo.description} </p>
                </div>
                <div className="flex w-1/3 justify-around">
                    <Button
                        icon={VscEdit}
                        danger={false}
                        buttonAction={handleEditAction}
                    />
                    <Button 
                        icon={VscTrash}
                        danger={true}
                        buttonAction={handleDeleteAction}
                    />
                </div>
            </article>
            <hr className="w-full mb-4 mt-4"/>
            
            {
                isModalVisible
                ?
                <Modal

                />
                :
                <></>
            }
        </>
    );
};

export default Row;