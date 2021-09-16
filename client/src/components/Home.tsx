import React, { useState, useEffect } from "react";

import Row from './Row';
import NewTodo from './NewTodo';

export type Todo = {
    todo_id: number;
    description: string;
};


const Home = ():JSX.Element => {
    
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const getTodos = async () => {
        setLoading(true);
        try {
            const res: Response = await fetch('http://localhost:3001/todos');
            const data = await res.json();
            setTodos(data);
            setLoading(false);
        } catch(error: unknown) {
            console.error('Error fetching todos data: ' + (error as Error).message);
        };
    };

    useEffect(() => {
        getTodos();
    }, []);

    return(
        <div className="home">
            <header className="title">
                Todo App 📝
            </header>
            
            <section className="card">
                <NewTodo
                    reloadTodoList={getTodos}
                />
            </section>
            
            <hr className="w-2/3 mb-4 mt-4"/>

            <section className="flex w-2/3 justify-evenly">
                <div className="flex w-2/3 justify-center">
                    <h3 className="font-bold">Description</h3>
                </div>
                <div className="flex w-1/3 justify-around">
                    <h3 className="font-bold">Edit</h3>
                    <h3 className="font-bold">Delete</h3>
                </div>
            </section>

            <hr className="w-2/3 mb-4 mt-4"/>
            
            {loading
                ?
                    <div>loading</div>
                :
                    <section className="w-2/3">
                        <ul>
                            {todos.map((todo: Todo, index: number) => {
                                return(
                                    <li key={index}>
                                        <Row
                                            todo={todo}
                                            reloadTodoList={getTodos}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
            }
        </div>
    );
};

export default Home;