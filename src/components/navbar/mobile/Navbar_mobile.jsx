import React from 'react'

const Navbar_mobile = (props) => {
    const mainCircleStyle = "rounded-full w-[25px] h-[25px]";
    const buttonWrapperStyle = "flex items-center space-x-4";
    const sidebarFadeIn_Out_Style = props.isOpen ? "translate-x-[0px]" : "translate-x-[-600px] -z-10"

    return (
        <aside className={`${sidebarFadeIn_Out_Style} bg-mainBG h-[calc(100%-80px)] min-h-[600px] w-full absolute text-white grid pl-5 items-center text-2xl transition-transform`}>
            <div className={buttonWrapperStyle}>
                <span className={`${mainCircleStyle} bg-mercury`}></span>
                <button value={"Mercury"} onClick={props.getNavbarValues}>MERCURY</button>
            </div>
            <div className={buttonWrapperStyle}>
                <span className={`${mainCircleStyle} bg-venus`}></span>
                <button value={"Venus"} onClick={props.getNavbarValues}>VENUS</button>
            </div>
            <div className={buttonWrapperStyle}>
                <span className={`${mainCircleStyle} bg-earth`}></span>
                <button value={"Earth"} onClick={props.getNavbarValues}>EARTH</button>
            </div>
            <div className={buttonWrapperStyle}>
                <span className={`${mainCircleStyle} bg-mars`}></span>
                <button value={"Mars"} onClick={props.getNavbarValues}>MARS</button>
            </div>
            <div className={buttonWrapperStyle}>
                <span className={`${mainCircleStyle} bg-jupiter`}></span>
                <button value={"Jupiter"} onClick={props.getNavbarValues}>JUPITER</button>
            </div>
            <div className={buttonWrapperStyle}>
                <span className={`${mainCircleStyle} bg-saturn`}></span>
                <button value={"Saturn"} onClick={props.getNavbarValues}>SATURN</button>
            </div>
            <div className={buttonWrapperStyle}>
                <span className={`${mainCircleStyle} bg-uranus`}></span>
                <button value={"Uranus"} onClick={props.getNavbarValues}>URANUS</button>
            </div>
            <div className={buttonWrapperStyle}>
                <span className={`${mainCircleStyle} bg-neptune`}></span>
                <button value={"Neptune"} onClick={props.getNavbarValues}>NEPTUNE</button>
            </div>    
        </aside>
    )
}

export default Navbar_mobile