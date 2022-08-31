import React, {useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { init as iTyped } from 'ityped'
const Terminal = (props) => {
   
    const TextRef = useRef();
    console.log(props.currentPage.title)

    useEffect(() => {
        iTyped(TextRef.current,{
            showCursor: false, 
            strings: [` cd ${props.currentPage.title} `],
            loop: false,
            typeSpeed:  35,
            backSpeed: 1,
            disableBackTyping: true
            
        });
    }, [props.currentPage]);

   

  return (
    <div id='terminal-div'>
        <FontAwesomeIcon id='terminal' icon={faTerminal} /><span id='terminal-content'>   ~/Desktop/IMJORD/client/<span>{props.currentPage.title}</span></span>
        <p><FontAwesomeIcon id='terminal' icon={faDollarSign} /><span id='terminal-content' ref={TextRef}></span> </p>
    </div>
  )
}

export default Terminal