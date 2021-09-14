import { IconType } from 'react-icons'

type ButtonProps = {
    icon: IconType;
    danger: boolean;
};

const Button = (props: ButtonProps): JSX.Element => {
    if(props.danger) {
        return(
            <button className="btn-mini bg-red-500 border-red-200">
                <props.icon className="text-white text-lg" />
            </button>
        );
    } else {
        return(
            <button className="btn-mini bg-blue-500 border-blue-200">
                <props.icon className="text-white text-lg" />
            </button>
        );
    };
};

export default Button;