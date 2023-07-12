const loadScript = function(src,callback){
const script=document.createElement('script');
script.src = src
script.onload=function(){
    callback()
}
document.head.append(script)
}
loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',function(){
    console.log(_.uniq([3,4,5,6,6,8,9,8]));
})