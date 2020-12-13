function isTouching(movingR, fixedR){
    if (movingR.x - fixedR.x < fixedR.width/2 + movingR.width/2
      && fixedR.x - movingR.x < fixedR.width/2 + movingR.width/2
      && movingR.y - fixedR.y < fixedR.height/2 + movingR.height/2
      && fixedR.y - movingR.y < fixedR.height/2 + movingR.height/2) {
   return true;
  }
  else {
   return false;
  }
  }