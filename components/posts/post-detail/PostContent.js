import ReactMarkdown from 'react-markdown'
import PostHeaderComponent from "./PostHeader"
import styles from './PostContent.module.css'

const PostDetailComponent = (props) => {
    const { slug, title, content, image } = props.postData
    const IMAGE_PATH = `/images/posts/${slug}/${image}`
    return <article className={styles.content}>
        <PostHeaderComponent image={IMAGE_PATH} title={title}/>
        <ReactMarkdown>{content}</ReactMarkdown>
    </article>
}

export default PostDetailComponent
