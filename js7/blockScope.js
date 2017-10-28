console.log("ブロックの前"); {
    console.log("ブロック内")
    const dog = "ringo";
    console.log(dog);
};
//console.log(`ブロックの外. ${dog}`); //dog is not defined


{ //１個目のブロック
    const cat = "tama";
    console.log(cat); //tama
    console.log(typeof cat); //string
}
//console.log(cat); //cat is not defined

{ //2個目のブロック
    const cat = "mi-";
    console.log(cat); //mi-
}
console.log(cat); //cat is not defined