function roman_conv(num)
{
    let i,roman="",numbers=[1000,900,500,400,100,90,50,40,10,9,5,4,1],
    romans=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","1"];
    i=0;
    do
    {
      if(num>=numbers[i]) //compare num and array number
      {
        roman+=romans[i]; //append in roman number's corespondent
        num-=numbers[i]; //remove number finds from num
      }
      i++;
    }while(i<romans.length);
    return roman;
}
