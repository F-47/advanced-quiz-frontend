import Quizes from "./Quizes";
import useFetch from "./useFetch";

const Home = () => {
  let {data,isPending} = useFetch(process.env.REACT_APP_API_URL+"/quiz")
  
  if(isPending){
    return <div className="loading"></div>
  }
  return (
    <div className="home">
      <div className="container">
          <Quizes quizes={data}/>
        </div>
    </div>
  );
};

export default Home;
