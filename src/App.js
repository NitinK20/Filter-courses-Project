import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl , filterData } from "./data";
import { useEffect ,useState } from "react";
import { toast } from "react-toastify";
import Spinner from './components/Spinner';



function App(){

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async() => {
    try{
      const res = await fetch(apiUrl);
      const file = await res.json();
      // saving data into a variable
      setCourses(file.data);
    }
    catch(error){
      toast.error("sothing went wrong");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar />  
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} setCategory={setCategory} category={category} />
        </div>

        <div className="width-11/12 max-w-[1200px] mx-auto  flex flex-wrap  items-center  justify-center min-h-[50vh]">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/> )
          }
        </div>

      </div>
      

    </div>
  );
}

export default App;
