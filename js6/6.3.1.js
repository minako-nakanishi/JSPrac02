/** 引数と関数 */
function f(x) {
    return `f内の値：${x}`;
}
console.log(f()); //fの中の値 undefined
console.log(f(2)); //fの中の値 undefined

/** 引数の分割代入 */
function sentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}
const o = {
    subject: "I",
    verb: "have",
    object: "apples"
};
console.log(sentence(o));

/** 配列の分割代入 */
function fruits([subject, verb, object]) {
    return `${subject} ${verb} ${object}`;
}

const m = ["You", "eat", "Apples"];
console.log(fruits(m));

/** 展開演算子を用いた引数の分割代入 */
function addPrefix(prefix, ...words) {
    const prefixWords = []; //初期化
    for (let i = 0; i < words.length; i++) { //wordsの数分回す。
        prefixWords[i] = prefix + words[i]; //接頭語とforで回したwordsを繋げる
    }
    return prefixWords;
}
console.log(addPrefix("Ap", "ple", "licot")); //[Apple, Aplicot]