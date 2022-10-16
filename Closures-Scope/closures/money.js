// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5); // $5
// moneyBox(10); // $10
// moneyBox(16); // $16


function moneyBox(user) {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`${user}'s MoneyBox: $${saveCoins}`);
    }

    return countCoins;
}

const myMoney = moneyBox('Joseph');
const annaMoney = moneyBox('Anna');

myMoney(5);
myMoney(10);
myMoney(16);

annaMoney(35);
annaMoney(58);

