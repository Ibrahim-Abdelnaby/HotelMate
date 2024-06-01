var fileInput = document.getElementById('customFileInput');
var fileLabel = document.getElementById('customFileLabel');

fileInput.addEventListener('change', function() {
  var fileName = this.value.split('\\').pop();
  fileLabel.innerText = fileName;
});