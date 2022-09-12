//Button increment/decrement
function minusQuantity(min) {
    document.getElementById("number").value = parseInt(document.getElementById("number").value) - 1;
    if (document.getElementById("number").value <= parseInt(min)) {
      document.getElementById("number").value = min;
    }
  }
  function plusQuantity(max) {
    document.getElementById("number").value = parseInt(document.getElementById("number").value) + 1;
    if (document.getElementById("number").value >= parseInt(max)) {
      document.getElementById("number").value = max;
    }
  }