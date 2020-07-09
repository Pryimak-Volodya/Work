function Autoriz(a) {
    var usLogin = a.login.value;
    var usPass = a.usPass.value;
        if (usLogin.length > 3) {
            if (usPass.length != 0) {
                setCookie("login", usLogin, 1);
                setCookie("password", usPass, 1);

              window.location.assign('form.html');
            }
        }
}
function form(a) {
    var usName = a.name.value;
    var usSurname = a.surname.value;
    var usPass = a.usPass.value;
        if (usName.length > 3) {
            if (usSurname.length > 2) {
                if (usPass.length != 0) {
                    setCookie("name", usName, 1);
                    setCookie("surname", usSurname, 1);
                    setCookie("password", usPass, 1);
                    alert("Прийнято");
                }
            }
        }
}
function setCookie(name,value,days) {
    var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
    return null;
    }
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
function autorizLogin() {
    var cookieLogin = getCookie('login');
    var cookiePass = getCookie('password');
    if (cookieLogin && cookiePass) {
        window.location.assign('form.html');
    }
}
function autorizForm() {
    var cookieLogin = getCookie('login');
    var cookiePass = getCookie('password');
    if (!cookieLogin && !cookiePass) {
        window.location.assign('index.html');
    }
}
function cookieErase () {
    setCookie('login', getCookie('login'), -1);
    setCookie('password', getCookie('password'), -1);
    setCookie('name', getCookie('name'), -1);
    setCookie('surname', getCookie('surname'), -1);
 };

