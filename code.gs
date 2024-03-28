
function saveFormData(formData) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("// Your Google Sheets Sheet Name ////");
  var studentsData = [];
  for (var i = 0; i < formData.length; i += 3) {
    var student = [
      formData[i].value,
      formData[i + 1].value, 
      formData[i + 2].value 
    ];
    studentsData.push([new Date()].concat(student)); 
  }
  studentsData.forEach(function(student) {
    sheet.appendRow(student);
  });
}


function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}
