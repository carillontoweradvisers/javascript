for (var i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        var href = this.getAttribute("href");
        var target = this.getAttribute("target");
        if ((target != undefined) && ((target == "_parent") || (target == "_blank"))) {
            // just do normal stuff 
        } else if (href && href !== "#") {
            e.preventDefault();
            window.location.replace(href);
        } else {
            e.preventDefault();
            return false;
        }
    };
}
