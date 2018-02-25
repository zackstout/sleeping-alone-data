
$(document).ready(function() {
  d3.csv('sleeping-alone-data.csv', function(data) {
    console.log(data);

    data.forEach(function(cell) {
      // console.log(cell['When both you and your partner are at home, how often do you sleep in separate beds?']);
      // console.log(cell.Education);

      var age = cell.Age;
      var education = cell.Education;
      var gender = cell.Gender;
      var income = cell['Household Income'];
      var length = cell['How long have you been in your current relationship? If you are not currently in a relationship, please answer according to your last relationship.'];
      var better_rel = cell['To what extent do you agree with the following statement: "sleeping in separate beds helps us to stay together."'];
      var better_sleep = cell['To what extent do you agree with the following statement: "we sleep better when we sleep in separate beds."'];
      // var better_sex =
      var why = cell['What are the reasons that you sleep in separate beds? Please select all that apply.'];
      var freq = cell['When both you and your partner are at home, how often do you sleep in separate beds?'];
      var first = cell['When was the first time you slept in separate beds?'];
      var where_you = cell["When you're not sleeping in the same bed as your partner, where do you typically sleep?"];
      var where_they = cell["When you're not sleeping in the same bed, where does your partner typically sleep?"];
      var status = cell["Which of the following best describes your current relationship status?"];

      var row = '<tr>' + '<td>' + age + '</td>' +'<td>' + education + '</td>' +'<td>' + gender + '</td>' +'<td>' + income + '</td>' +'<td>' + length + '</td>' +'<td>' + better_rel + '</td>' +'<td>' + better_sleep + '</td>' +'<td>' + why + '</td>' +'<td>' + freq + '</td>' +'<td>' + first + '</td>' +'<td>' + where_you + '</td>' +'<td>' + where_they + '</td>' + '<td>' + status + '</td></tr>';
      $('tbody').append(row);

    });

  });
});
