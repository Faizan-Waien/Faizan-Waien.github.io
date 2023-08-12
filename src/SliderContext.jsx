import { createContext, useState } from "react";

export const SliderContext = createContext()

const value = () => {

    const [slider, setSlider] = useState(false)

    const SlideUP = () => {
        document.getElementById('content').style.display = 'none';
        document.getElementById('contactBox').style.display = 'block';
        document.getElementById('navbar').style.display = 'none';
        // document.getElementById('navbar').style.right='-385px';
        setSlider(true);
    }

    return { slider, setSlider, SlideUP }
}

export const ContextProvider = ({ children }) => {
    return (
        <SliderContext.Provider value={value()}>{children}</SliderContext.Provider>
    )
}
