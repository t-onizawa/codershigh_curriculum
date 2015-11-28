//========================================================================
/**
 *
 * // 変数の種類 //
 *
 * - 変数はvar 〇〇〇の形で作成します。〇〇〇は任意で命名できます。
 * - var 〇〇〇 = ▲▲▲; とすることで〇〇〇に▲▲▲を代入して使用します。
 * - ▲▲▲に指定できるおおよその種類は以下になります。
 *
 */
//========================================================================

//--------------------------------------------------
/**
 * 文字列
 * - クォーテーションで囲うことで文字列と認識される
 */
//--------------------------------------------------
var aaa = 'こんにちは';
var bbb = '10';

// コンソールに出力
console.log(aaa);       // こんにちは
console.log(bbb);       // 10

// 文字列としての加算
console.log(aaa + aaa); // こんにちはこんにちは
console.log(bbb + bbb); // 1010


//--------------------------------------------------
/**
 * 数値
 * - 数字をそのまま代入すると数値として認識される
 */
//--------------------------------------------------
var ccc = 10;

// コンソールに出力
console.log(ccc);        // 10

// 数値しての加算
console.log(ccc + ccc);  // 20


//--------------------------------------------------
/**
 * 配列
 * - 複数のデータを代入するために使用
 * - var 〇〇〇 = [▲▲▲, ▲▲▲, ▲▲▲];として代入
 * - 使用するときは〇〇〇[2]のようにデータの順番を[]内に指定
 *   ※順番は1からではなく0がスタート
 */
//--------------------------------------------------
var ddd = [100, 200, 300, 'あいうえお', 400];

// コンソールに出力
console.log(ddd[0]);     // 100
console.log(ddd[3]);     // あいうえお


//--------------------------------------------------
/**
 * 連想配列
 * - 複数のデータを代入するために使用
 * - var 〇〇〇 = {
 *       ■■■: ▲▲▲,
  *      ■■■: ▲▲▲,
  *      ■■■: ▲▲▲
 *   };として代入
 * - 使用するときは〇〇〇.■■■のようにデータの■■■を指定
 *   ※■■■は任意で命名
 */
//--------------------------------------------------
var eee = {
    xxx: 100,
    yyy: 'あいうえお',
    zzz: 300
};

// コンソールに出力
console.log(eee.xxx);     // 100
console.log(eee.yyy);     // あいうえお
