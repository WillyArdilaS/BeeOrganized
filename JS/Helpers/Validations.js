function validateOwner() {
    const ownerHTML = document.getElementById("taskOwner");

    if(ownerHTML.value != "Owner") {
        return true;
    } else {
        return false;
    }
}

function validateDates() {
    const startDateHTML = document.getElementById("startDate");
    const endDateHTML = document.getElementById("endDate");

    if(startDateHTML.value != "" && endDateHTML.value != "") {
        return true;
    } else {
        return false;
    }
}

export{validateOwner, validateDates}