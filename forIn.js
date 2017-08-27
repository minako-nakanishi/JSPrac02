/**for inループ */
const player = { name: 'Thomas', rank: 'Midshipman', age: '25' };
for (let prop in player) {
    if (!player.hasOwnProperty(prop)) continue;
    console.log(prop + ':' + player[prop]);
}
/**for of ループ */
const hand = [randFace(), randFace(), randFace()];
for (let face of hand) console.log(`サイコロの目...${face}!`)