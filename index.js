export const  getQueryString = (name)=> {
    var reg = new RegExp("(^|&|[?])" + name + "=([^&]*)(&|$)")
    var r = window.location.href.substr(1).match(reg)
    var newName = (r != null ? r[2] : "")
    return newName
}