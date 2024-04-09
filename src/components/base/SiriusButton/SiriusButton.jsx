import {Button} from "antd";
import PropTypes from "prop-types";

export const SiriusButton = ({children, type, disabled, loading, onClick, size}) => {

    return (
        <Button type={type} disabled={disabled} loading={loading} onClick={onClick} size={size}>
            {children}
        </Button>
    )
}

SiriusButton.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
    size: PropTypes.oneOf(['small', 'middle', 'large']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
}
