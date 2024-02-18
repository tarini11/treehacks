//  Credit to https://www.geeksforgeeks.org/how-to-convert-unix-timestamp-to-time-in-javascript/

const unixConversion = (unix, offset) => {
    let unixTime = unix + offset;
    let dateObj = new Date(unixTime * 1000);
    let utcString = dateObj.toUTCString();
 
    let time = utcString.slice(-11, -4);
    return time;
}  
  export default unixConversion;