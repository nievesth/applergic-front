import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import * as FaIcons   from "react-icons/fa";
import * as AiIcons   from "react-icons/ai";
import * as Io5Icons  from 'react-icons/io5';
import * as RiIcons   from 'react-icons/ri';
import * as GrIcons   from 'react-icons/gr';


import duda from "../../../../assets/img/AppHome/gris.png";
import "./Nav.scss";
/* import { IconContext } from "react-icons"; */
// import { IsLoggedContext }  from "../../../../shared/contexts/IsLoggedContext";
// import { getCookieUtil }    from "../../../../shared/utils/getCookieUtil";
// import { removeCookieUtil } from "../../../../shared/utils/removeCookieUtil";




const SidebarData = [
  {
    title: 'Perfil',
    path: '/home', 
    icon: <Io5Icons.IoPersonCircleOutline />,
    cName: '',
    clickFn: () => null
  },
  {
    title: 'Favorito',
    path: '/home',
    icon: <Io5Icons.IoStarOutline />,
    cName: '',
    clickFn: () => null
  },
  {
    title: 'Diario',
    path: '/diary',
    icon: <RiIcons.RiContactsBookLine />,
    cName: '',
    clickFn: () => null
  },
  {
    title: 'Compartir',
    path: '/home',
    icon: <GrIcons.GrShareOption/>,
    cName: '',
    clickFn: () => null
  },
  {
    title: 'Traductor',
    path: '/home',
    icon: <Io5Icons.IoLanguage />,
    cName: '',
    clickFn: () => null
  },
  {
    title: 'Salir',
    path: '/login',
    icon: <Io5Icons.IoExitOutline />,
    cName: '',
    clickFn: () => localStorage.clear()
  }
];




export function Nav() {

  
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  // const { isLogged, setIsLogged } = useContext(IsLoggedContext);


  return (
    <div className="Nav">
      
      <div className="Nav__bar">
        <button 
          onClick={toggleSidebar} 
          className={"Nav__openButton " + (sidebarVisible ? "Nav__openButton--active" : "")}
        >
          <FaIcons.FaBars/>
        </button>

        <img className="Nav__infoButton" src={duda} alt=""></img>
      </div>

      <nav 
        className={"Nav__sidebar " + (sidebarVisible ? "Nav__sidebar--active" : "")}
        onClick={toggleSidebar}
      >
        {SidebarData.map((item, index) => 
          <Link 
            to={item.path}
            key={index}
            className={"Nav__link " + item.cName}
            onClick={item.clickFn}
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        )}
      </nav>
      {/* </IconContext.Provider> */}

    </div>
  );
};

