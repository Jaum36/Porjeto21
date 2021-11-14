function isTouching(objeto1,objeto2){
   if( 
    objeto1.x - objeto2.x < objeto1.width/2 + objeto2.width/2 &&
    objeto2.x - objeto1.x < objeto1.width/2 + objeto2.width/2 &&
    objeto1.y - objeto2.y < objeto1.height/2 + objeto2.height/2 &&
    objeto2.y - objeto1.y < objeto1.height/2 + objeto2.height/2){
        return true;
    }
    else{
        return false;
    }
}

function bounceOff(objeto1, objeto2){
    if (retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2
        && retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2) {
      retMovendo.velocityX = retMovendo.velocityX * (-1);
      retFixo.velocityX = retFixo.velocityX * (-1);
    }
    if (retMovendo.y - retFixo.y < retFixo.height/2 + retMovendo.height/2
      && retFixo.y - retMovendo.y < retFixo.height/2 + retMovendo.height/2){
      retMovendo.velocityY = retMovendo.velocityY * (-1);
      retFixo.velocityY = retFixo.velocityY * (-1);
    }
}