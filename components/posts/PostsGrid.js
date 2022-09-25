import PostItem from './PostItem'
import styles from './PostsGrid.module.css'

const PostsGridComponent = (props) => {
    const { posts } = props
    return <ul>{posts.map(post => <PostItem key={post.slug} item={post}/>)}</ul>
}

export default PostsGridComponent
