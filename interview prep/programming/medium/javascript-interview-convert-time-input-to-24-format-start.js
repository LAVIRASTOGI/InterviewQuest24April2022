// Write a function which can convert the time input given in 12 hours format to 24 hours format

// convertTo24HrsFormat("12:10AM");    // 00:10
// convertTo24HrsFormat("5:00AM");     // 05:00
// convertTo24HrsFormat("12:33PM");    // 12:33
// convertTo24HrsFormat("01:59PM");    // 13:59
// convertTo24HrsFormat("11:8PM");     // 23:08
// convertTo24HrsFormat("10:02PM");    // 22:02


let convertTo24HrsFormat = (input) => {

    //used regex and subgroups
    let regex = /(\d{1,2})\:(\d{1,2})(AM|PM|am|pm)/
    let newarr = regex.exec(input);
    let convertFirstTime;
    if ((newarr[3] === 'PM'||newarr[3]==='pm')&&Number(newarr[1])!==12) {
        convertFirstTime= Number(newarr[1]) + 12;
    }else if((newarr[3]==='AM'||newarr[3]==='am') && Number(newarr[1])===12){
        convertFirstTime= Number(newarr[1]) - 12;
    }else{
        convertFirstTime=Number(newarr[1])
    }
    let convertedTime=`${convertFirstTime.toString().padStart(2,0)}:${newarr[2].padStart(2,0)}`
    console.log(convertedTime)
   
}
convertTo24HrsFormat("12:10AM");    // 00:10
convertTo24HrsFormat("5:00AM");     // 05:00
convertTo24HrsFormat("12:33PM");    // 12:33
convertTo24HrsFormat("01:59PM");    // 13:59
convertTo24HrsFormat("11:8PM");     // 23:08
convertTo24HrsFormat("10:02PM");    // 22:02


