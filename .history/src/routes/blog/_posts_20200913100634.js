import matter from 'gray-matter'
import fs from 'fs'
import marked from 'marked'

const dir = 'src/bposts'

const files = fs.readdirSync('src/bposts')

const posts = []

for (let file of files) {
	file = fs.readFileSync(`${dir}/${file}`)

	const { data: { title, slug, date }, content } = matter(file)

	file = {
		title,
		slug,
		date,
		html: marked(content)
	}
	posts.push(file)
}


export default posts

function jo ()