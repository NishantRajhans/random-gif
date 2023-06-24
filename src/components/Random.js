import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
export default function Random() {
  const [gif,setgif]=useState("");
  const [loder,setloder]=useState();
  async function fetchdata(){
    setloder(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=u5UUen6vwuKs48tqLpRhQiWrPhb4U59B`;
    const {data}= await axios.get(url);
    const imagesor=data.data.images.downsized.url;
    setgif(imagesor);
     setloder(false);
  }
  useEffect(()=>{
  fetchdata();
  },[])
  function clickHandler()
  {
     fetchdata();
  }
  return (
    <div className="w-1/2 border bg-green-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="underline font-bold uppercase text-2xl mt-14">A Random Gif</h1>
        {
          loder?(<Spinner></Spinner>):(<img src={gif} width="450"/>)
        }
        <button onClick={clickHandler} className="w-10/12 bg-neutral-200  text-lg py-2 rounded-lg mb-12">Genrate</button>
    </div>
  );
}
