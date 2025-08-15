// مثال على تفاعل بسيط مع نموذج الاتصال
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // منع إعادة تحميل الصفحة
    document.getElementById("response").style.display = "block";
    this.reset();
});
