(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("click", (function(e) {
        let item = e.target;
        if (item.closest(".copy-block")) {
            item.closest(".copy-block").classList.add("active");
            setTimeout((function() {
                item.closest(".copy-block").classList.remove("active");
            }), 2e3);
        }
        if (document.body.classList.contains("popup-visible")) if (item.classList.contains("payment-attention__button")) document.body.classList.remove("popup-visible"); else if (!item.classList.contains("payment-bottom__button")) if (!item.classList.contains("payment-attention__title") && !item.classList.contains("payment-attention__image") && !item.classList.contains("payment-attention__text") && !item.classList.contains("payment-attention")) document.body.classList.remove("popup-visible");
    }));
    const paymentBottomButtonReady = document.querySelector(".payment-bottom__button-ready");
    const paymentSbp = document.querySelector(".payment-info");
    const paymentFind = document.querySelector(".payment-find");
    const paymentFindGoback = document.querySelector(".payment-find__goback");
    const paymentBottom = document.querySelector(".payment-bottom");
    function go_forward() {
        paymentFind.removeAttribute("hidden");
        paymentSbp.setAttribute("hidden", "");
        paymentBottom.setAttribute("hidden", "");
        document.body.classList.add("popup-visible");
    }
    function go_back() {
        paymentSbp.removeAttribute("hidden");
        paymentBottom.removeAttribute("hidden");
        paymentFind.setAttribute("hidden", "");
    }
    if (paymentBottomButtonReady) paymentBottomButtonReady.addEventListener("click", go_forward);
    if (paymentFindGoback) paymentFindGoback.addEventListener("click", go_back);
    window["FLS"] = false;
    isWebp();
})();