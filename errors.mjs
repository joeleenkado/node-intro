import {readFile} from 'fs/promises'


// readFile(new URL('pp.mjs', import.meta.url), 'utf-8', (err, data) => {
//     if(err){
//         console.log('err:', err)
//         throw err
// // console.error(err)
//     }else{

//     }
// })
process.on('uncaughtException', (e) => {
    console.log(e)
})

// const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
// console.log('hello')

// const result = readFile(new URL('pp.mjs', import.meta.url), 'utf-8')
// .catch((e) => {
//     console.log('hello')
// })


// try {

const result = await readFile(new URL('pp.mjs', import.meta.url), 'utf-8')
// } catch(e) {
//    console.error(e);
//    console.log('hello')
// }