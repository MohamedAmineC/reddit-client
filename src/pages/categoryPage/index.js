import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPosts, selectPostsError, selectPostsLoading } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";
import { fetchPostsByCategory } from "../../features/posts/postsSlice";

const CategoryPage = () => {
    const {category} = useParams();
    const postsData = useSelector(selectPosts);
    const isLoading = useSelector(selectPostsLoading);
    const error = useSelector(selectPostsError);
    const dispatch = useDispatch();
    console.log(postsData);

    useEffect(() => {
        console.log(category);

        dispatch(fetchPostsByCategory(category))
    },[dispatch,category])
    return (
        <div>
            <h1>{category} Category Page</h1>
        </div>
    )
}
export default CategoryPage;