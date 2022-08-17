import Context from "./context";
import { useState } from "react";
export default function ContextProvider({children}) {
    const [userInfo, updateUserInfo] = useState({});
    const context = {
        userInfo,
        updateUserInfo
    }
    return (
        <Context.Provider value = {context}>
            {children}
        </Context.Provider>
    )
}