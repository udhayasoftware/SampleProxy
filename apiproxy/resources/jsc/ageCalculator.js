  var body = JSON.parse(request.content);
if (body.hasOwnProperty('dob')) {
  if (typeof body.dob === 'string') { 
      var birthday = new Date(body.dob);
      body.age = _calculateAge(birthday)
      // re-serialize the request
     context.setVariable('request.content', JSON.stringify(body,null,2));
  }
} 

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}