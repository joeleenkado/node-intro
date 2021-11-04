#! /usr/bin/env node
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'
console.log('hello from reddit cli')

const {argv} = yargs(process.argv)
const res = await fetch('https://reddit.com/.json')
const json = await res.json()
// console.log('json:', json)
const children = json.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]
const link = `https://reddit.com${randomPost.data.permalink}`

if (argv.print) {
    console.log(`
    title: ${randomPost.data.title}
    link: ${link}
    `)
} else {
    open(link)
}