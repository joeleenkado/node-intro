import {add} from './myLib.mjs'

import assert from 'assert'

console.log('add()\nshould add two numbers')

try{ 
    assert.strictEqual(add(1,2),3)
    console.log('success')
}catch(e) {
    console.error(e)
}