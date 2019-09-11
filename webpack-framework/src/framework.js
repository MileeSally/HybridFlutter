
global.guid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

global.judgeIsNotNull = function(pageId, id, val) {
    return !!(pageId && id && val);

};

global.getExpValue = function (data, script) {
    const expFunc = exp => {
        return new Function('', 'with(this){' + exp + '}').bind(data)();
    };
    let value = expFunc(script);
    if (value instanceof Object) {
        return JSON.stringify(value);
    }
    if (value instanceof Array) {
        return JSON.stringify(value);
    }
    return value;
};

require('./page');

// let test = "Page({\n" +
//     "    data: {\n" +
//     "        color1:\"red\",\n" +
//     "        color2:\"green\",\n" +
//     "        color3:\"blue\",\n" +
//     "        list: [3,4],\n" +
//     "        list2: [3,4]\n" +
//     "    },\n" +
//     "    onLoad() {\n" +
//     "        this.setData({\n" +
//     "            color1:\"black\",\n" +
//     "            color2:\"black\",\n" +
//     "            list: [1,2]\n" +
//     "        });\n" +
//     "    },\n" +
//     "    onLoadT() {\n" +
//     "        this.setData({\n" +
//     "            color1:\"red\",\n" +
//     "            color2:\"red\",\n" +
//     "            list: [1,2]\n" +
//     "        });\n" +
//     "    }\n" +
//     "});";
//
// function main() {
//     loadPage("1111");
//     // global.page.onLoad();
//     let page = getPage("1111");
//     page.__native__evalInPage(test);
//     page.data = global.page.data;
//     page.onLoad = global.page.onLoad;
//     page.onLoadT = global.page.onLoadT;
//     // console.log(page.data);
//     page.__native__initComplete();
//     // console.log(page.data);
//     page.__native__getExpValue("x1", "t1", "color", "return color1");
//     let x = page.__native__getExpValue("x1", "t1", "visible", "return 'x' + color1");
//     let y = page.__native__getExpValue('x4', "t1", "for", "return list.length");
//     // console.log("x = " + x);
//     page.__native__getExpValue("x2", "t1", "color", "return color2");
//     page.__native__getExpValue("x3", "t1", "color", "return color3");
//     // console.log("y = " + y);
//     page.onLoad();
//
//     page.__native__removeObserverByIds(['x1']);
//     page.onLoadT();
// }
//
// main();