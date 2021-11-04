import {readFile, writeFile} from 'fs/promises'

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8', )

const data = {
    title: 'learn nodejs',
    body: "this is hte final html"
}

for (const [k, v] of Object.entries(data)) {
 template = template.replace(`{${k}}`, v)
}

 await writeFile(new URL('index.html', import.meta.url), template)

// import fs from 'fs/promises'

// console.log(import.meta.url)