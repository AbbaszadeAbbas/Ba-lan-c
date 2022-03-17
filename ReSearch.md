*13 fevral*

# Sual 1: *_Javascript proqramlaşdırma dili hansı sahələrdə istifadə olunur?_*

1. HTML sehifesinin daxilinde islenir esasen.
<!-- Source(https://www.quora.com/Where-can-we-use-JavaScript)  -->
3. JavaScript 1955-ci ilde Brendan Eich terefinden yaradilib.
<!-- Source(https://www.quora.com/Where-can-we-use-JavaScript)  -->
2. JavaScript - HTML səhifəyə inteqrasiya olunaraq, bu səhifə ilə istifadəçi arasındakı interfeysə(iki elementin
qarşılıqlı təsirini təmin edən qovuşma nöqtəsi) əlavə funksional
imkanlar verən alqoritmik dildir.
<!--Source(https://az.wikipedia.org/wiki/JavaScript)-->
4. JavaScript-den sehifeni canlandirmaq yeni animasiyalar, mueyyen effektler ve s. elave etmek ucun istifade olunur.
<!-- Source(https://www.yazilimbilisim.net/javascript/javascript-nedir/)-->

# Sual 2: *_Aşağıdakı proqramlaşdırma terminlərinin qısa acıqlamasını yazın._*
- compilers -- yuksek seviyyede yazilmis kodlarin(JavaScript ve ya Java ve s.) komputerin ve ya kod yazilan cihazin anlaya bildiyi dile ceviren proqramdir
<!--Source(https://abdulsamet-ileri.medium.com/compilers-ve-interpreters-eacd14a227c4)-->
- interpreters -- Kodu deyismek ve onu browserde eks etdirmek ucun istifade olunur
<!-- Source(https://www.w3schools.com/java/java_compiler.asp) -->
- translators -- Yazilan kodu bir dilden basqa dile cevirir.
<!--Source(https://www.careerexplorer.com/careers/translator/)-->
- assemblers --
- programming paradigms --
- debugging --
- boolean --
- char --
- null --
- command-line interface --
- low-level language --
- high-level language --
- markup language --


*2 mart*

# Sual 1: *_Interpreter və compiler dillər arasındakı fərqləri haqqında araşdırma edərək öz anladığınız formada yazın_*
<!--Source(https://youtu.be/e4ax90XmUBc)-->
*_Interpreter_*
1)Bizim yadigimiz kodlarla masinin arasinda olur.
2)Biz verdiyimiz melumatlari bir-bir oxuyur ve her hansi bir problem olduqda derhal gosterir.
3)Yazdigimiz kodlarin neticesini etap-etap gormeye imkan yaradir.
4)Interpreter tercume etdiyi kodlari birbasa masina yonelendirir
5)Menfi ceheti : compiler e nezeren daha yavas tercume edir.

*_Compiler_*
1)Bizim yazdigimiz kodlarin hamisini birlikde oxuyur ve oxuduqdan sonra melumatlari bize qaytarir.Bizde hemin tercume olunmus kodlari masina tehvil veririk.
3)Menfi ceheti : suretli ishlesede melumatlarin hamisini birden tercume etdiyi ucun problemleri vaxtinda gostermir.

# Sual 2: *_Dəyişən və məlumat növləri arasındakı fərq nədir? Bunlar nə üçün istifadə olunur?_*
:(


# Sual 3: *_Hər dilin özünə məxsus məlumat növləri mövcuddur. Bu məlumat növlərin dillərə görə fərqlənməsinin səbəbləri sizcə nədir?_*
1) Eger butun melumatlar eyni olsaydi, sadece 1 dil ile butun isleri hell etmek olardi(Amma bu cox qarisiq olardi)
2) Her bir dilin isledilme meqsedi digerlerinden ferqlenir.

# Sual 4: *_Javascriptdə dəyişən təyin edilmək üçün əsas üç açar söz var . let,var,const. Bu açar sözlərin vəzifələri arasındakı fərqlər nələrdir?_*
<!--Source(https://youtu.be/kjLv-sIyVa8)-->
--VAR--(deyisdirilebilendir)
1) hem global hemde function scope dur. Bu o demekdirki icerisinde olmadigi bir boxda islene biler
(Meselen: var msg = "Hello world"
           function test() { 
               console.log(msg)
           } )

2) var i parcalamaq olar:
    Meselen:
    var msg = "hello world  ;    console.log(msg)

    || * _evezine_*  ||

    msg  = "hello world"  
    console.log(msg)    var msg"

3)JavaScriptde 2015-ci ile qeder yalniz    var     istifade olunurdu. 

4)JavaScript var -i yuxari cekir(yeni eger kodda siz asagida yazmisinsa o onu yuxarida yazilibmis kimi oxuyur mehs ele buna gorede onun yazildigi yerin ferqi yoxdur ister console.log - dan evvel ve ya sonra)

5) global scope oldugu ucun dovrlerde istifadesi rahatdir.

--LET--(deyisdirilebilendir)
1) var-dan ferqli olaraq block scope dur(yeni ki yalniz yazildigi yere aid ola bilir)
2) siralamani duzgun yazmaq serti ile let i de parcalamaq olar 
(Meselen:
 let msg = "hello world"  console.log(msg)    

|| *_evezine_*||

let msg 
msg = "hello world"
console.log(msg)
)
3) let-de  hemcinin   var   kimi dovrlerde istifade olunur

--CONST--(adindanda gorunduyu kimi sabit qalir- deyismez)
1)deyismez oldugu ucun :
    a)dovrlerde istifade olnmur;
    b)yalniz yaziligi hisseye aid olur;
    c)parcalana bilmir.  
2)Block scope -dur(var -dan ferqli olaraq)

# Sual 5: *_Proqramçı olaraq bir proqram yazarkən işi görmə addımlarımız necə olmalıdır?_*
0)Cay, kofe + oturacaq bir yer )))
1)Yazilacaq layihenin ilk olaraq eskizi cekilmelidir ki, proseslerin getme ardicilligi pozulmasin.
2)Layihede istifade olunmus Common classlar yazilmalidirki kodlarin yazilmasi nisbeten rahatlashsin
3)Layihenin umumi strukturu yuxaridan asagi olmaqla hazirlanmaga baslayir
4)Class adlandirilmasinda Kebab case ve ya Camel case den istifade olunmasi daha elverislidir(SASS sag olsun bizi bu derdden qurtarir)


*14 mart*


# Sual 1.1: *_Dəyişən təyin edərkən ya da dəyər mənimsədərkən boşluqlardan istifadə etsək bu mənə error olaraq qayıdar mı? let a=5; let a= 5; bu iki formada yazılışlardan hansısa error verəcək mi?_*

'let x=5' ve 'let x= 5'

Bu yazilis sekillerinin her ikisi dogrudur (bu yazilari daxil ederken hec bir errorla qarsilasmiriq.) amma her ikiside eyni deyil.Deyisen teyin ederken ve ya elemente deyer menimsederken bosluq istifadesi hec bir errora sebeb olmur.

# Sual 1.2: *_Bütün proqramlaşdırma dillərində olduğu kimi Js-də xüsusi simvollardan istifadə edir. () və {} mötərizələri V8Engine tərəfindən necə analiz olunur? Bu mötərizələr tərcümə prosesində necə başa düşülür?_*

() =>  Parentheses =>

1) Ifadede emeliyyatlarin sirasini idare etemek ucun istifade edilir.
2) Konstruktora ve ya Metoda paramatrlerin verilmesi


{} => Curly braces =>

1) Key= value elementleri saxlamaq ucun istifade olunur.

# Sual 1.3: *_ Javascript Case Sensitive dildir?_*

Beli, meselen:
let StudentName = "Abbas"
console.log(studentName)

yeni siz her hansi bir deyeri 'StudentName' e menimsedib amma
'console.log()' a  'studentName' yazarsaq Error verecek .

# Sual 1.4:*_Javascriptdə kod yazarkən indentation hansı hallarda istifadə olunur və mən kod yazarkən indentation istifadə etməyə məcburammı?_*

JavaScriptde abzaslardan kodlari daha seliqeli yazmaq ucun istifade olunur. Hemcinin abzasdan istifade mecburi deyil (kodu abzasdan istifade etmeden yazdiqda ise hec bir error vermir.)


# Sual 2.1: *_Let x=5; kodlarının v8engine tərəfindən tərcümə edilərək maşın dilinə çevrilmə prosesini necə təsəvüür edirsiniz?_*

Ilk once '5'  reqeminin binary kodu yazilir. Ne qeder yer tutdugu yoxlanilir ve yaddashda ona uygun yer tutur.


# Sual 2.2:*_Primitive və reference data tipləri deyə iki kategoriyaya ayrılma səbəbi nə ola bilər?_*

Primitive Data Types:
- Numbers
- String
- Boolean
- Null
- Undefined
- Symbols

Reference Data Types
- Objects
- Functions
- Collections
- Arrays
- Dates
- Other types of objects...

# Sual 2.3:*_Yuxaridaki iki tip arasında fərqli xüsusiyyətlər nədir?_*

'Primitive data type'
1) Cox sadedirler,
2)Cism deyildirler,
3)Üsullari yoxdur.

'Reference data type' -
1)Dinamik tebietlidirler yeni sabit boyuklukleri yoxdur,
2)Cism kimi nezere alinirlar buna gorede üsullari vardir.

