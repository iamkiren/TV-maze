import React,{ useState,useEffect } from "react";
import "./css/card.css"
import "./App.css"
const Actor = () => {

  const [Acontent,setAcontent]=useState([]);
  const [inptutData,setinputData]=useState("");
 
  useEffect(()=>{
      const totaldata=async()=>{
        const response=await fetch(`https://api.tvmaze.com/search/people?q==${inptutData}`);
        const actordata=await response.json();
        setAcontent(actordata);
      };
      totaldata();
      console.log(Acontent)
  },[inptutData]);
  const handleInput=(e)=>{
    setinputData(e.target.value);

  }
  
  return (
    <>
    <div className='box'>
      <input type="search" value={inptutData} placeholder="Enter actor name" onChange={handleInput} className="inputbox"/>
    </div>
    <div className="card_container">
    {Acontent.map((data)=>{
      return (
        <>
          {(data.person.image?.medium)?
          ( <div className="card">
              <div className="card_image">
                <img src={data.person.image.medium} />
              </div>
              <div className="card_title">
                <p>{data.person.name}</p>
              </div>
              
            </div>
          ):
          (<div></div>)
      }
        </>
      )
    })}
    </div>
    </>
  );

}

export default Actor
