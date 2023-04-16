import {React, useEffect} from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar_desktop = (props) => {

  const iconStyle = "sm:hidden grid text-white text-2xl cursor-pointer";
  const mainButtonStyle = "grid relative group";
  const pseudoBorderStyle = "absolute t-0 w-full h-1 transition-colors duration-300";

  const RenderIcon = () => {
    if(props.isOpen == false){
      return <FontAwesomeIcon onClick={props.openCloseSidebar} className={iconStyle} icon={faBars} />
    }
    else{
      return <FontAwesomeIcon onClick={props.openCloseSidebar} className={iconStyle} icon={faXmark} />
    }
  }

  // this is to show the user in which section he is
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn');
    let favicon = document.getElementById("favicon");

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {

        // Remove background color from all markers
        const markers = document.querySelectorAll(".marker")
        markers.forEach(marker => {
          marker.style.backgroundColor = '';
        });

        // after the button is clicked this adds the right background color to the marker
        switch(button.innerText.toLowerCase()) {
          case "mercury":
              markers[index].style.backgroundColor = "#419DB9";
              favicon.href = "/favicons/mercury.png";
              document.title = "Planet Facts | Mercury";
              break;
          case "venus":
              markers[index].style.backgroundColor = "#EDA44A";
              favicon.href = "/favicons/venus.png";
              document.title = "Planet Facts | Venus";
              break;
          case "earth":
              markers[index].style.backgroundColor = "#6E2FD6";
              favicon.href = "/favicons/earth.png";
              document.title = "Planet Facts | Earth";
              break;
          case "mars":
              markers[index].style.backgroundColor = "#D04E32";
              favicon.href = "/favicons/mars.png";
              document.title = "Planet Facts | Mars";
              break;
          case "jupiter":
              markers[index].style.backgroundColor = "#D93B36";
              favicon.href = "/favicons/jupiter.png";
              document.title = "Planet Facts | Jupiter";
              break;
          case "saturn":
              markers[index].style.backgroundColor = "#AD4421";
              favicon.href = "/favicons/saturn.png";
              document.title = "Planet Facts | Saturn";
              break;
          case "uranus":
              markers[index].style.backgroundColor = "#1EC3A5";
              favicon.href = "/favicons/uranus.png";
              document.title = "Planet Facts | Uranus";
              break;
          case "neptune":
              markers[index].style.backgroundColor = "#2B65E6";
              favicon.href = "/favicons/neptune.png";
              document.title = "Planet Facts | Neptune";
              break;
        }
      });
    });
  }, [])

  return (
    <nav className='md:flex sm:grid flex md:justify-between sm:justify-center md:text-left text-center justify-between gap-6 md:h-[80px] sm:h-[120px] h-[80px] border-b-[1px] pl-5 pr-5 items-center border-grey'>
      <div>
        <h1 className='text-white text-2xl'>THE PLANETS</h1>
      </div>

      <div className='text-grey sm:flex hidden h-full space-x-5'>
        <div className={mainButtonStyle}>
          <button className='btn' onClick={props.getNavbarValues} value={"Mercury"}>MERCURY</button>
          <span className={`${pseudoBorderStyle} group-hover:bg-mercury marker`}></span>
        </div>
        <div className={mainButtonStyle}>
          <button className='btn' onClick={props.getNavbarValues} value={"Venus"}>VENUS</button>
          <span className={`${pseudoBorderStyle} group-hover:bg-venus marker`}></span>
        </div>
        <div className={mainButtonStyle}>
          <button className='btn' onClick={props.getNavbarValues} value={"Earth"}>EARTH</button>
          <span style={{backgroundColor: "#6E2FD6"}} className={`${pseudoBorderStyle} group-hover:bg-earth marker`}></span>
        </div>
        <div className={mainButtonStyle}>
          <button className='btn' onClick={props.getNavbarValues} value={"Mars"}>MARS</button>
          <span className={`${pseudoBorderStyle} group-hover:bg-mars marker`}></span>
        </div>
        <div className={mainButtonStyle}>
          <button className='btn' onClick={props.getNavbarValues} value={"Jupiter"}>JUPITER</button>
          <span className={`${pseudoBorderStyle} group-hover:bg-jupiter marker`}></span>
        </div>
        <div className={mainButtonStyle}>
          <button className='btn' onClick={props.getNavbarValues} value={"Saturn"}>SATURN</button>
          <span className={`${pseudoBorderStyle} group-hover:bg-saturn marker`}></span>
        </div>
        <div className={mainButtonStyle}>
          <button className='btn' onClick={props.getNavbarValues} value={"Uranus"}>URANUS</button>
          <span className={`${pseudoBorderStyle} group-hover:bg-uranus marker`}></span>
        </div>
        <div className={mainButtonStyle}>
          <button className='btn' onClick={props.getNavbarValues} value={"Neptune"}>NEPTUNE</button>
          <span className={`${pseudoBorderStyle} group-hover:bg-neptune marker`}></span>
        </div>
      </div>

      <RenderIcon />
    </nav>
  )
}

export default Navbar_desktop