     $(function () {
        var outer = $('.holder1');

        $('.left-button1').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos - 400 }, 1000);
        });

        $('.right-button1').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos + 400 }, 1000);
        });
     });