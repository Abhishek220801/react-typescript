import { createContext, useState, type FC, type ReactNode } from "react";

interface MyContextProps {
    count: number;
    increment: () => void;
    decrement: () => void;
} 

export const MyContext = createContext<MyContextProps>({
    count: 0,
    increment: () => {},
    decrement: () => {},
})

interface MyProviderProps{
    children: ReactNode;
}

export const MyProvider: FC<MyProviderProps> = ({children}) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    return <MyContext.Provider value={{count, increment, decrement}}>
        {children}
    </MyContext.Provider>
}