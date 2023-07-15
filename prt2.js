function convertToRoman(num) {
  var i,roman="",numbers=[1000,900,500,400,100,90,50,40,10,9,5,4,1],
    romans=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    for(i=0;i<=numbers.length;i++)
    {
      while(num>=numbers[i])
      {
        roman+=romans[i];
        num-=numbers[i];
      }
    }
    return roman;
}
