import {ethers} from "./ethers-5.6.esm.min.js";

const input = document.querySelector("#input");
const check = document.querySelector("#button");
const reg   = new RegExp(input.pattern);

const provider = new ethers.providers.InfuraProvider("goerli", "dfbf0e548d9d496bae0e3f6fc91cb0a8");


async function checkBalance(){
    const balance = await provider.getBalance(input.value);
    alert(`\nETH balance of entered address is ${ethers.utils.formatEther(balance)} ETH\n`);
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


