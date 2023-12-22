window.onload = function () {
    chrome.cookies.getAll({ domain: ".facebook.com" }, function (cookies) {
        var cookie_m = cookies.map(v => ({
            key: v.name,
            value: v.value,
            domain: v.domain,
            path: v.path,
            hostOnly: v.hostOnly,
            creation: new Date().toISOString(),
            lastAccessed: new Date().toISOString()
        }));
        cookie.innerHTML = JSON.stringify(cookie_m, null, 4);
    });
}

copy.onclick = function () {
    cookie.select()
    document.execCommand("copy");
};

copyb64.onclick = function () {
    let raw = cookie.value;
    cookie.innerHTML = btoa(raw);
    cookie.select()
    document.execCommand("copy");
};

logout.onclick = function () {
    chrome.cookies.getAll({ domain: ".facebook.com" }, function (cookies) {
        for (var i = 0; i < cookies.length; i++) {
            chrome.cookies.remove({ url: "https://facebook.com" + cookies[i].path, name: cookies[i].name });
        }
    });
};