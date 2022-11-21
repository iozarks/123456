function getTime(){
    let now = new Date()
    let h = now.getHours(),m=now.getMinutes(),s=now.getSeconds(), ye = now.getFullYear(),mo =now.getMonth()+1,da = now.getDate()
    // let result = h + ':' +m + ':'+ s + "       " + ye +'-'+mo+ '' + da
    let mh = h<10? '0'+h:h
    let mm = m<10? '0'+m:m
    let ms = s<10? '0'+s:s
    let mmo = mo<10? '0'+mo:mo
    let mda = da<10? '0'+da:da
    let result = ye + '/' +mmo+ '/'+ mda+ ' &nbsp;&nbsp;   '+mh + ':' +mm+ ':'+ ms
    let result2 = ye +'-'+mmo + '-' + mda + '&nbsp;' + '05:03'
    document.getElementById('getTime').innerHTML = result
    document.getElementById('getTime2').innerHTML = result2
    setTimeout(getTime,1000)
}
window.addEventListener('load',getTime)