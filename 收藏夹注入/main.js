(function (){
    const js = document.scripts;
    const 根网址 = js[js.length-1].src.substring(0,js[js.length-1].src.lastIndexOf("/")+1);
    js[js.length-1].remove();
    
    const script = document.createElement("script");
    script.src = 根网址 + window.location.host + "/main.js";
    document.body.appendChild(script);
})();