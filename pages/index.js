import Head from "next/head"
import { Fragment } from "react"
import FeaturedPosts from "../components/home/FeaturedPosts"
import Hero from "../components/home/Hero"
import { getFeaturedPosts } from "../helper/posts-util"

// Shows featured blogs
const HomeComponent = (props) => {
    // iterate through an array of blogs
    // const blogsList = props.blogs
    return <Fragment>
        <Head>
            <title>Featured Posts</title>
            <meta name="description" content="This page has the featured posts" />
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts}/>
    </Fragment>
}

export const getStaticProps = () => {
    // get posts from the directory
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        }
        // revalidate: 60
    }
}

export default HomeComponent
