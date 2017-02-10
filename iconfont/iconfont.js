﻿/*
*作者：王焱辉
*日期：2016/10/21
*版本：1.0.0
*说明：给普通的input增加选择图标的功能
*/
var iconTypes = ['base', 'text', 'data', 'media', 'mobile', 'develop', 'engineer', 'weather'];
var iconItems = {
    base: [{ name: "th", clas: "th" },
    { name: "th-list", clas: "th-list" },
    { name: "th-large", clas: "th-large" },
    { name: "menu", clas: "menu" },
    { name: "list", clas: "list" },
    { name: "option", clas: "option" },
    { name: "home", clas: "home" },
    { name: "asterisk", clas: "asterisk" },
    { name: "shopping", clas: "shopping" },
    { name: "time", clas: "time" },
    { name: "globe", clas: "globe" },
    { name: "loading1", clas: "loading1" },
    { name: "loading2", clas: "loading2" },
    { name: "loading3", clas: "loading3" },
    { name: "picture", clas: "picture" },
    { name: "map", clas: "map" },
    { name: "map-marker", clas: "map-marker" },
    { name: "calendar", clas: "calendar" },
    { name: "plane", clas: "plane" },
    { name: "gift", clas: "gift" },
    { name: "umbrella", clas: "umbrella" },
    { name: "tree", clas: "tree" },
    { name: "pig", clas: "pig" },
    { name: "dollar", clas: "dollar" },
    { name: "yen", clas: "yen" },
    { name: "euro", clas: "euro" },
    { name: "check", clas: "check" },
    { name: "unchecked", clas: "unchecked" },
    { name: "refresh", clas: "refresh" },
    { name: "retweet", clas: "retweet" },
    { name: "repeat", clas: "repeat" },
    { name: "redo", clas: "redo" },
    { name: "random", clas: "random" },
    { name: "move", clas: "move" },
    { name: "sign-in", clas: "sign-in" },
    { name: "sign-out", clas: "sign-out" },
    { name: "arrow-up", clas: "arrow-up" },
    { name: "arrow-down", clas: "arrow-down" },
    { name: "arrow-left", clas: "arrow-left" },
    { name: "arrow-right", clas: "arrow-right" },
    { name: "chevron-up", clas: "chevron-up" },
    { name: "chevron-down", clas: "chevron-down" },
    { name: "chevron-left", clas: "chevron-left" },
    { name: "chevron-right", clas: "chevron-right" },
    { name: "circlr-up", clas: "circlr-up" },
    { name: "circlr-down", clas: "circlr-down" },
    { name: "circle-left", clas: "circle-left" },
    { name: "circle-right", clas: "circle-right" },
    { name: "ban", clas: "ban" },
    { name: "ok-sign", clas: "ok-sign" },
    { name: "remove-sign", clas: "remove-sign" },
    { name: "ok-sign-1", clas: "ok-sign-1" },
    { name: "remove-sign-1", clas: "remove-sign-1" },
    { name: "plus-sign", clas: "plus-sign" },
    { name: "minus-sign", clas: "minus-sign" },
    { name: "heart", clas: "heart" },
    { name: "heart-empty", clas: "heart-empty" },
    { name: "thumbs-up", clas: "thumbs--up" },
    { name: "thumbs-down", clas: "thumbs-down" },
    { name: "phone", clas: "phone" },
    { name: "qrcode", clas: "qrcode" },
    { name: "barcode", clas: "barcode" },
    { name: "app", clas: "app" },
    { name: "nav", clas: "nav" },
    { name: "expand", clas: "expand" },
    { name: "telphone", clas: "telphone" },
    { name: "msg", clas: "msg" },
    { name: "radar", clas: "radar" },
    { name: "weather", clas: "weather" },
    { name: "to-top", clas: "to-top" },
    { name: "share-link", clas: "share-link" },
    { name: "king", clas: "king" },
    { name: "queen", clas: "queen" },
    { name: "man", clas: "man" },
    { name: "woman", clas: "woman" },
    { name: "user", clas: "user" },
    { name: "user-group", clas: "user-group" },
    { name: "role", clas: "role" },
    { name: "role-group", clas: "role-group" },
    { name: "company", clas: "company" },
    { name: "partment", clas: "partment" },
    { name: "job", clas: "job" },
    { name: "identity", clas: "identity" },
    { name: "education", clas: "education" },
    { name: "safe", clas: "safe" },
    { name: "power", clas: "power" },
    { name: "role-power", clas: "role-power" },
    { name: "role-manage", clas: "role-manage" },
    { name: "tower", clas: "tower" },
    { name: "pawn", clas: "pawn" },
    { name: "customer-service", clas: "customer-service" },
    { name: "user-manage", clas: "user-manage" },
    { name: "purchase", clas: "purchase" },
    { name: "user-examine", clas: "user-examine" },
    { name: "workflow1", clas: "workflow1" },
    { name: "workflow2", clas: "workflow2" },
    { name: "meeting", clas: "meeting" },
    { name: "meeting2", clas: "meeting2" },
    { name: "meeting-video", clas: "meeting-video" },
    { name: "meeting-phone", clas: "meeting-phone" },
    { name: "todo-synergy", clas: "todo-synergy" },
    { name: "material-flow", clas: "material-flow" },
    { name: "coding", clas: "coding" },
    { name: "begin", clas: "begin" },
    { name: "end", clas: "end" }
    ],
    text: [{ name: "folder", clas: "folder" },
    { name: "folder-open", clas: "folder-open" },
    { name: "save", clas: "save" },
    { name: "plus", clas: "plus" },
    { name: "minus", clas: "minus" },
    { name: "pencil", clas: "pencil" },
    { name: "cut", clas: "cut" },
    { name: "search", clas: "search" },
    { name: "copy", clas: "copy" },
    { name: "filter", clas: "filter" },
    { name: "clear", clas: "clear" },
    { name: "tag", clas: "tag" },
    { name: "tags", clas: "tags" },
    { name: "flag", clas: "flag" },
    { name: "bookmark", clas: "bookmark" },
    { name: "delete", clas: "delete" },
    { name: "edit", clas: "edit" },
    { name: "help", clas: "help" },
    { name: "info", clas: "info" },
    { name: "print", clas: "print" },
    { name: "lamp", clas: "lamp" },
    { name: "share", clas: "share" },
    { name: "paperclip", clas: "paperclip" },
    { name: "file", clas: "file" },
    { name: "book", clas: "book" },
    { name: "mail", clas: "mail" },
    { name: "mail-open", clas: "mail-open" },
    { name: "briefcase", clas: "briefcase" },
    { name: "inbox", clas: "inbox" },
    { name: "news", clas: "news" },
    { name: "notice", clas: "notice" },
    { name: "bugle", clas: "bugle" },
    { name: "tasks", clas: "tasks" },
    { name: "list-paper", clas: "list-paper" },
    { name: "cloud", clas: "cloud" },
    { name: "have-done", clas: "have-done" },
    { name: "to-do", clas: "to-do" },
    { name: "contract", clas: "contract" },
    { name: "seal", clas: "seal" },
    { name: "ok-1", clas: "ok-1" },
    { name: "remove-1", clas: "remove-1" },
    { name: "saved", clas: "saved" },
    { name: "sort", clas: "sort" },
    { name: "sort-to-high", clas: "sort-to-high" },
    { name: "sort-to-low", clas: "sort-to-low" },
    { name: "indent-right", clas: "indent-right" },
    { name: "indent-left", clas: "indent-left" },
    { name: "font", clas: "font" },
    { name: "bold", clas: "bold" },
    { name: "italic", clas: "italic" },
    { name: "header", clas: "header" },
    { name: "font-size", clas: "font-size" },
    { name: "text-width", clas: "text-width" },
    { name: "text-height", clas: "text-height" },
    { name: "align-left", clas: "align-left" },
    { name: "align-right", clas: "align-right" },
    { name: "align-center", clas: "align-center" },
    { name: "align-justify", clas: "align-justify" },
    { name: "zip-bag", clas: "zip-bag" },
    { name: "svg", clas: "svg" },
    { name: "word", clas: "word" },
    { name: "excel", clas: "excel" },
    { name: "ppt", clas: "ppt" },
    { name: "rar", clas: "rar" },
    { name: "zip", clas: "zip" }
    ],
    data: [{ name: "热力图", clas: "relitu" },
    { name: "散点图", clas: "sandiantu" },
    { name: "散点图", clas: "sandiantu2" },
    { name: "雷达图", clas: "leidatu" },
    { name: "曲线图", clas: "quxiantu" },
    { name: "饼图", clas: "bingtu" },
    { name: "柱状图", clas: "zhuzhuangtu" },
    { name: "折线图", clas: "zhexiantu" },
    { name: "data-analysis", clas: "data-analysis" },
    { name: "data-monitor", clas: "data-monitor" },
    { name: "data-monitor2", clas: "data-monitor2" },
    { name: "data-report", clas: "data-report" },
    { name: "import", clas: "import" },
    { name: "export", clas: "export" },
    { name: "cloud-down", clas: "cloud-down" },
    { name: "cloud-up", clas: "cloud-up" },
    { name: "cloud-host", clas: "cloud-host" },
    { name: "cloud-join", clas: "cloud-join" },
    { name: "cloud-db", clas: "cloud-db" },
    { name: "database", clas: "database" },
    { name: "database-backup", clas: "database-backup" },
    { name: "database-cog", clas: "database-cog" },
    { name: "data-cog", clas: "data-cog" },
    { name: "data-search", clas: "data-search" },
    { name: "bigdata", clas: "bigdata" },
    { name: "dictionary", clas: "dictionary" },
    { name: "books", clas: "books" },
    { name: "data-detail", clas: "data-detail" },
    { name: "data-panel", clas: "data-panel" },
    { name: "data-link", clas: "data-link" },
    { name: "network", clas: "network" },
    { name: "SNS", clas: "sns" },
    { name: "social-chat", clas: "social-chat" },
    { name: "data-compress", clas: "data-compress" },
    { name: "calculator", clas: "calculator" },
    { name: "formula", clas: "formula" },
    { name: "formula2", clas: "formula2" }
    ],
    media: [{ name: "eye-open", clas: "eye-open" },
    { name: "eye-close", clas: "eye-close" },
    { name: "star", clas: "star" },
    { name: "star-empty", clas: "star-empty" },
    { name: "film", clas: "film" },
    { name: "camera", clas: "camera" },
    { name: "video", clas: "video" },
    { name: "hdd", clas: "hdd" },
    { name: "cd", clas: "cd" },
    { name: "glasses", clas: "glasses" },
    { name: "play", clas: "play" },
    { name: "stop", clas: "stop" },
    { name: "step-forward", clas: "step-forward" },
    { name: "forward", clas: "forward" },
    { name: "fast-forward", clas: "fast-forward" },
    { name: "step-backward", clas: "step-backward" },
    { name: "backward", clas: "backward" },
    { name: "fast-backward", clas: "fast-backward" },
    { name: "pause", clas: "pause" },
    { name: "off", clas: "off" },
    { name: "eject", clas: "eject" },
    { name: "record", clas: "record" },
    { name: "play-circle", clas: "play-circle" },
    { name: "screenshot", clas: "screenshot" },
    { name: "fullscreen", clas: "fullscreen" },
    { name: "resize-full", clas: "resize-full" },
    { name: "resize-small", clas: "resize-small" },
    { name: "resize-vertical", clas: "resize-vertical" },
    { name: "resize-horizontal", clas: "resize-horizontal" },
    { name: "adjust", clas: "adjust" },
    { name: "tint", clas: "tint" },
    { name: "leaf", clas: "leaf" },
    { name: "tree-coco", clas: "tree-coco" },
    { name: "zoom-in", clas: "zoom-in" },
    { name: "zoom-out", clas: "zoom-out" },
    { name: "switch", clas: "switch" },
    { name: "send", clas: "send" },
    { name: "music", clas: "music" },
    { name: "headphones", clas: "headphones" },
    { name: "volume", clas: "volume" },
    { name: "volume-off", clas: "volume-off" },
    { name: "volume-up", clas: "volume-up" },
    { name: "volume-down", clas: "volume-down" }
    ],
    engineer: [{ name: "monitor", clas: "monitor" },
    { name: "monitor-long", clas: "monitor-long" },
    { name: "monitor-short", clas: "monitor-short" },
    { name: "monitor-360", clas: "monitor-360" },
    { name: "console", clas: "console" },
    { name: "monitoring", clas: "monitoring" },
    { name: "wrench", clas: "wrench" },
    { name: "hammer", clas: "hammer" },
    { name: "overhaul", clas: "overhaul" },
    { name: "maintain", clas: "maintain" },
    { name: "pin", clas: "pin" },
    { name: "magnet", clas: "magnet" },
    { name: "ruler", clas: "ruler" },
    { name: "compasses", clas: "compasses" },
    { name: "bulhorn", clas: "bulhorn" },
    { name: "alert", clas: "alert" },
    { name: "warning", clas: "warning" },
    { name: "fire", clas: "fire" },
    { name: "gas", clas: "gas" },
    { name: "fire-hydrant", clas: "fire-hydrant" },
    { name: "fire-man", clas: "fire-man" },
    { name: "fire-car", clas: "fire-car" },
    { name: "truck", clas: "truck" },
    { name: "oiling", clas: "oiling" },
    { name: "maintain-small", clas: "maintain-small" },
    { name: "extinguisher", clas: "extinguisher" },
    { name: "helmet", clas: "helmet" },
    { name: "helmet-man", clas: "helmet-man" },
    { name: "voltmeter", clas: "voltmeter" },
    { name: "electro-manage", clas: "electro-manage" },
    { name: "bulb", clas: "bulb" },
    { name: "bulb2", clas: "bulb2" },
    { name: "hourglass", clas: "hourglass" },
    { name: "scale", clas: "scale" },
    { name: "gage-weight", clas: "gage-weight" },
    { name: "gage-flow", clas: "gage-flow" },
    { name: "gage-pressure", clas: "gage-pressure" },
    { name: "gage-speed", clas: "gage-speed" },
    { name: "风机", clas: "fengji" },
    { name: "风机2", clas: "fengji2" },
    { name: "叶片", clas: "yepian" },
    { name: "photovoltaic", clas: "photovoltaic" },
    { name: "photovoltaic2", clas: "photovoltaic2" },
    { name: "crane", clas: "crane" },
    { name: "waterplant", clas: "waterplant" },
    { name: "环保", clas: "ep" },
    { name: "环保", clas: "ep2" },
    { name: "pipeline", clas: "pipeline" },
    { name: "discharge", clas: "discharge" },
    { name: "discharge-pump", clas: "discharge-pump" },
    { name: "faucet", clas: "faucet" },
    { name: "faucet2", clas: "faucet2" },
    { name: "detector", clas: "detector" },
    { name: "leaf2", clas: "leaf2" },
    { name: "CO2", clas: "CO2" },
    { name: "coal", clas: "coal" },
    { name: "oil", clas: "oil" },
    { name: "energy-trend", clas: "energy-trend" },
    { name: "energy-check", clas: "energy-check" },
    { name: "working", clas: "working" },
    { name: "emergency", clas: "emergency" },
    { name: "alarm", clas: "alarm" },
    { name: "alert-set", clas: "alert-set" },
    { name: "device", clas: "device" },
    { name: "control", clas: "control" },
    { name: "server", clas: "server" },
    { name: "firewall", clas: "firewall" },
    { name: "Router", clas: "router" },
    { name: "transfer", clas: "transfer" },
    { name: "link", clas: "link" },
    { name: "link-off", clas: "link-off" },
    { name: "basestation", clas: "basestation" },
    { name: "equipment-unified", clas: "equipment-unified" },
    { name: "asset1", clas: "asset1" },
    { name: "asset2", clas: "asset2" },
    { name: "asset3", clas: "asset3" },
    { name: "entrance-guard", clas: "entrance-guard" },
    { name: "cog", clas: "cog" }
    ],
    mobile: [{ name: "wifi", clas: "wifi" },
    { name: "3g", clas: "3g" },
    { name: "4g", clas: "4g" },
    { name: "config", clas: "config" },
    { name: "earphone", clas: "earphone" },
    { name: "voice", clas: "voice" },
    { name: "qq", clas: "qq" },
    { name: "wechat", clas: "wechat" },
    { name: "weibo", clas: "weibo" },
    { name: "pay", clas: "pay" },
    { name: "face", clas: "face" },
    { name: "404", clas: "404" },
    { name: "cash", clas: "cash" },
    { name: "bank", clas: "bank" },
    { name: "credit-card", clas: "credit-card" },
    { name: "slot-card", clas: "slot-card" },
    { name: "privacy", clas: "privacy" },
    { name: "log", clas: "log" },
    { name: "log-book", clas: "log-book" },
    { name: "log-write", clas: "log-write" },
    { name: "address-book", clas: "address-book" },
    { name: "address-book2", clas: "address-book2" },
    { name: "album", clas: "album" },
    { name: "album2", clas: "album2" },
    { name: "purse", clas: "purse" },
    { name: "card-bag", clas: "card-bag" },
    { name: "collect", clas: "collect" },
    { name: "find", clas: "find" },
    { name: "star2", clas: "star2" },
    { name: "star2-empty", clas: "star2-empty" },
    { name: "app2", clas: "app2" },
    { name: "add-member", clas: "add-member" },
    { name: "blacklist", clas: "blacklist" },
    { name: "mass", clas: "mass" },
    { name: "mass-account", clas: "mass-account" },
    { name: "shake", clas: "shake" },
    { name: "shake2", clas: "shake2" },
    { name: "shock", clas: "shock" },
    { name: "logout", clas: "logout" },
    { name: "help-pop", clas: "help-pop" },
    { name: "battery", clas: "battery" },
    { name: "battery-full", clas: "battery-full" },
    { name: "battery-high", clas: "battery-high" },
    { name: "battery-charging", clas: "battery-charging" }
    ],
    weather: [{ name: "晴", clas: "qing" },
    { name: "阴", clas: "yin" },
    { name: "多云", clas: "duoyun" },
    { name: "小雨", clas: "xiaoyu" },
    { name: "中雨", clas: "zhongyu" },
    { name: "大雨", clas: "dayu" },
    { name: "小雪", clas: "xiaoxue" },
    { name: "中雪", clas: "zhongxue" },
    { name: "大雪", clas: "daxue" },
    { name: "暴雨", clas: "baoyu" },
    { name: "暴雪", clas: "baoxue" },
    { name: "风", clas: "feng" },
    { name: "雾", clas: "wu" },
    { name: "阵雨", clas: "zhenyu" },
    { name: "雷雨", clas: "leiyu" },
    { name: "温度", clas: "wendu" },
    { name: "高温", clas: "gaowen" },
    { name: "寒潮", clas: "hanchao" },
    { name: "大风", clas: "dafeng" },
    { name: "暴雨预警", clas: "baoyuyujing" },
    { name: "暴雪预警", clas: "baoxueyujing" },
    { name: "气象", clas: "qixiang" },
    { name: "天气", clas: "tianqi" }
    ],
    develop: [{ name: "Mac", clas: "mac" },
    { name: "windows", clas: "windows" },
    { name: "ios", clas: "ios" },
    { name: "安卓", clas: "android" },
    { name: "dotnet", clas: "dotnet" },
    { name: "java", clas: "java" },
    { name: "php", clas: "php" },
    { name: "C语言", clas: "C" },
    { name: "html5", clas: "html5" },
    { name: "bootstrap", clas: "bootstrap" },
    { name: "ruby", clas: "ruby" },
    { name: "python", clas: "python" },
    { name: "js", clas: "js" },
    { name: "css", clas: "css" },
    { name: "jquery", clas: "jquery" },
    { name: "html", clas: "html" },
    { name: "代码表", clas: "code-tabel" },
    { name: "代码", clas: "code" },
    { name: "代码生成", clas: "code-build" },
    { name: "IE", clas: "ie" },
    { name: "chrome", clas: "chrome" },
    { name: "火狐", clas: "firefox" },
    { name: "safari", clas: "safari" },
    { name: "主机", clas: "host" },
    { name: "主机群", clas: "host-group" },
    { name: "云主机", clas: "host-cloud" },
    { name: "鼠标", clas: "mouse" },
    { name: "键盘", clas: "keyboard" },
    { name: "手指针", clas: "pointer" },
    { name: "点击", clas: "click" },
    { name: "双击", clas: "dbclick" },
    { name: "密码", clas: "password" },
    { name: "解锁", clas: "unlock" },
    { name: "密钥", clas: "key" }
    ]
};

//===================================================================

; (function ($) {
    $.fn.Iconfont = function () {
        var $this = this;
        $this.attr('readonly', 'true');
        var selector = {
            init: function () {
                $this.focus(function () {
                    //显示选择器面板
                    selectorPanel.show();
                });
                //包装input
                var $this_width = $this.width();
                var $this_height = $this.height();
                var $this_outerWidth = $this.outerWidth();
                var $this_outerHeight = $this.outerHeight();

            }
        }
        var selectorPanel = {
            id: 'iconfontSelectorPanel',
            init: function () {
                if ($(window.top.document.body).find('#'+this.id).length>0) {
                    $(window.top.document.body).find('#' + this.id).remove();
                }
                $wrapper = $('<div class="selectorWrapper"></div>');
                $selectorPanel = $('<div id="' + this.id + '" class="selectorPanel"></div>');
                var $top_width = $(window.top).width();
                var $top_height = $(window.top).height();
                $selectorPanel.width(($top_width * 0.6) < 800 ? 800 : $top_width * 0.6);
                $selectorPanel.height($top_height * 0.8);
                var left = ($top_width - $selectorPanel.width()) / 2;
                var top = ($top_height - $selectorPanel.height()) / 2;
                $selectorPanel.css('left', left + 'px');
                $selectorPanel.css('top', top + 'px');
                $wrapper.width($top_width);
                $wrapper.height($top_height);
                $(window.top.document.body).append($wrapper).append($selectorPanel);
                $typeTabs = $('<div id="' + this.id + '_typeTabs " class="selectorPanel-typeTabs"></div>');
                $iconList = $('<div id="' + this.id + '_iconList " class="selectorPanel-iconList"></div>');
                $iconList.height($selectorPanel.height() - $typeTabs.height());
                $selectorPanel.append($typeTabs).append($iconList);
                $typeTabs.append('<div class="selectorPanel-tab selectorPanel-tab-active">所有</div>');
                $.each(iconTypes, function (i) {
                    $typeTabs.append('<div class="selectorPanel-tab">' + iconTypes[i] + '</div>');
                    $iconList.append('<div class="selectorPanel-typeHead" id="selectorPanel_' + iconTypes[i] + '">' +
                            '<div>' + iconTypes[i] + '</div>' +
                        '</div>');
                    $.each(iconItems[iconTypes[i]], function (j) {
                        var liclass = 'selectorPanel-iconLi';
                        if ($this.val() == iconItems[iconTypes[i]][j].clas) {
                            liclass += " selectorPanel-iconLi-active";
                        }
                        $(window.top.document.body).find('#selectorPanel_' + iconTypes[i]).append('<div class = "' + liclass + '" data-clas="' + iconItems[iconTypes[i]][j].clas + '">' +
                                '<div class="iconfont iconfont-' + iconItems[iconTypes[i]][j].clas + '"></div>' +
                                '<div class="selectorPanel-iconName">' + iconItems[iconTypes[i]][j].clas + '</div>' +
                            '</div>');
                    });
                });
                $typeTabs.append('<div class="selectorPanel-btn" id="btn_selectorPanel_clear">清除</div>');
                $typeTabs.append('<div class="selectorPanel-btn"id="btn_selectorPanel_close">关闭</div>');
                $(window.top.document.body).find('.selectorPanel-tab').click(function () {
                    var $tab = $(this);
                    $tab.addClass('selectorPanel-tab-active').siblings().removeClass('selectorPanel-tab-active');
                    if ($tab.html() == '所有') {
                        $(window.top.document.body).find('.selectorPanel-typeHead').show();
                    } else {
                        $(window.top.document.body).find('#selectorPanel_' + $tab.html()).show().siblings().hide();
                    }
                });
                $(window.top.document.body).find('.selectorWrapper').click(function () {
                    selectorPanel.hide();
                });
                $(window.top.document.body).find('.selectorPanel').click(function (e) {
                    var $tar;
                    if (e.target.className == 'selectorPanel-iconLi') {
                        $tar = $(e.target);
                    } else if (e.target.parentNode.className == 'selectorPanel-iconLi') {
                        $tar = $(e.target.parentNode);
                    } else {
                        return;
                    }
                    $(window.top.document.body).find('.selectorPanel-iconLi').removeClass('selectorPanel-iconLi-active');
                    $tar.addClass('selectorPanel-iconLi-active');
                    $this.val($tar.data('clas'));
                    selectorPanel.hide();
                });
                $(window.top.document.body).find('#btn_selectorPanel_clear').click(function () {
                    $this.val('');
                    $(window.top.document.body).find('.selectorPanel-iconLi').removeClass('selectorPanel-iconLi-active');
                    selectorPanel.hide();
                });
                $(window.top.document.body).find('#btn_selectorPanel_close').click(function () {
                    selectorPanel.hide();
                });
            },
            show: function () {
                $(window.top.document.body).css('overflow', 'hidden').find('#' + this.id + ', .selectorWrapper').show();
            },
            hide: function () {
                $(window.top.document.body).css('overflow', 'auto').find('#' + this.id + ', .selectorWrapper').hide();
            }
        }
        selectorPanel.init();
        selector.init();
        return $this;
    }
})(jQuery);
