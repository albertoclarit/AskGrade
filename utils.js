function processGrade(grade){
  if (grade < 75){
    if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade -3));
    }
    else {
      console.log("Your new grade is :" + (grade -2));   
    }
  }else{

 if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade + 5));
    }
    else {
      console.log("Your new grade is :" + (grade + 3));   
    }

  }
}

module.exports = {
    processTheGrade:processGrade
}