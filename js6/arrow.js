/** アロー関数 */
/** 以下の関数は同じ働きをする */
const f = function() { return 'Hello!' }
const f1 = () => "Good!!";
console.log("f " + f);
console.log("f1 " + f1);

const g = function(greeting) { return `${greeting}`; }
const g1 = greeting => `${greeting}`;
console.log("g " + g);
console.log("g1 " + g1);

const h = function(a, b) { return a + b };
const h1 = (a, b) => a + b;
console.log("h " + h);
console.log("h1 " + h1);

const test = {
    name: `Ariel`,
    greetBackwards: function() {
        const getReverseName = () => { /** アロー関数 */
            console.log("this " + this);
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        } /**ここまでアロー関数 */
        return `${getReverseName()} si eman ym, olleH`;
    },
    /** オブジェクトtestのプロパティgreetBackwardsの値の関数の定義の終わり */
}; /** オブジェクトの終わり */
console.log(test.greetBackwards());