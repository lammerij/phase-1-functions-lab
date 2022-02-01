const Hq = 42;

function distanceFromHqInBlocks(blocknumber) {
  if (blocknumber < 42) {
    return Hq - blocknumber;
  } else {
    return blocknumber - Hq;
  }
}
function distanceFromHqInFeet(blocknumber) {
  return distanceFromHqInBlocks(blocknumber) * 264;
  console.log(distanceFromHqInBlocks(blocknumber) * 264);
}
function distanceTravelledInFeet(pickup, dropoff) {
  if (pickup > dropoff) {
    return (pickup - dropoff) * 264;
  } else {
    return (dropoff - pickup) * 264;
  }
}
function calculatesFarePrice(pickup, dropoff) {
  const distance = distanceTravelledInFeet(pickup, dropoff);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return 2.56;
  } else if (distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
