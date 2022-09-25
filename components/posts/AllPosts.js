import styles from './AllPosts.module.css'
import PostsGridComponent from "./PostsGrid"

const AllPostsComponent = (props) => {
    return <section className={styles.posts}>
        <h1>All Posts</h1>
        <PostsGridComponent posts={props.posts}/>
    </section>
}

export default AllPostsComponent
