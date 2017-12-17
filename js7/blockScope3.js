{ //外側のスコープの始まり
    let out_team = { name: '日本ハム' };
    let baseball = out_team;
    let memberNum = 10;

    { //内側のスコープの始まり
        let in_team = { name: '巨人' }; //外側のteamがマスクされる（隠される）
        console.log(in_team.name); //巨人
        console.log(baseball); //{ out_name: '日本ハム' }
        console.log(baseball.out_team.name); //日本ハム(baseballによって参照されているオブジェクトは相変わらずスコープに入っている)
        baseball.out_team.name = '阪神';
        console.log(memberNum); //10
    } //内側のブロックの終わり
    console.log(out_team.name); //阪神(内側のオブジェクトに変更がなされた)
    console.log(baseball.name); // undefined
}