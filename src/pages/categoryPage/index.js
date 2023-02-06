import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPosts, selectPostsError, selectPostsLoading } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";
import { fetchPostsByCategory } from "../../features/posts/postsSlice";
import PostLists from "../../features/posts/PostsList"

const CategoryPage = () => {
    const {category} = useParams();
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectPostsLoading);
    const error = useSelector(selectPostsError);
    const dispatch = useDispatch();
    console.log(posts);

    useEffect(() => {
        console.log(category);

        dispatch(fetchPostsByCategory(category))
    },[category])
    return (
        <div>
            <h1>{category} Category Page</h1>
            <PostLists posts={posts} isLoading={isLoading} error={error} />
        </div>
    )
}
export default CategoryPage;