$(function() {
    // set one click botton
    var e = $('.hdtb-mitem.hdtb-msel');
    e.parent().append('' +
        '<div class="hdtb-mitem">' +
        '<a class="q qs" href="' + location.href + '&tbs=qdr:y">1年以内</a>' +
        '</div>');
    e.parent().append('' +
        '<div class="hdtb-mitem">' +
        '<a class="q qs" href="' + location.href + '&lr=lang_ja">日本語のみ</a>' +
        '</div>');
    e.parent().append('' +
        '<div class="hdtb-mitem">' +
        '<a class="q qs" href="' + location.href + '&lr=lang_en">Only English</a>' +
        '</div>');
    e.parent().append('' +
        '<div class="hdtb-mitem">' +
        '<a class="q qs" href="' + location.href + '&gl=us">アメリカ版</a>' +
        '</div>');

    // original keybind
    window.addEventListener('keydown', function(event) {
        console.log(event);
        var e = $('.gLFyf');
        var focusFlag = e.is($(':focus'));
        var text = e.text();
        var n = text.length;
        var d = e.eq(0); // jQuery オブジェクト -> DOM エレメント
        // Ctrl + A -> inputの先頭へ
        if (event.keyCode == 65 && event.ctrlKey) {
            d.selectionStart = 0;
            d.selectionEnd = 0;
            e.focus();
        }
        // Ctrl + E -> inputの末尾へ
        if (event.keyCode == 69 && event.ctrlKey) {
            d.selectionStart = n;
            d.selectionEnd = n;
            e.focus();
        }
        // Ctrl + K -> Home
        if (event.keyCode == 75 && event.ctrlKey) {
            $(window).scrollTop(0);
        }
        // Ctrl + J -> End
        if (event.keyCode == 74 && event.ctrlKey) {
            $(window).scrollTop($(document).height());
        }
        //         // Ctrl + N -> next
        //         if (event.keyCode == 78 && event.ctrlKey) {
        //             // Down
        //             var event = $.Event("keydown");
        //             event.keyCode = 40;
        //             event.which = event.keyCode;
        //             event.ctrlKey = false;
        //             $(document).trigger(event);
        //         }
        //         // Ctrl + P -> next
        //         if (event.keyCode == 80 && event.ctrlKey) {
        //             // Up
        //             var event = $.Event("keydown");
        //             event.keyCode = 38;
        //             event.which = event.keyCode;
        //             event.ctrlKey = false;
        //             $(document).trigger(event);
        //         }
        // Ctrl + M -> Search
        if (event.keyCode == 77 && event.ctrlKey && focusFlag) {
            $('#mKlEF').click();
        }
        // Ctrl + S -> goto search input
        if (event.keyCode == 83 && event.ctrlKey && !focusFlag) {
            // disable key
            event.preventDefault();
            e.focus();
            e.select();
        }
    }, true);
});
