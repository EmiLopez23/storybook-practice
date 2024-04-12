import { Button, ConfigProvider } from "antd";
import PropTypes from "prop-types";
import customTheme from "../../../util/theme";
import CustomProvider from "../CustomProvider/CustomProvider";

export const SiriusButton = ({ children, type, disabled, loading, onClick, size }) => {

    return (
        <CustomProvider>
            <Button type={type} disabled={disabled} loading={loading} onClick={onClick} size={size}>
                {children}
            </Button>
        </CustomProvider>
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
