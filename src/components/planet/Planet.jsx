import { React, useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

const Planet = (props) => {

    // tailwind styles
    const buttonStylesMain = "flex sm:space-x-4 text-left sm:border-[1px] border-grey p-5 sm:text-md text-sm hover:bg-grey hover:bg-opacity-70 ease-in duration-200";
    const footerSquareStyles = "sm:grid sm:gap-4 flex justify-between border-[1px] border-grey sm:w-[min(90%,300px)] pt-5 pb-5 pl-5 pr-5";

    // animations
    const [planetImageAnimation, setPlanetImageAnimation] = useState("lg:animate-fadeInPlanetImage");
    const [textAnimation, setTextAnimation] = useState("lg:animate-text");
    const [footerAnimation, setFooterAnimation] = useState("lg:animate-bottomToTop");
    const tabButtonRef = useRef(null);
    let tabBackground = "";

    useEffect(() => {
        tabButtonRef.current.focus();
      }, []);

    const [planetDetails, setPlanetDetails] = useState({
        type: "overview",
        imagePath: props.currentPlanetData.images.planet,
        textContent: props.currentPlanetData.overview.content,
        wikipediaLink: props.currentPlanetData.overview.source,
    });

    switch(props.currentPlanetData.name) {
        case "Mercury":
            tabBackground = "focus:bg-[#419DB9]";
            break;
        case "Venus":
            tabBackground = "focus:bg-[#EDA44A]";
            break;
        case "Earth":
            tabBackground = "focus:bg-[#6E2FD6]";
            break;
        case "Mars":
            tabBackground = "focus:bg-[#D04E32]";
            break;
        case "Jupiter":
            tabBackground = "focus:bg-[#D93B36]";
            break;
        case "Saturn":
            tabBackground = "focus:bg-[#AD4421]";
            break;
        case "Uranus":
            tabBackground = "focus:bg-[#1EC3A5]";
            break;
        case "Neptune":
            tabBackground = "focus:bg-[#2B65E6]";
            break;
    }

    function updatePlanetDetails(planetType, planetImagePath, planetText, wikiLink){
        setPlanetDetails({
            type: planetType,
            imagePath: planetImagePath,
            textContent: planetText,
            wikipediaLink: wikiLink,
        });

        // if user clicks change the animation
        setPlanetImageAnimation("lg:animate-fadeInOpacity");
    }

    function PlanetImage(){
        // to position the geology image for saturn correct 
        let saturnImageHelperStyles = ""
        props.currentPlanetData.name === "Saturn" ? saturnImageHelperStyles = "lg:bottom-20 sm:bottom-28 -bottom-0" : ""

        if(planetDetails.type === "geology"){
            return (
                <div className={`${planetImageAnimation} relative lg:col-span-3 lg:w-auto sm:w-[50%] grid w-[40%] lg:pb-0 lg:pt-0 sm:pt-20 pt-40 sm:pb-20`}>
                    <img src={props.currentPlanetData.images.planet} alt="" />
                    <img className={`${saturnImageHelperStyles} absolute lg:-bottom-10 sm:bottom-10 -bottom-10 justify-self-center lg:w-[100px] w-[80px]`} src={props.currentPlanetData.images.geology} alt="" />
                </div>
            )
        }
        else{
            return (
                <div className={`${planetImageAnimation} lg:col-span-3 lg:w-auto sm:w-[50%] w-[40%] lg:pb-0 lg:pt-0 sm:pt-20 pt-40 sm:pb-20`}>
                    <img src={planetDetails.imagePath} alt="" />
                </div>
            )
        }
    }

    return (
        <main className='text-white h-[calc(100%-80px)] relative'>
            <section className='grid lg:gap-0 gap-8 justify-items-center h-full'>
                <div className='grid lg:grid-cols-5 grid-cols-1 lg:space-x-6 justify-items-center items-center w-[90%] lg:pt-0'>

                    <PlanetImage/>

                    <div className={`${textAnimation} lg:col-span-2 grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-8 items-center sm:pt-0 pt-20`}>
                        <div className="grid sm:justify-items-start justify-items-center sm:text-left text-center gap-5">
                            <h2 className='text-7xl'>{props.name}</h2>
                            <p className='text-grey text-md lg:w-[60%] w-[90%]'>
                                {planetDetails.textContent}
                            </p>
                            <div>
                                <span className='text-grey text-opacity-60'>Source : </span>
                                <a className='text-grey text-opacity-90 underline' href={planetDetails.wikipediaLink} target="_blank">Wikipedia </a>
                                <FontAwesomeIcon className='text-grey text-opacity-90' icon={faSquareArrowUpRight} />
                            </div>
                        </div>

                        <div className='sm:grid grid-cols-1 flex sm:justify-start justify-between sm:gap-4 sm:relative absolute left-0 top-0 sm:w-auto w-full sm:border-0 border-b-[1px] border-grey'>
                            <button 
                                value={"overview"} 
                                onClick={() => updatePlanetDetails("overview", props.currentPlanetData.images.planet, props.currentPlanetData.overview.content, props.currentPlanetData.overview.source)} 
                                className={`${buttonStylesMain} ${tabBackground}`}
                                ref={tabButtonRef}
                            >
                                <span className='sm:grid hidden'>01</span>
                                <span>OVERVIEW</span>
                            </button>

                            <button 
                                value={"structure"} 
                                onClick={() => updatePlanetDetails("structure", props.currentPlanetData.images.internal, props.currentPlanetData.structure.content, props.currentPlanetData.structure.source)} 
                                className={`${buttonStylesMain} ${tabBackground}`}
                            >
                                <span className='sm:grid hidden'>02</span>
                                <span>INTERNAL STRUCTURE</span>
                            </button>

                            <button 
                                value={"geology"} 
                                onClick={() => updatePlanetDetails("geology", props.currentPlanetData.images.geology, props.currentPlanetData.geology.content, props.currentPlanetData.geology.source)}
                                className={`${buttonStylesMain} ${tabBackground}`}
                            >
                                <span className='sm:grid hidden'>03</span>
                                <span>SURFACE GEOLOGY</span>
                            </button>
                        </div>
                    </div>

                </div>

                <div className={`${footerAnimation} sm:flex grid sm:space-x-4 sm:justify-between sm:gap-0 gap-5 items-center w-[90%] lg:pb-0 pb-8`}>
                    <div className={footerSquareStyles}>
                        <p className='text-grey text-opacity-60'>ROTATION TIME</p>
                        <p className='lg:text-4xl text-xl'>{props.rotation}</p>
                    </div>
                    <div className={footerSquareStyles}>
                        <p className='text-grey text-opacity-60'>REVOLUTION TIME</p>
                        <p className='lg:text-4xl text-xl'>{props.revolution}</p>
                    </div>
                    <div className={footerSquareStyles}>
                        <p className='text-grey text-opacity-60'>RADIUS</p>
                        <p className='lg:text-4xl text-xl'>{props.radius}</p>
                    </div>
                    <div className={footerSquareStyles}>
                        <p className='text-grey text-opacity-60'>AVERAGE TEMP.</p>
                        <p className='lg:text-4xl text-xl'>{props.temperature}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Planet