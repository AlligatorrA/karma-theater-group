
import { createContext, useState, useContext } from "react";

const DustContext = createContext()

const DustProvider = ({ children }) => {
    const [option, setOption] = useState(false)
    const OptionFunction = () => {
        setOption(option => !option)
    }

    return <DustContext.Provider value={{ option, OptionFunction }}>{children}</DustContext.Provider>
}

const useDust = () => useContext(DustContext)

export { useDust, DustProvider }