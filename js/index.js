// JavaScript Document
$(document).ready(function() {
     Parse.initialize("OUCrZCYGotsFvQAhnaZLLVZrZbpuZhJYwp5e3O6j", "eWfhnSIv1IwoVPxtb4zNKHWV0XxWd3PkZUiqJp9v");
	 var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
})




function modalShow() {
	$('#myModal').show();
	if ($('.gender-select').click) {
	    var year = $(this).attr('id');
	    $('#yearInSchool').html($(this).attr('id') + ' <span class="caret"></span>');
	};
}
function rateButton() {
    //if(
}

function modalLogData() {
	var userName = Parse.Object.extend
}
$('modalButton').onClick(modalShow);
$('submitData').onClick(modalLogData);