
// ==UserScript==
// @name         No Ads In Baidu
// @namespace    https://www.baidu.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/*
// @grant        none
// ==/UserScript==

function noAds() {
    // 竞价排名的广告
    $('[style="display:block !important;visibility:visible !important"]').hide();
    // 搜索结果里的广告
    setTimeout(function(){
        $('.result.c-container').has('.f13 .m:contains("广告")').hide();
    },2000)

}

$(document).ajaxComplete(function (event, xhr, settings) {
    console.log('settings', settings);
    // 搜索结果分页
    if (/\/s\?ie=utf-8&mod=1&isbd=1&isid=/.test(settings.url)) {
        noAds();
    }
});

$(function () {
    noAds();
})
