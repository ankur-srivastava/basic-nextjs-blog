import Head from "next/head"
import { Fragment } from "react"
import PostDetailComponent from "../../components/posts/post-detail/PostContent"
import { getAllPostFiles, readFileContent } from "../../helper/posts-util"

const PostDetailPage = (props) => {
    return <Fragment>
        <Head>
            <title>{props.postData.title}</title>
            <meta name="description" content={props.postData.excerpt}/>
        </Head>
        <PostDetailComponent content={props.postData}/>
    </Fragment>
}

export const getStaticProps = (context) => {
    const { params } = context
    const { slug } = params
    const fileData = readFileContent(slug)
    return {
        props: {
            postData: fileData
        }
    }
}

export const getStaticPaths = () => {
    // we need the slugs for which the detail pages have to be generated
    // if we iterate through all file names we get the slugs. This comes with md extension.
    const allFiles = getAllPostFiles()
    const slugs = allFiles.map(fileName => fileName.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }

}

export default PostDetailPage
