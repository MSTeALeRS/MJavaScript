Lesson-7


Task
Мінімум:

1. Напишіть код, який:

а) На html сторінці, заповнить кожен з трьох списків <ul>, після кліку по кнопці, довільним текстом. 

б) На цій ж сторінці виведе загальну кількість всіх <li>



HTML код списків: 

<ul> 
    <li></li> 
    <li></li> 
</ul> 
<br>
<ul> 
    <li></li> 
    <li></li>
    <li></li>
</ul> 
<br>
<ul> 
    <li></li> 
</ul> 

Максимум:

2. На html сторінці, після кліку на кнопці, надасть червоний фон для зовнішніх посилань (ті які містять протокол (`http://`, `ftp://`)), додавши їм клас external-red. Всі посилання без протоколу або які починаються з http://internal.com вважаються внутрішніми. 


<style> 
.external-red { 
background-color: red 
} 
</style> 
<a name="list">список</a> 
<ul>         
  <li><a href="http://google.com">http://google.com</a></li> 
  <li><a href="/tutorial">/tutorial.html</a></li> 
  <li><a href="local/path">local/path</a></li> 
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li> 
  <li><a href="http://nodejs.org">http://nodejs.org</a></li> 
  <li><a href="http://internal.com/test">http://internal.com/test</a></li> 
</ul> 
