/*
* 常用函数集合
* 作者：陈军良
* 语法：ES6
* */
/***************************************函数*******************************************/


/*
*延迟执行 DEDER
*param ：1.function 2.argment
*return ：Array
*/
const DEFER  = (fn,...args) => setTimeout(fn,1,...args);

/*
*运行多个 promises
*param ：1.function 2.argment
*return ：Array
*/
const RUNMOREPROMISES = ps=>ps.reduce((p,next)=>p.then(next),Promise.resolve());
const DELAY = d => new Promise(r => setTimeout(r, d));

/*
*计算函数执行时长
*param ：1.callback
*return ：number
*/
const FUNTIME = callback => {
    console.time('start');
    const  r = callback();
    console.timeEnd('end');
    return r;
};

/*
*创建一个发布/订阅
*param ：1.callback
*return ：number
*/
const createEventHub = () => ({
    hub: Object.create(null),
    emit(event, data) {
        (this.hub[event] || []).forEach(handler => handler(data));
    },
    on(event, handler) {
        if (!this.hub[event]) this.hub[event] = [];
        this.hub[event].push(handler);
    },
    off(event, handler) {
        const i = (this.hub[event] || []).findIndex(h => h === handler);
        if (i > -1) this.hub[event].splice(i, 1);
        if (this.hub[event].length === 0) delete this.hub[event];
    }
});

/*
*只调用一次的函数
*param ：1.function
*return ：function
*/
const once = fn => {
    let called = false;
    return function () {
        if (!called) {
            called = true;
            fn.apply(this, arguments)
        }
    }
};
