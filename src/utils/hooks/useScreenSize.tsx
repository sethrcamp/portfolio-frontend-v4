import {useEffect, useReducer} from "react";

export type ScreenInfo = {
    height: number;
    width: number;
    isDesktop: boolean;
    isMobile: boolean;
};

export const DESKTOP_BREAKPOINT = 769;

const getScreenInfo = (windowObject: Window) => ({
    height: windowObject.innerHeight,
    width: windowObject.innerWidth,
    isDesktop: windowObject.innerWidth >= DESKTOP_BREAKPOINT,
    isMobile: windowObject.innerWidth < DESKTOP_BREAKPOINT
});

const reducer = (_: ScreenInfo, action: Window): ScreenInfo => getScreenInfo(action);

const useScreenSize = () => {
    const [screenInfo, updateScreenInfo] = useReducer(reducer, getScreenInfo(window));

    useEffect(() => {
        const handleResizeWindow = () => updateScreenInfo(window);
        window.addEventListener("resize", handleResizeWindow);
        return () => window.removeEventListener("resize", handleResizeWindow);
    }, []);

    return screenInfo;
};

export default useScreenSize;