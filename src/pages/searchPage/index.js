import { useSelector } from "react-redux";
import PostLists from "../../features/posts/PostsList";
import { selectSearchTerm } from "../../features/searchBar/searchBarSlice";
import { selectPosts, selectPostsError, selectPostsLoading } from "../../features/posts/postsSlice";

const SearchPage = () => {
    const search = useSelector(selectSearchTerm);
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectPostsLoading);
    const error = useSelector(selectPostsError);

    return(
        <div>
            your  Results for {search}
            <PostLists posts={posts} isLoading={isLoading} error={error} />
        </div>
    )
}
export default SearchPage;