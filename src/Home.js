import SingleQuiz from "./SingleQuiz";
import useFetch from "./useFetch";

const Home = () => {
  let {data,isPending,error} = useFetch(process.env.REACT_APP_API_URL+"/quiz")
  
  if(isPending){
    return <div className="loading"></div>
  }
  return (
    <div className="home">
      <div className="container">
        <div className="quizes">
          <SingleQuiz quizes={data}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
