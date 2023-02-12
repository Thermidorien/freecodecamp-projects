function checkCashRegister(price, cash, cid) {
    const currencyUnits = [    ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01]
    ];
    let change = cash - price;
    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
    let status = totalCid < change ? "INSUFFICIENT_FUNDS"
               : totalCid === change ? "CLOSED"
               : "OPEN";
    let changeArr = [];
    if (status !== "INSUFFICIENT_FUNDS") {
      for (let i = 0; i < currencyUnits.length; i++) {
        let currencyName = currencyUnits[i][0];
        let currencyValue = currencyUnits[i][1];
        let currencyInDrawer = cid[currencyUnits.length - 1 - i][1];
        let currencyCount = 0;
        while (change >= currencyValue && currencyInDrawer > 0) {
          change -= currencyValue;
          change = Math.round(change * 100) / 100;
          currencyInDrawer -= currencyValue;
          currencyCount += 1;
        }
        if (currencyCount > 0) {
          changeArr.push([currencyName, currencyValue * currencyCount]);
        }
      }
    }
    if (change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (status === "OPEN") {
      return {status: status, change: changeArr};
    } else {
      return {status: status, change: cid};
    }
  }