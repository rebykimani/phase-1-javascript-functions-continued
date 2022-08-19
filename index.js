// // code your solution here
// function saturdayFun(y='roller-skate!') {
//   return `This Saturday I want to ${y}!`
//   // console.log();
// }

// function mondayWork(x='go to the office'){
//     // console.log (mondayWork = 'go to the office');
// };
// // return mondayWork(x);

// function wrapAdjective(name='special') {
//     let result = wrapAdjective(`you are ${name}` )
//     let emphatic = result("a hard worker")
//     }
function saturdayFun( action = "roller-skate") {
    return `This Saturday, I want to ${action}!`
}
const mondayWork = function (action = "go to the office") {
    return `This Monday, I will ${action}.`;
}
function wrapAdjective(visual = "*") {
    return function (adj = "special") {
        return `You are ${visual}${adj}${visual}!`
    }
}
