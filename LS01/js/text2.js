function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
 	var f=function(a,b)
    {
		return a-b;
    }
    return result.sort(f);
}
var c=[1,2,3,2,3,4,7,1,5,8];
console.log(unique(c));
