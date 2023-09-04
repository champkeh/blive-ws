const set = new Set([1,2,3,4])

function proxySetDelete(originDelete) {
    return function (...args) {
        const ret = originDelete(...args)
        console.log("拦截 delete 操作，参数为: ", ...args, "操作结果: ", ret)
        return ret
    }
}

const proxy = new Proxy(set, {
    get: function (target, p, receiver) {
        const instance = Reflect.get(target, p)
        if (p === 'delete') {
            return proxySetDelete(instance.bind(target))
        }
        return instance
    }
})

console.log(proxy.size)
proxy.delete(2)
console.log(proxy.size)


// let set = new Set();
// let proxy = new Proxy(set, {
//     get(target, prop, receiver) {
//         if (prop === 'delete') {
//             console.log('代理delete')
//             return () => {}
//         }
//         return target[prop].bind(target)
//     }
// });
// proxy.add('test');
// proxy.delete('test');
// console.log(proxy)
