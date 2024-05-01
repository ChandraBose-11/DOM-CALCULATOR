const mainDiv = document.createElement("div");
mainDiv.className = "container mb-2 bg-info text-white  g-5";
mainDiv.innerHTML = `
    <form name = "form1" id="form" class="form1">  
      <input id="result" type="display" name="answer" style="background-color:white; border-radius: 10px; height: 80px;width:350px; text-align: right;" value="" readonly/>
      <div class="row-cols-5 mt-3">
      <button type="button" id="AC"onclick = "form1.answer.value = ' ' ">AC</button>
      <button type="button" id="modules"onclick = "form1.answer.value += '%' ">%</button>
      <button type="button" id="clear"onclick = "form1.answer.value = ' ' ">c</button> 
      <button type="button" id="mul"onclick = "form1.answer.value = '*' ">X</button> 
      <button type="button" id="7" onclick = "form1.answer.value += '7' ">7</button>  
      <button type="button" id="8"onclick = "form1.answer.value += '8' ">8</button>
      <button type="button" id="9"onclick = "form1.answer.value += '9' ">9</button>
      <button type="button" id="division"onclick = "form1.answer.value += '/' ">/</button>
      <button type="button" id="4"onclick = "form1.answer.value += '4' ">4</button>
      <button type="button" id="5"onclick = "form1.answer.value += '5' ">5</button>
      <button type="button" id="6"onclick = "form1.answer.value += '6' ">6</button>
      <button type="button" id="subtract" onclick = "form1.answer.value += '-' ">-</button>
      <button type="button" id="1" onclick = "form1.answer.value += '1' ">1</button>
      <button type="button" id="2"onclick = "form1.answer.value += '2' ">2</button>
      <button type="button" id="3"onclick = "form1.answer.value += '3' ">3</button>
      <button type="button" id="add"onclick = "form1.answer.value += '+' ">+</button>
      <button type="button" id="0"onclick = "form1.answer.value += '0' ">0</button>
      <button type="button" id="00"onclick = "form1.answer.value += '00' ">00</button>
      <button type="button" id="dot"onclick = "form1.answer.value += '.' ">.</button>
      <button type="button" id="equal"onclick = "form1.answer.value = calculation(form1.answer.value) ">=</button>
      </div>
      </form>`;
document.body.append(mainDiv);
const check = document.getElementById("form");

check.addEventListener("keypress", () => alert("Only numbers are allowed"));
function calculation(value) {
  var result = eval(value);
  return result;
}
