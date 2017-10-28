{ //外側のブロックの始まり
    let mammal = "human";
    console.log(mammal); //human

    { //ブロックの内側
        let mammal = "dolphin";
        console.log(mammal); //dolphin
    }
    console.log(mammal); //human
}


{ //外側のスコープの始まり
    let team = { name: '日本ハム' };
    let baseball = team;
    let memberNum = 10;

    { //内側のスコープの始まり
        let team = { name: '巨人' }; //外側のteamがマスクされる（隠される）
        console.log(team.name); //巨人
        console.log(baseball); //{ name: '日本ハム' }
        console.log(baseball.name); //日本ハム(baseballによって参照されているオブジェクトは相変わらずスコープに入っている)
        baseball.name = '阪神';
        console.log(memberNum); //10
    } //内側のブロックの終わり
    console.log(team.name); //阪神(内側のオブジェクトに変更がなされた)
    console.log(baseball.name);
}