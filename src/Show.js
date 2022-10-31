import React,{useState,useEffect} from 'react';
import "./App.css"
const Show = () => {
  const[show, setShow]=useState([]);
  const[showData, setShowData]=useState("");
  useEffect(()=>{
      const fetchdata=async()=>{
        const response=await fetch(`https://api.tvmaze.com/search/shows?q=${showData}`);
        const actordata=await response.json();
        setShow(actordata);
      };
      fetchdata();
      console.log(show);
  },[showData]);
  const handleInput=(e)=>{
    setShowData(e.target.value);

  }
  
  return (
    <>
    <div className='box'>
    <input type="search" placeholder="enter an item"  value={showData} onChange={handleInput} className="inputbox"/>
    </div>
    <div className="card_container">
    {show.map((data, index)=>{
        return (
          <div>
           {(data.show.image?.medium)?
            ( <div className="card">
                <div className="card_image">
                  <img src={data.show.image.medium} />
                </div>
                <div className="card_title">
                  <p>{data.show.name}</p>
                </div>
                
              </div>
            ):
            (<div></div>)}
          </div>
        )
    })}
    </div>
    
    </>
  );

}

export default Show
