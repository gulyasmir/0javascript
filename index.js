import { Storage } from './Storage.js'

const storage = new Storage()
storage.init()
let allString = storage.getAllStrings()
console.log('================== allString ==================')
console.log(allString)

let allCount = storage.getCount()
console.log('================== allCount ==================')
console.log(allCount)
