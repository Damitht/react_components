import classNames from "classnames";

/*
const finalClassName = classNames({
    'bg-blue-500': true,
    'text-yellow-500':false
});
console.log(finalClassName);
*/

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}){
    const classes = classNames('px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-white': primary === true,
        'border-gray-900 bg-gray-500 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
    });

    return (
        <button className={classes}>
            { children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ( {primary,
        secondary,
        success,
        warning,
        danger,
        outline,
        rounded} ) => {
            const count = Number (!!primary)
                + Number (!!secondary)
                + Number (!!success)
                + Number (!!warning)
                + Number (!!danger)
               // + Number (!!outline)
               // + Number (!!rounded)

            if(count > 1){
                return new Error('Only one of primary, secondary, success, warning, danger can be true');
            }
    },
};

export default Button;