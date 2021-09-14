import Button from "./Button";

import { VscAdd } from 'react-icons/vsc';

const Home = ():JSX.Element => {
    return(
        <div className="home">
            <header className="title">
                Todo App 📝
            </header>
            <section className="card">
                <input
                    className="input"
                    type="text"
                    placeholder="some description..."
                />
                <Button 
                    icon={VscAdd}
                    color={'red'}
                />
            </section>
        </div>
    );
};

export default Home;