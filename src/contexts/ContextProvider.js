import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };
  
  export const ContextProvider = ({ children }) => {
    
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked,setIsClicked] = useState (initialState)
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
    };


    const handleClick = (clicked) => {
      console.log(initialState)
      setIsClicked({...initialState, [clicked]:true});
    }

    const handleClose = ()=>{
      console.log('hi')
      setIsClicked({...initialState})
    }

    return (
      <StateContext.Provider value={{activeMenu:activeMenu,setActiveMenu:setActiveMenu,isClicked:isClicked,setIsClicked:setIsClicked,handleClick,screenSize,setScreenSize,currentColor:currentColor,setCurrentColor:setCurrentColor,currentMode:currentMode,setCurrentMode:setCurrentMode,themeSettings:themeSettings,setThemeSettings:setThemeSettings,setColor,setMode, handleClose}}>
        {children}
      </StateContext.Provider>
    )
  }

  export const useStateContext = () => useContext(StateContext);