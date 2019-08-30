//注入页面的脚本文件
(function () {


    $(function () {
        const $searchContent = $("h3");
        const $len = $searchContent.length;
        if ($len <= 0) return;

        for (let i = 0; i < $len; i++) {
            $searchContent[i].parentElement.nodeName === "A" && $searchContent[i].parentElement.setAttribute('target', '_blank');
        }
    })
})()