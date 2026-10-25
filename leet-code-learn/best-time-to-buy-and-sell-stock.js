var maxProfit = function(prices) {
    let maxProfit = 0;
    let lastDay = prices.length
    for(let buyDay = 0; buyDay < lastDay - 1; buyDay++) {
        for(let sellDay = buyDay; sellDay < lastDay; sellDay++) {
            let profit = prices[sellDay] - prices[buyDay]
            if(profit > maxProfit ) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit
};