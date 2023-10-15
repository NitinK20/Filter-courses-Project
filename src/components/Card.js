import {FcLike ,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({setLikedCourses, likedCourses, course}) => {

    // let course = props.course;
    // let likedCourses = props.likedCourses;
    // let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        // logic
        if(likedCourses.includes(course.id)){
            // phle se like hua pda hai 
            setLikedCourses( (prev) => prev.filter((cid) =>  (cid !== course.id)) );
            toast.warning("removes like")
        }else{
            // phle se like nhi hai
            // insert karna h ye course liked courses me
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
                // non-empty 
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("liked successfully")
        }
    }

    return (
        <div className="w-[300px] flex flex-col bg-bgDark bg-opacity-80% rounded-md overflow-hidden"> 
            <div>

                <div className="relative">
                    <img src={course.image.url} alt=""></img>

                    <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px] grid place-items-center">
                        <button onClick={clickHandler}>
                            {
                                likedCourses.includes(course.id) ? 
                                (<FcLike font-size="1.75rem"/>) : (<FcLikePlaceholder font-size="1.75rem"/>)
                            }
                        </button>
                    </div>

                </div>        
            </div>
            <div className="p-4 ">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                {
                    course.description.length > 100 ? 
                    (course.description.substr(0,100)) + "..." : (course.description)
                }
                </p>

            </div>
        </div>
    )
}

export default Card;