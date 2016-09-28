var colorfulElements = $(".intro-section")
var colorNameDisplay = $("#color-display")
console.log("hover");
colorfulElements.hover(function(e) {
  var elementHoveredOver = $(e.target)
  colorNameDisplay.html("hi");
  
})