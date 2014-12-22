//基于underscore.js
/**value: {
*     id: //标识符
*     childs: //子元素
*  }
*/
function aTraverse(value, type, callBack, parent) {
    var result = [];
    
    if (!_.size(value)) {
        return;
    }
    
    _.each(value, function(item) {
        var id = item.id;
        var c_result = []; // 接受子孩子遍历返回的结果
        
        if (item.childs && _.size(item.childs)) {
            c_result = aTraverse(
                item.childs,
                + type + 1, //记录层级数
                callBack,
                !parent ? id : parent + '|' + id //传递祖先元素的id, ‘|’ 分割
            );
        }
        //搜集子孩子的结果
        result.push(
            callBack(item, type, parent, c_result);    
        );
    });
    // 把当前元素结果返还给父元素
    return result;
}
