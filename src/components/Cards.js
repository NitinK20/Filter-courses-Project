import Card from './Card';
import {useState} from 'react';

function Cards( {courses , category} ){
    // let courses = props.courses;
    const [likedCourses , setLikedCourses] = useState([]);
    // returns you a list of all courses recieved from the api response
    const getCourses = () => {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }else{
            // main sirf specifice category ka data pass karuga
            return courses[category];
        }

    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map( (course) => {
                    return <Card key={course.id} course={course} 
                        likedCourses={likedCourses}
                         setLikedCourses={setLikedCourses}
                    />
                })
            }
        </div>
    )
}

export default Cards;