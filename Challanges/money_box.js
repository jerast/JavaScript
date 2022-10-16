const moneyBox = (userName, initMoney) => {
    let totalMoney = typeof initMoney === 'number' ? initMoney : 0;

    return {
        increment: (amount) => {
            totalMoney += amount;
            console.log(` Now, ${userName} has $${totalMoney}`);
        },
        decrement: (amount) => {
            totalMoney -= amount;
            console.log(` Now, ${userName} has $${totalMoney}`);
        },
        show: () => {
            console.log(` Now, ${userName} has $${totalMoney}`);
        },
    }
}

const {
    increment: annaIncrement,
    decrement: annaDecrement,
    show: annaShow,
} = moneyBox('Anna'); 

const {
    increment: paulIncrement,
    decrement: paulDecrement,
    show: paulShow,
} = moneyBox('Paul', 100);

annaIncrement(50); // Now, Anna has $50
paulDecrement(25); // Now, Paul has $75
paulShow(); // Paul has $75

/*************************/



