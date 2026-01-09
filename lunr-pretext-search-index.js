var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-quiz-1",
  "level": "1",
  "url": "sec-quiz-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Quiz 1",
  "body": " Quiz 1     Compute the integral     Consider using a substitutuion.      Sketch the region enclosed by the curves and . Calculate the area of the region.     "
},
{
  "id": "sec-quiz-1-2-1",
  "level": "2",
  "url": "sec-quiz-1.html#sec-quiz-1-2-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Compute the integral     Consider using a substitutuion.   "
},
{
  "id": "sec-quiz-1-2-2",
  "level": "2",
  "url": "sec-quiz-1.html#sec-quiz-1-2-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Sketch the region enclosed by the curves and . Calculate the area of the region.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
