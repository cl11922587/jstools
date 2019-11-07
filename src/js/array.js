/*
* 常用数组方法集合
* 作者：陈军良
* 语法：ES6
* */
/***************************************数组*******************************************/

/*
*数组去重
*param ：1.Array
*return ：Array
*/
function unique(arr) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        return;
    }
    return Array.from(new Set(arr))
}

/*
*判断值在数组中的位置
*param ：1,Array 2,string
*return ：Number
*/
function strIndexArr(arr, str) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        return -1
    }
    return arr.findIndex(item => item == str);
}

/*
*检测数组各项是否相等
*param ：1,Array
*return ：boolean
*/
const ALLEQUAL = arr => arr instanceof Array ? arr.every(val => val === arr[0]) : false;

/*
*求平均数
* param ：1,Array or number
* return ：number
* */
const AVERAGE = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

/*
*其他类型转数组
* param ：1,Array or number or string
* return ：Array
* */
const CASEARRAY = (...nums) => nums;

/*
*去除数组中的无效/无用值
* param ：1,Array
* return ：Array
* */
const COMPACT = arr => arr.filter(Boolean);

/*
*检索在数组中出现的次数
* param ：1,Array 2,string
* return ：number
* */
const COUNTOFARRAY = (arr, str) => arr.reduce((a, v) => v == str ? a + 1 : a, 0);

/*
*扁平化数组
* param ：1,Array
* return ：Array
* */
const DEEPFLATTEN = arr => [].concat(...arr.map(v => (Array.isArray(v) ? DEEPFLATTEN(v) : v )));

/*
*查询素组的差异，并返回所有差异
* param ：1,Array 2,Array
* return ：Array
* */
const DIFFARRAY = (a,b) => {
    const s =new Set(b);
    return  a.filter(x => !s.has(x));
};

/*
*筛选条件过滤
* param ：1,Array 2,function(需要有返回结果)
* return ：Array
* */
const DROPWHILE = (arr,fn)=>arr.reduce((acc,el) => fn(el) ? [...acc,el] : acc,[] );


/*
*返回数组中一个值所有索引
* param ：1,Array 2,str
* return ：Array
* */
const INDEXOFALL = (arr,str) => arr.reduce((acc,el,i)=> (el===str ?[...acc,i] : acc ),[]);

/*
*获取两个数组交集
* param ：1,Array 2,Array
* return ：Array
* */
const INTERSECTION = (a,b) =>{
  const s = new Set(b);
  return a.filter(x=> s.has(x));
};

/*
*生成两数之间随机个数的随机数组
* param ：1,Array 2,Array
* return ：Array
* */
const RANDOMARRAYINRANGE =(min,max,i) =>  Array.from({length:i},x=> Math.floor( Math.random()* (max - min) +min  ));

/*
*将100块钱随机分成10个红包，红包最低的6块，最高的15块
* param ：1,Array 2,Array
* return ：Array
* */
var  $num = 100;
const RANDOMBAG =(min,max,i,count) =>Array.from({length:i},(x,q,$min,$max,$randNum)=>{
        $min = ($num - max * ((i-q-1)))>min?($num - max * ((i-q-1))):min;
        $max = ($num - min * ((i-q-1)))<max?($num - min * ((i-q-1))):max;
       $randNum = Math.floor(Math.random() * ( $max - $min )+$min);
       $num -= $randNum;
       return $randNum;
});

/*
*在指定数组中获取随机数
* param ：1,Array
* return ：number
* */
const RANDOMNUMBER = arr => arr[Math.floor(Math.random()*arr.length)];


/*
*在指定数组中获取指定长度的随机数
* param ：1,Array
* return ：number
* */
const SAMPLESIZE = ([...arr],n=1) => {
    const m =arr.length;
        for(let i =m-1;i>=0;i--){
            let rindex = Math.floor(Math.random() *(i+1) );
            let temp = arr[rindex];
            arr[rindex] = arr[i];
            arr[i] = temp;
        }
    return arr.slice(0,n);
};

/*
*数组乱序
* param ：1,Array
* return ：number
* */
const SHUFFLE = ([...arr],n=1) => {
    const m =arr.length;
    for(let i =m-1;i>=0;i--){
        let rindex = Math.floor(Math.random() *(i+1) );
        let temp = arr[rindex];
        arr[rindex] = arr[i];
        arr[i] = temp;
    }
    return arr
};

/*
*根据ID生成数结构
* param ：1,Array
* return ：number
* */
//todo