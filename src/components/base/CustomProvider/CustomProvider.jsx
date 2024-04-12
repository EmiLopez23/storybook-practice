import { ConfigProvider } from "antd"
import customTheme from "../../../util/theme"

const CustomProvider = ({children}) => {
    return (
        <ConfigProvider
            theme={{
                token: customTheme,
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default CustomProvider