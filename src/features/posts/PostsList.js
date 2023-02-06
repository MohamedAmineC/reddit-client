import { useNavigate } from "react-router";
import Post from "./Post";
import './PostsList.css'

const PostLists = (props) => {
    const {posts,isLoading,error} = props;
    const navigate = useNavigate();
    if(isLoading){
        return(
            <div>
                Loading...
            </div>
        )
    }
    else if (error){
        navigate("/error");
    }
    return (
        <ul className="posts-list">
            {
                posts.map((post,index) => 
                    <Post key={index} post={post} />
                    )
            }
        </ul>
    )
}
export default PostLists;