function saturdayFun(activity = "roller-skate"){
    
    return`This Saturday, I want to ${activity}!`
}



function mondayWork(activity = "go to the office"){
    
    return`This Monday, I will ${activity}.`
}



function wrapAdjective(visualFlair = "*"){
    
    const innerfunction = function(adjective = "special"){
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
    return innerfunction;
}

// Example usage:
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); 
console.log(wrapAdjective("%")("a dedicated programmer")); 
