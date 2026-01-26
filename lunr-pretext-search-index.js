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
  "body": " Quiz 1     Compute the integral     Consider using a substitutuion.      Sketch the region enclosed by the curves and . Calculate the area of the region.     "
},
{
  "id": "sec-quiz-1-2-1",
  "level": "2",
  "url": "sec-quiz-1.html#sec-quiz-1-2-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "  Compute the integral     Consider using a substitutuion.   "
},
{
  "id": "sec-quiz-1-2-2",
  "level": "2",
  "url": "sec-quiz-1.html#sec-quiz-1-2-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": "  Sketch the region enclosed by the curves and . Calculate the area of the region.   "
},
{
  "id": "sec-sample-exam-1",
  "level": "1",
  "url": "sec-sample-exam-1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Sample Exam 1",
  "body": " Sample Exam 1     Evaluate the integrals:                  Consider the region bounded by the curves . Draw the region.    Set up but do not evaluate an integral computing the volume of the solid obtained by rotating the region about the line . Draw a typical cross-section and give its volume.    Set up but do not evaluate the integral to compute the volume of solid obtained by rotating the region about . Draw a typical cross-section and give its volume.        Sketch the region enclosed between and between and . Label any points of intersection. Find the area of the region.      A tank in the shape of an inverted cone sitting on the ground (that is, the point is sticking up) has height 10m and base radius of 6m. Water is in the tank to a height of 8m. Sketch the problem. Find the work required to empty the tank through the top. (You can use a water density of 1000 and .)      Consider the function .    Find an equation of the tangent line to at point where .    The function has a relative minimum. Find it.      Fir part b, consider using the derivative to find points with 0 slope.     "
},
{
  "id": "exercises--1",
  "level": "2",
  "url": "sec-sample-exam-1.html#exercises--1",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "  Evaluate the integrals:               "
},
{
  "id": "exercises--2",
  "level": "2",
  "url": "sec-sample-exam-1.html#exercises--2",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": "  Consider the region bounded by the curves . Draw the region.    Set up but do not evaluate an integral computing the volume of the solid obtained by rotating the region about the line . Draw a typical cross-section and give its volume.    Set up but do not evaluate the integral to compute the volume of solid obtained by rotating the region about . Draw a typical cross-section and give its volume.     "
},
{
  "id": "exercises--3",
  "level": "2",
  "url": "sec-sample-exam-1.html#exercises--3",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": "  Sketch the region enclosed between and between and . Label any points of intersection. Find the area of the region.   "
},
{
  "id": "exercises--4",
  "level": "2",
  "url": "sec-sample-exam-1.html#exercises--4",
  "type": "Exercise",
  "number": "3.1.4",
  "title": "",
  "body": "  A tank in the shape of an inverted cone sitting on the ground (that is, the point is sticking up) has height 10m and base radius of 6m. Water is in the tank to a height of 8m. Sketch the problem. Find the work required to empty the tank through the top. (You can use a water density of 1000 and .)   "
},
{
  "id": "exercises--5",
  "level": "2",
  "url": "sec-sample-exam-1.html#exercises--5",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": "  Consider the function .    Find an equation of the tangent line to at point where .    The function has a relative minimum. Find it.      Fir part b, consider using the derivative to find points with 0 slope.   "
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
