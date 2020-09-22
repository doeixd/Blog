import matter from 'gray-matter'
import fs from 'fs'
import marked from 'marked'

const dir = 'src/routes/blog'

const files = fs.readdirSync(dir).filter(val => val.match(/.+\.svx/))

const posts = []


for (let file of files) {
	file = fs.readFileSync(`${dir}/${file}`)

	const { data: { title, slug, description, date }, content } = matter(file)

	if (!title) continue

	
	file = {
		title,
		slug,
		description,
		date,
		html: marked(content)
	}
	posts.push(file)
}


export default posts

