
function loadTinyBox(names) {
   var openTinyBox = function(e) {
      e.stopPropagation();
      e.preventDefault();
      var content2 = "<img src='" + this.href + "' width='480' height='690' />";
      TINY.box.show(content2,0,0,0,1);
   };

   var setTinyBox = function(elms) {
      var i = 0;
      for(i = 0; i < elms.length; i++) {
         var elem = elms[i];
         var img = elem.getElementsByTagName("img");
         var a = elem.getElementsByTagName("a");
         if(img.length > 0 && a.length > 0) {
            a[0].onclick = openTinyBox;
         }
      }
   };

   var ns = names.split(",");
   for(n in ns) {
      setTinyBox(document.getElementsByClassName(ns[n]));
   }
}
