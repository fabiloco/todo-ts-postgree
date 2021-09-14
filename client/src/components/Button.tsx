import { IconType } from 'react-icons'

type ButtonProps = {
    icon: IconType;
    color: string;
};

const Button = (props: ButtonProps): JSX.Element => {
    return(
        <button className="btn-mini bg-blue-500 border-blue-200">
            <props.icon className="text-white text-lg" />
        </button>
    );
};

export default Button;