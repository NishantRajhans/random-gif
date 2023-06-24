const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=u5UUen6vwuKs48tqLpRhQiWrPhb4U59B`;
const texturl = `https://api.giphy.com/v1/gifs/random?api_key=u5UUen6vwuKs48tqLpRhQiWrPhb4U59B&tag=${text}`;

const useGif = (tag) => {
    const [gif,setgif]=useState("");
    const [loder,setloder]=useState();
    async function fetchdata(){
      setloder(true);
      const {data}= await axios.get(tag?(texturl):(randomurl));
      const imagesor=data.data.images.downsized.url;
      setgif(imagesor);
       setloder(false);
    }
    useEffect(()=>{
    fetchdata();
    },[])
};
export default useGif;
