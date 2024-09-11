
function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input"
    }
    const earn = income - expenses;
    const tax = earn * .20;
    return tax;
}


function sendNotification(email) {
    if (email.indexOf("@") === -1) {
        return "Invalid Email"
    }
    const [username, domain] = email.split("@")
    return `${username}sent you an email from ${domain}`
}


function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    }

    for(let i = 0; i < name.length ; i++){
        if ( !isNaN(name[i]) && name[i] !== ' ') {      
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {
    if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
        return "Invalid Input"
    }
    if (typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input ";
    }
    if (obj.testScore > 50 || obj.schoolGrade > 30) {
        return "Invalid Input"
    }
    let finalScore = obj.schoolGrade + obj.testScore;
    if (obj.isFFamily) {
        finalScore += 20;
    }
    return finalScore > 80;
}


function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input"
    }
    let totalTime = 0;
    for(let i=0 ; i < waitingTimes.length ;i++){
        totalTime += waitingTimes[i];
    }
    const averageTime = Math.round (totalTime / waitingTimes.length)
    const newSirial = serialNumber - waitingTimes.length -1;
    const waitingTime = averageTime * newSirial;
    return waitingTime;
}