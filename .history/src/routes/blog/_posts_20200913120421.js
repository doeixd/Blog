import matter from 'gray-matter'
import fs from 'fs'
import marked from 'marked'

const dir = 'src/routes/blog'

const files = fs.readdirSync(dir)

const posts = []

function hello () {
	
}


for (let file of files) {
	file = fs.readFileSync(`${dir}/${file}`)

	const { data: { title, slug, date }, content } = matter(file)

	if (!title) continue


	file = {
		title,
		slug,
		date,
		html: marked(content)
	}
	posts.push(file)
}


export default posts

