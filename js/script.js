var Site = {
  init: function () {
    this.tabs()
  },
  tabs: function () {
    var a = $("#sidebar > .tabs"),
      b = a.find("> ul"),
      c = a.prev("#tabHeadings");
    c.delegate("li", "click", function (a) {
      var c = $(this),
        d;
      c.siblings().removeClass("selected").end().addClass("selected");
      d = c.children("a").attr("href");
      b.hide().filter(d).fadeIn(500);
      a.preventDefault()
    })
  }
};
Site.init()
