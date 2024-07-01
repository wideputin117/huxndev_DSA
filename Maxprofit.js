// finding the max profit we can sell on first day

const maxProfit=(prices)=>{
    let minPrice = prices[0];

    let maxProfit = 0;

    // will iterate through the whole prices array

    for(let i = 1; i < prices.length; i++){
        const currentPrice = prices[i];

        // have to find the mimum from the prices and store in minPrice
        minPrice = Math.min(minPrice,currentPrice);

        // same will calculate the maximum
        const potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit)
         
   }
   return maxProfit;
}

const prices = [7,1,5,3,6,4]
const answer = maxProfit(prices);
console.log(answer);