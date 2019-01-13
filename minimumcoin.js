function minimumCoin(amount,coins) {
coins.sort();
coins.reverse();
 var change = {},
     i = 0,
     coin;
 
 while (amount && (coin = coins[i++])) {
   if (amount >= coin) {
     change[coin] = ~~(amount / coin);
     amount %= coin;
   }
 }
 return change;
}

console.log(minimumCoin(9,[1,3,5]));
