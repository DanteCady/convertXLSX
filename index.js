import fs from 'fs'
import { convertFile } from 'xlsx-to-csv'

const { filepath } = convertFile('./file.xlsx')
const csvData = fs.readFileSync(filepath, { encoding: 'utf-8' })

console.log(csvData)