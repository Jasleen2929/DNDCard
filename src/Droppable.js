import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { useState } from "react";
import { Data } from "./Data";
const Droppable = ({selectDiv,setSelect}) =>{
    const [elements, setElements] = useState([]);


    const eventHandler = (e, data) => {
        console.log('Event Type', e.type);
        console.log({e, data});
      }
      const nodeRef = React.useRef(null);
      useEffect(()=>{
        if(selectDiv){
            
            setElements([...elements,selectDiv]);
        }
      },[selectDiv])
    console.log('content added' , elements);

    return(
       
              <span ref={nodeRef}>
              
              <div className='canvas' style={{position:"relative"}}>
              {
                Data.map((item) =>{
                    return (
                        <Draggable nodeRef={nodeRef}
              axis="both"
              handle=".handle"
              defaultPosition={{x: item.defaultX, y: item.defaultY}}
              // position={{x:item.defaultX,y:item.defaultY}}
              // grid={[800,500]}
              scale={1}
              onStart={eventHandler}
              onDrag={eventHandler}  
              onStop={eventHandler}
              allowAnyClick={true}
              // bounds={"parent"}
              bounds={{top: -1, left: -1, right:605, bottom: 447}}
              >
                <div className="handle" style={{border: "2px solid red", padding: "1rem", width:"20%",position:"absolute"}}>
                  {item.name}
                  <span>&#128465;</span>
                </div>
              </Draggable>
                    )
                })
              }
          </div>   
                </span>
          
    )
}

export default Droppable;