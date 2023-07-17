function rot13(str) {
  var code=String(str),j,number,decode="";
  j=0;
  while(j<code.length)
  {
    number=code.charCodeAt(j);
    if(number>=65 && number<=77)
    {
      number=String.fromCharCode(number+13);
      decode+=number;
    }
    else if(number>=78 && number<=90)
    {
      number=String.fromCharCode(number-13);
      decode+=number;
    }
    else{
      decode+=code.charAt(j);
    }
    j++;
  }
  return decode;
}
