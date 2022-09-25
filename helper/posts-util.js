import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirPath = path.join(process.cwd(), 'posts')

// Read content of a file
// postIdentifier can be file name or slug
// Split using gray matter pckg
export const readFileContent = (postIdentifier) => {
    // remove the extension to get slug
    const slug = postIdentifier.replace(/\.md$/, '')

    const filePath = path.join(postsDirPath, `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postData = {
        slug,
        ...data,
        content
    }
    return postData
}

export const getAllPostFiles = () => {
    return fs.readdirSync(postsDirPath)
}

// Go to posts folder
// Iterate through all post files
// get meta data for each file
export const getAllPosts = () => {
    const postFiles = getAllPostFiles()
    const allPostsData = postFiles.map(postFile => readFileContent(postFile))
    const sortedPosts = allPostsData.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
    return sortedPosts
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}
