import { createContext, useState } from "react";

export const SliderContext = createContext()

const value = () => {

    const [slider, setSlider] = useState(false)

    const SlideUP = () => {
        document.getElementById('hide').style.display = 'none';
        document.getElementById('banner').style.height = '290px';
        document.getElementById('header').style.width = '91%';
        document.getElementById('contactBox').style.display='block';
        document.getElementById('navbar').style.right='-380px';
        setSlider(true);
    }

    return { slider, setSlider, SlideUP }
}

export const ContextProvider = ({ children }) => {
    return (
        <SliderContext.Provider value={value()}>{children}</SliderContext.Provider>
    )
}
