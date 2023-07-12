function palindrome(str)
  {
  var tab=[],letter,r=1,i=0,j;
  var strr=String(str);
  strr=strr.replace(/[^\w\s]|_/g, '');
  for(letter of strr)
  {
          if(letter !=" ")
          {
            tab.push(letter);
          }
  }
  j=(tab.length-1);
  if(tab[i]!=tab[j])
  {
    return false;
  }
  else
  {
        do
  {
    if(tab[i+r]!==tab[j-r])
    {
      return false;
    }
    r=r+1;
  }
  while(r<=j/2);
  }

  return true;
}
