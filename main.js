// Currency Converter...
import inquirer from "inquirer";
const user = await inquirer.prompt([{
        type: "number",
        name: "amount",
        message: "Enter amount you want to convert: "
    }, {
        type: "list",
        name: "select",
        choices: ["Pkr", "Dollar", "Euro", "Pound"],
        message: "Select your currency: "
    }]);
if (user.select === "Pkr") {
    // Rupee conversion.
    let dollar = user.amount / 280;
    console.log(`${user.amount}RS = ${dollar} dollars.`);
    let euro = user.amount / 303;
    console.log(`${user.amount}RS = ${euro} euros.`);
    let pound = user.amount / 354;
    console.log(`${user.amount}RS = ${pound} pounds.`);
}
else if (user.select === "Dollar") {
    // dollar conversion.
    let pkr = user.amount * 280;
    console.log(`${user.amount} dollars = ${pkr}Rs.`);
    let euro = user.amount * 0.92;
    console.log(`${user.amount} dollars = ${euro} euros.`);
    let pound = user.amount * 0.79;
    console.log(`${user.amount} dollars = ${pound} pounds.`);
}
else if (user.select === "Pound") {
    // pound conversion.
    let pkr = user.amount * 354;
    console.log(`${user.amount} pounds = ${pkr}Rs.`);
    let euro = user.amount * 1.17;
    console.log(`${user.amount} pounds = ${euro} euros.`);
    let dollar = user.amount * 1.27;
    console.log(`${user.amount} pounds = ${dollar} dollars.`);
}
else if (user.select === "Euro") {
    // Euro conversion.
    let pkr = user.amount * 303;
    console.log(`${user.amount} euroes = ${pkr}Rs.`);
    let dollar = user.amount * 1.08;
    console.log(`${user.amount} euroes = ${dollar} dollars.`);
    let pound = user.amount * 0.86;
    console.log(`${user.amount} euroes = ${pound} pounds.`);
}
else {
    throw new Error("Invalid Currency....");
}
