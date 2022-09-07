let decode_mode=false;

function rot(str, num) {
    let result="";
    let arr = str.toUpperCase().split("");
    console.log(arr);
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if(decode_mode){
        console.log("decode")
        function decodeLetter(letter){
            let index = alph.indexOf(letter);
            let newIndex = (index >= num)? index-num: 26-(num-index);
            let newLetter = alph[newIndex];
            return newLetter;
          }
          result = arr.map(letter=>( /[A-Z]/.test(letter)? decodeLetter(letter): letter));
    }else{
        function encodeLetter(letter){
            let index = alph.indexOf(letter);
            let newIndex = (index <= 26- num)? index+num: num+index-26;
            let newLetter = alph[newIndex];
            return newLetter;
          }
          result = arr.map(letter=>(/[A-Z]/.test(letter)? encodeLetter(letter): letter));
    }
    console.log(result.join(""));
    return result.join("");
  }

function changeMode(){
    if(decode_mode){
        decode_mode = false;
        document.getElementById("mode").innerHTML = "ENCODE";
    }else{
        decode_mode = true;
        document.getElementById("mode").innerHTML = "DECODE";
    }
}

function cipher(){
    let input = document.getElementById("input").value;
    let num  = document.getElementById("num").value;
    document.getElementById("output").value = rot(input, num);
}


//   "SERR PBQR PNZC"