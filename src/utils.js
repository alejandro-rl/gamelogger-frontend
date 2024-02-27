export function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();

    var time = date + '/' + month + '/' + year;
    return time;
  }

  export function passwordMatch(value, form) {
    if (value !== form.values.password) {
        return { passwordMatch: true };
    }
  }
  
  export function containNumbers(numbers) {
    return function(value) {
      if (value.replace(/[^0-9]/g,"").length < numbers) {
        return { containNumbers: numbers };
      }
    }
  }