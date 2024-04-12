import { Typography, ConfigProvider } from "antd";
import PropTypes from "prop-types";
import customTheme from "../../../util/theme";
import CustomProvider from "../CustomProvider/CustomProvider";

const { Text, Link } = Typography;

export const SiriusText = ({ children, type, href, target, variant }) => {

    return (

        <CustomProvider>
            {type === 'link' ?
                <Link href={href} target={target}>{children}</Link> :
                <Text type={variant}>{children}</Text>}
        </CustomProvider>
    )
}

SiriusText.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string,
    type: PropTypes.oneOf(['link', 'text']),
    variant: PropTypes.oneOf(['default', 'secondary', 'warning', 'danger']),
}

SiriusText.defaultProps = {
    type: 'text',
    target: '_blank',
}
