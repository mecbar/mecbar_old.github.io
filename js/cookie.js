function _NibirumailGetStyle(a, b) {
    return "undefined" != typeof getComputedStyle ? getComputedStyle(a, null).getPropertyValue(b) : a.currentStyle[b]
}

function _NibirumailFadeOut(a, b) {
    if (a)
        if (b) var c = 1,
            d = setInterval(function() {
                c -= 50 / b, c <= 0 && (clearInterval(d), c = 0, a.style.display = "none", a.style.visibility = "hidden"), a.style.opacity = c, a.style.filter = "alpha(opacity=" + 100 * c + ")"
            }, 50);
        else a.style.opacity = 0, a.style.filter = "alpha(opacity=0)", a.style.display = "none", a.style.visibility = "hidden"
}

function _NibirumailAddEventListener(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c) : a.attachEvent("on" + b, function() {
        c.call(a)
    })
}

function NibirumailgetCookie(a) {
    var b = "; " + document.cookie,
        c = b.split("; " + a + "=");
    if (2 == c.length) return c.pop().split(";").shift()
}

function NibirumailCookieAccept() {
    var a = new Date;
    a.setMonth(a.getMonth() + 3);
    var b = location.hostname.split("."),
        e = (b.shift(), b.join("."), b.slice(-2).join("."));
    console.log(e), document.cookie = "nibirumail_cookie_advice=1; expires=" + a.toUTCString() + "; path=/;"
}

function init_NibirumailCookieWidget() {
    if (void 0 === NibirumailgetCookie("nibirumail_cookie_advice")) {
        var a = document.getElementById("nibirumail_cookie_advice");
        if (!a) {
            var b = document.createElement("div");
            b.id = "nibirumail_cookie_advice", document.body.appendChild(b), a = b
        }
        a.innerHTML = nibirumail_advice_text, a.style.zIndex = 2147483647, a.style.position = "fixed", a.style.bottom = 0, a.style.left = 0, a.style.width = "100%", a.style.background = "#000", a.style.color = "#fff", a.style.textAlign = "center", a.style.padding = "15px 0", a.style.fontSize = "12px";
        var d, c = a.querySelectorAll("a");
        for (d = 0; d < c.length; d++) c[d].style.color = "#fff", c[d].style.textDecoration = "underline";
        var g = (_NibirumailGetStyle(a, "height"), document.querySelectorAll(".nibirumail_agreement"));
        for (d = 0; d < g.length; d++) {
            var h = g[d];
            _NibirumailAddEventListener(h, "click", function() {
                NibirumailCookieAccept();
                var a = document.getElementById("nibirumail_cookie_advice");
                a && (_NibirumailFadeOut(a, 400), setTimeout(function() {
                    document.body.style.paddingBottom = "auto"
                }, 400)), "function" == typeof NibirumailCookieBlocker && NibirumailCookieBlocker(1), "function" == typeof NibirumailCookieAccept_callback && NibirumailCookieAccept_callback()
            })
        }
    }
    var i = document.querySelectorAll(".nibirumail_delete_cookie");
    for (d = 0; d < i.length; d++) {
        var j = i[d];
        _NibirumailAddEventListener(j, "click", function() {
            document.cookie = "nibirumail_cookie_advice=1; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/", document.location.reload()
        })
    }
}
if (void 0 === nibirumail_stop_jquery) var nibirumail_stop_jquery = 0;
if (void 0 === cookie_policy_url) var cookie_policy_url = "https://nibirumail.com/cookies/policy/?url=" + window.location.hostname;
if (void 0 === nibirumail_advice_text) var nibirumail_advice_text = window.location.hostname + ' utilizza i cookies per offrirti un\'esperienza di navigazione migliore. Usando il nostro servizio accetti l\'impiego di cookie in accordo con la nostra cookie policy. <a target="_blank" href="' + cookie_policy_url + '">Scoprine di pi&ugrave;</a>. <a class="nibirumail_agreement" href="javascript:;">Ho capito.</a>';
init_NibirumailCookieWidget();