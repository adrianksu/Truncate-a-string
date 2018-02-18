function truncateString(str, num) {
 if (str.length > num){
   if (num <= 3){
   cutStr = str.slice(0, num);
     return cutStr + '...';
    }
  longStr = str.slice(0, num - 3);
  return longStr + '...';
  }
 if (num >= str.length) {
      return str;
  }
}  

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
