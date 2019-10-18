function enableWalls(wallsEnabled) {
    if (wallsEnabled === true){
        wallsEnabled = false;
    }
    else{
        wallsEnabled = true;
    }
    return wallsEnabled;
    // debugger
}

export default enableWalls;