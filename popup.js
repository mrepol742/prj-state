window.onload = function () {
    chrome.cookies.getAll({
    domain: "facebook.com"
    }, function (cookies) {
        var cookie_m = cookies.map(v => ({
            key: v.name,
            value: v.value,
            domain: v.domain,
            path: v.path,
            hostOnly: v.hostOnly,
            creation: new Date().toISOString(),
            lastAccessed: new Date().toISOString()
        }));
        cookie.innerText = JSON.stringify(cookie_m, null, 4);
        console.log(JSON.stringify(cookie_m, null, 4))
    });
}