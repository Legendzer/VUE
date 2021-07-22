const app = new Vue({
    el: '#app',
    data:{
        list: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2006-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            }
        ]
    },
    methods: {
        increment(index){
            this.list[index].count++
        },
        decrement(index){
            this.list[index].count--
        },
        removeHandler(index){
            this.list.splice(index, 1)
        }
    },
    computed: {
        totalPrice(){
            // 1.普通的for循环
            // let totalPrice = 0;
            // for(let i = 0; i < this.list.length; i++){
            //     totalPrice += this.list[i].price * this.list[i].count
            // }
            // return totalPrice

            // 2.for (let i in this.list)
            // let totalPrice = 0;
            // for(let i in this.list){
            //     totalPrice += this.list[i].price * this.list[i].count;
            // }
            // return totalPrice

            // 3.for(let i of this.list)
            // let totalPrice = 0;
            // for(let item of this.list){
            //     totalPrice += item.price * item.count;
            // }
            // return totalPrice;


        }
    },
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    }
})

// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
// filter/map/reduce（高阶函数）
// filter中的回调函数有一个要求：必须返回一个boolean值
// true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false:当返回false时，函数内部会过滤掉这次的n

const nums = [10, 20, 111, 222, 444, 40, 50]
// 1.filter函数的使用
// 10,20,40,50
let newNums = nums.filter(function(n){
    return n < 100;
})

// 2.map函数的使用
let new2Nums = newNums.map(function(n){
    return n * 2
})

// 3.reduce函数的使用
// reduce作用是对数组中所有的内容进行汇总
let total = new2Nums.reduce(function(preValue, n){
    return preValue + n
}, 0)
// 第一次：preValue 0, n 20
// 第二次：prevalue 20, n 40
// 第三次：prevalue 60, n 80
// 第四次：prevalue 140, n 100
// total: 240
// preValue: 计算结束的返回值，n:当前元素

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n);