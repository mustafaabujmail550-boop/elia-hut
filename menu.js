var M=[
{id:"cold",t:"مشروبات باردة",i:[
 ["آيس أمريكانو","Ice Americano","2.25"],["آيس لاتيه","Ice Latte","2.50"],
 ["آيس سبانش لاتيه","Ice Spanish Latte","2.75"],["آيس كراميل لاتيه","Ice Caramel Latte","2.75"],
 ["فانيليا لاتيه","Vanilla Latte","2.75"]]},
{id:"hot",t:"مشروبات ساخنة",i:[
 ["لاتيه كوخ إيليياء","Eliaa’s Hut Latte","4.50",1],["لاتيه","Latte","2.75"],
 ["سبانش لاتيه","Spanish Latte","2.75"],["قهوة تركية","Turkish Coffee","1.50"],
 ["أمريكانو","Americano","2.25"],["كابتشينو","Cappuccino","2.75"],
 ["مج شاي","Cup of Tea","1.00"],["إبريق شاي","Teapot","2.25"]]},
{id:"hut",t:"مشروبات الكوخ",i:[
 ["منعش الكوخ","Hut Special Refresher","4.50",1],["موهيتو ليمون ونعناع","Lemon-Mint Mojito","2.75"],
 ["آيس تي خوخ","Peach Iced Tea","2.50"],["شاي أخضر بالهيل","Green Tea","2.00"],
 ["شاي إنجليزي","English Tea","2.00"]]},
{id:"food",t:"أكلات الكوخ",i:[
 ["سندويشة مكدوس ولبنة","Makdous & Labneh Sandwich","1.80"],
 ["سندويشة تيركي وجبنة","Smoked Turkey & Cheese Sandwich","3.80"],
 ["سندويشة حلوم","Halloumi Sandwich","2.80"],
 ["سندويشة حلوم بالسوردو","Sourdough Halloumi Sandwich","4.80"],
 ["سندويشة تونة","Tuna Sandwich","3.50"],
 ["توست مربى وزبدة","Butter & Jam Toast","4.50"],
 ["صحن جرانولا باللبن","Yogurt & Granola Bowl","4.20"],
 ["إندومي بخلطة الكوخ","Hut Special Indomie","2.50",1]]}
];
var h="",t='<a href="#sig">المميزة</a>';
M.forEach(function(s){
  h+='<div class="panel"><section id="'+s.id+'"><div class="sec-head"><h2>'+s.t+'</h2><svg class="leaf" aria-hidden="true"><use href="#leaf"/></svg></div>';
  s.i.forEach(function(x){
    h+='<div class="item'+(x[3]?' house':'')+'"><div class="n"><span class="ar">'+x[0]+'</span><span class="lat">'+x[1]+'</span></div><span class="dots"></span><span class="p">'+x[2]+'<small>JD</small></span></div>';
  });
  h+='</section></div>';
  t+='<a href="#'+s.id+'">'+s.t+'</a>';
});
document.getElementById("panels").innerHTML=h;
var tabs=document.getElementById("tabs");tabs.innerHTML=t+'<a href="#find">موقعنا</a>';
var links=[].slice.call(tabs.children);
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
    links.forEach(function(a){var on=a.getAttribute("href")==="#"+e.target.id;a.classList.toggle("on",on);
      if(on){try{a.scrollIntoView({inline:"center",block:"nearest"})}catch(_){}}});
  }})},{rootMargin:"-30% 0px -60% 0px"});
  [].slice.call(document.querySelectorAll("section,#find")).forEach(function(s){io.observe(s)});
}
