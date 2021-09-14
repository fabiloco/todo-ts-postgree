import { IconType } from "react-icons";
import Button from "./Button";

import { VscTrash, VscEdit } from 'react-icons/vsc';

type RowProps = {
    description: string;
};

const Row = (props: RowProps): JSX.Element => {
    return(
        <>
            <article className="flex w-full justify-evenly items-center">
                <div className="flex w-2/3 justify-start">
                    <p className=""> {props.description} </p>
                </div>
                <div className="flex w-1/3 justify-around">
                    <Button
                        icon={VscEdit}
                        danger={false}
                    />
                    <Button 
                        icon={VscTrash}
                        danger={true}
                    />
                </div>
            </article>
            <hr className="w-full mb-4 mt-4"/>
        </>
    );
};

export default Row;