import React, {useEffect} from "react";



const Accomodation :React.FC =()=>{

    //handle scroll to make the window display from the top on page enter 
    const handleScroll=()=>{
        window.scrollTo(0, 0);
    };

    useEffect(()=>{
        handleScroll();
    },[]);

    return(
        <React.Fragment>

            <div className="main-Accomodation-container  ">

            </div>
        </React.Fragment>
    );
};

export default  Accomodation;