// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(adjective = '*') {
    const inner = function(byDefault = "special") {
        return `You are ${adjective}${byDefault}${adjective}!`;
    }
    return inner;
}