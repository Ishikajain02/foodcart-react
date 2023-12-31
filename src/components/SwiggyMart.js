import React from "react";
import { useState } from "react";
const Section = ({heading , paragraph ,isVisible , setIsVisible})=>{
    //const[isVisible ,setIsVisible] = useState(true);
    return(
        <>
        <div className ="border-2 border-black">
        <h1 className="font-bold">{heading}</h1>
        {(isVisible ? <p>{paragraph}</p> : <></>)}
       {(isVisible ?
             <button onClick={ ()=>setIsVisible(false)
             }>Hide</button>: <button onClick={()=> setIsVisible(true)}>show</button>)}
      {/*  <button >show</button>*/}
        </div>
        </>
    )
  }
  
  const SwiggyMart = () => {
    const [sectionConfig, setsectionConfig] = useState({
        showabout : false,
        showcareer : false,
        showlocate: false
    });
    return (
      <>
      <h1>Hiii</h1>
        <Section heading ={"About us"} isVisible = {sectionConfig.showabout} setIsVisible ={()=>{
            setsectionConfig({showabout : true,
                showcareer : false,
                showlocate: false})
        }}paragraph ={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"}/>
        <Section heading ={"Career"} isVisible = {sectionConfig.showcareer} setIsVisible ={()=>{
            setsectionConfig({showabout : false,
                showcareer : true,
                showlocate: false})
        }} paragraph = {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"}/>
        <Section heading ={"locate Us"} isVisible ={sectionConfig.showlocate} setIsVisible ={()=>{
            setsectionConfig({showabout : false,
                showcareer : false,
                showlocate: true})
        }} paragraph ={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"}/>
      </>
    );
  };
  
  export default SwiggyMart;
  