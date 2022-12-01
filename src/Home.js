import SingleQuiz from "./SingleQuiz";
import useFetch from "./useFetch";

const Home = () => {
  let {data,isPending,error} = useFetch("http://localhost:4000/getAllQuizes")
  
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
