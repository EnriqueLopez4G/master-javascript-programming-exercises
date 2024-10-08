function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let stringScore ='';

    if (score>100) return 'INVALID SCORE';
    if (score<=0) return 'INVALID SCORE';
    if (score ===100) return 'A+';

    if (score>=90 && score <=100) stringScore = 'A';
    if (score>=80 && score <= 89) stringScore = 'B';
    if (score>=70 && score <= 79) stringScore = 'C';
    if (score>=60 && score <= 69) stringScore = 'D';
    if (score<=59) return 'F';

    let signo ='';
    if (score %10 >=0 && score %10  <=2) signo = '-';
    if (score %10 >=8 && score % 10 <=9) signo = '+';
    
    stringScore+=signo;
    return stringScore
}

let output = convertScoreToGradeWithPlusAndMinus(100);
console.log(output); // --> 'A-'
