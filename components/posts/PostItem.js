import Link from 'next/link'
import Image from 'next/image'
import classes from './PostItem.module.css'

const PostItem = (props) => {
    const { title, image, excerpt, date, slug } = props.item
    const imagePath = `/images/posts/${slug}/${image}`
    const postDetailPath = `/posts/${slug}`
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return <li className={classes.post}>
        <Link href={postDetailPath}>
            <a>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
}

export default PostItem
