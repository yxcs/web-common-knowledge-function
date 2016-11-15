Array.prototype.unique1 = function(){
    var result = [];
    this.forEach(function(v){
        if(result.indexOf(v) < 0){
            result.push(v);
        }
    });
    return result;
}

Array.prototype.unique2 = function(){
    var result = [],hash = {};
    this.forEach(function(v){
        var type = typeof(v);  //获取元素类型
        hash[v] || (hash[v] = new Array());
        if(hash[v].indexOf(type) < 0){
            hash[v].push(type);  //存储类型
            result.push(v);
        }
    });
    return result;
}