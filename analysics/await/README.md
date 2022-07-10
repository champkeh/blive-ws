# await 反编译

在分析代码的时候会看到大量的`await`编译之后的代码，比如下面这样的代码：

```js
function getDanmuInfo(roomId) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (t) {
            switch (t.label) {
                case 0:
                    return [4, ajax("/xlive/web-room/v1/index/getDanmuInfo?id=" + roomId + "&type=0")];
                case 1:
                    return [2, t.sent()]
            }
        })
    })
}
```

可以看到，内部采用`switch/case`处理大量分支，至于这些分支之间的关系以及源代码是什么样的，很难看出逻辑来。

因此，这里主要就是分析源代码与编译代码之间的对应关系，将上面的代码翻译成`await`语法的源代码。
