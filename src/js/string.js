/*
* 常用字符串集合
* 作者：陈军良
* 语法：ES6
* */
/***************************************字符串*******************************************/

/*
*返回字符串字节长度
*param ：1.string
*return ：number
*/
const BYTESIZE = str => new Blob(str).size;

/*
*首字符大写
*param ：1.string
*return ：number
*/
const CAPITALIZE = ([first,...rest])=> first.toUpperCase()+rest.join('');

/*
*首字母小写
*param ：1.string
*return ：number
*/
const NOCAPITALIZE = ([first,...rest]) => first.toLowerCase()+rest.join('');

/*
*将-分割的字符串转换成驼峰
*param ：1.string
*return ：number
*/
const  CAPIALIZEWORD= str =>  str.replace(/\-[a-z]/g,char => char.substr(1,1).toUpperCase());

/*
*删除字符串中的HTML标签
*param ：1.string
*return ：number
*/

const DELSTRINGHTML = str => str.replace(/<[^>]*>/g,'');