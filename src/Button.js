import PropTypes from 'prop-types';

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
    return <button className="bg-red-500">{ children}</button>;
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