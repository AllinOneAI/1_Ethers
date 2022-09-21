import {ethers} from "./ethers-5.6.esm.min.js";

const input = document.querySelector("#input");
const check = document.querySelector("#button");
const reg   = new RegExp(input.pattern);

const provider = ethers.providers.InfuraProvider("goerli", "https://goerli.infura.io/v3/dfbf0e548d9d496bae0e3f6fc91cb0a8");

let balance;

async function checkBalance(){
    balance = await provider.getBalance(input.value);
    alert(ethers.utils.formatUnits(balance));
}

input.oninput = () => {
    if (!reg.test(input.value)) {
        input.value = "";
        check.disabled = true
    } else {
        check.disabled = false
    }
};

check.onclick = () => {
    checkBalance()
};


