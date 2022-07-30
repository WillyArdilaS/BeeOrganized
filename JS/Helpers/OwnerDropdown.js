import { owners } from "./OwnerList.js";

let selectHTML = document.getElementById("taskOwner");

const getOwner = (pos) => {
    return new Promise((resolve, reject)=>{
        let owner = owners[pos];

        (owner) ? resolve(owner) : reject("");
    });
}

const showOwner = async () => {
    let ownerList = [];

    for(let i = 0; i < owners.length; i++) {
        ownerList[i] = await getOwner(i);

        let optionHTML = `<option value="${ownerList[i].ownerName}"> ${ownerList[i].ownerName} </option>`

        selectHTML.innerHTML += optionHTML;
    }
}

export {showOwner};