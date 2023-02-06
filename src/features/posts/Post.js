import './Post.css';

const Post = (props) => {
    const {post} = props;
    return (
        <li className="post">
            <div className="stats">
                <button><i className="bi bi-arrow-up-circle"></i></button>
                <p>{post.data.score}</p>
                <button><i className="bi bi-arrow-down-circle"></i></button>
            </div>
            <div className="post-content">
                <div className="post-author">
                    <p>{post.data.subreddit_name_prefixed} publiée par {post.data.author}</p>
                </div>
                <div className="post-info">
                    <h2>{post.data.title}</h2>
                    <p>{post.data.selftext}</p>
                </div>
                <div className="post-stats">
                    <ul>
                        <li><i class="bi bi-chat-left-text"></i> {post.data.num_comments} Commentaires</li>
                        <li><i class="bi bi-share"></i>Partage</li>
                        <li><i class="bi bi-save"></i>Sauvergarder</li>
                    </ul>
                </div>
            </div>
        </li>
    )
}
export default Post;