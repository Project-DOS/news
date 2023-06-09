// read json file from command line arugment

const fs = require('fs')
const {xml2json} = require('./xml2json')

fs.readFile('news.xml', 'utf8', (err, data) => {
  if (err) throw err

  data = xml2json(data)
  let articles = data.rss.channel.item

  let _content = JSON.stringify(articles, null, 2)
  fs.writeFile('news.json', _content, (err) => {
    if (err) throw err
    console.log('Data written to file')
  })
})