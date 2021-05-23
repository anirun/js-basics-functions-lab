function distanceFromHqInBlocks(pickupLocation) {
    // if pickup is above 42
    if ((pickupLocation - 42) > 0) {
        return pickupLocation - 42;
    }
    // if pickup is below 42
    else return (42 - pickupLocation);
}

function distanceFromHqInFeet(pickupLocation) {
/*
    // Reusing code from distanceFromHqInBlocks()
    if ((pickupLocation - 42) > 0) {
        return ((pickupLocation - 42) * 264);
    }
    else return ((42 - pickupLocation) * 264);
*/
  
    // Referencing distanceFromHqInBlocks()
    let distance = distanceFromHqInBlocks(pickupLocation);
    return  264 * distance;
}


function distanceTravelledInFeet(start, destination) {
    if ((destination-start) > 0) {
        return (destination-start) * 264;
    }
    else return (start-destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance < 2000) {
        let paidDistance = distance - 400;
        return paidDistance * .02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }    
    else if (distance > 2500) {
        return 'cannot travel that far';
    }
}