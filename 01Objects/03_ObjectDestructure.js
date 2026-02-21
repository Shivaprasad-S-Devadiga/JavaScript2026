const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor) 
// if we. are using more tha 2 time , more easy pupose
const {courseInstructor} = course
console.log(courseInstructor);
// for more easy
const {courseInstructor : instructor} = course
console.log(instructor)


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

