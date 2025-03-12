let text = String(prompt("nhập ký tự bất kì: "));
if(text.includes("0")|| text.includes("1")|| text.includes("2")|| text.includes("3")|| text.includes("4")|| text.includes("5")|| text.includes("6")|| text.includes("7")|| text.includes("8")|| text.includes("9")){
    alert(text + " không phải chữ cái");
} else {
    alert("ký tự " + text + " là chữ cái");
}