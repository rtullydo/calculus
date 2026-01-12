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
  "id": "sec-5-2-volumes",
  "level": "1",
  "url": "sec-5-2-volumes.html",
  "type": "Section",
  "number": "1.1",
  "title": "5.2 Volumes",
  "body": " 5.2 Volumes  The basic idea of using calculus to find the volume of solids (an idea that goes all the way back to Archimedes at least) is to cut the solid up into slices and then use the formula for computing the volume of a cylinder.  The volume of a right circular cylinder is given by where is the radius of the cylider and is the height. We can also write this formula more generally as where is the area of a typical cross-section, as indicated in Figure .      Volume of a right circular cylinder and a typical slice   "
},
{
  "id": "sec-5-2-volumes-3",
  "level": "2",
  "url": "sec-5-2-volumes.html#sec-5-2-volumes-3",
  "type": "Remark",
  "number": "1.1.1",
  "title": "",
  "body": "The volume of a right circular cylinder is given by where is the radius of the cylider and is the height. We can also write this formula more generally as where is the area of a typical cross-section, as indicated in Figure . "
},
{
  "id": "fig-cylindervolume",
  "level": "2",
  "url": "sec-5-2-volumes.html#fig-cylindervolume",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "    Volume of a right circular cylinder and a typical slice  "
},
{
  "id": "sec-quiz-1",
  "level": "1",
  "url": "sec-quiz-1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Quiz 1",
  "body": " Quiz 1    Compute the integral    Consider using a substitutuion.    Sketch the region enclosed by the curves and . Calculate the area of the region.    "
},
{
  "id": "sec-quiz-1-2-1",
  "level": "2",
  "url": "sec-quiz-1.html#sec-quiz-1-2-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Compute the integral    Consider using a substitutuion.  "
},
{
  "id": "sec-quiz-1-2-2",
  "level": "2",
  "url": "sec-quiz-1.html#sec-quiz-1-2-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " Sketch the region enclosed by the curves and . Calculate the area of the region.  "
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
