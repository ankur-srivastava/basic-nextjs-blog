import Head from "next/head"
import { Fragment } from "react"
import AllPostsComponent from "../../components/posts/AllPosts"
import { getAllPosts } from "../../helper/posts-util"

const AllPostsPage = (props) => {
    return <Fragment>
        <Head>
            <title>All Posts</title>
            <meta name="description" content="all posts" />
        </Head>
        <AllPostsComponent posts={props.posts} />
    </Fragment>
}

export const getStaticProps = () => {
    const allPosts = getAllPosts()
    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage
