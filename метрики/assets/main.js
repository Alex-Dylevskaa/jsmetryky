// Работа с классами
// 1 
// let elem = document.getElementById('pop')
// elem.classList = "www"
// console.log(elem.classList)
//
// 2
// let elem = document.getElementById('pop')
// elem.classList = "www"
// elem.classList.remove('www')
// console.log(elem.classList)
//
// 3
// let elem = document.getElementById('pop')
// if (elem.classList != 'www'){
//     console.log('no')
// }
// else if (elem.classList = 'www'){
//     console.log('yes')
// }
//
// 4
// let elem = document.getElementById('pop')
// if (elem.classList != 'www'){
//     elem.classList = 'www'
// }
// else if (elem.classList = 'www'){
//     elem.classList.remove('www')
// }
// console.log(elem.classList)
//
// 5
// let elem = document.getElementById('pop')
// length = elem.classList.length
// console.log(length)
//
// 6
// let elem = document.getElementsByClassName('www jjj');
// spisok = elem[0].className;
// names = spisok.split(' ')
// for (names of names){
//     alert(names)
// }
//
//
// Работа с CSS
//
// 1
// elem = document.getElementById('pop')
// elem.style.cssText = 'color:blue; font-size:30px; border: 2px black; height: 30px; width:500px'
//
//
// Свойство tagName
// 1
// function func(elem){
//     alert(elem.tagName)
// }
//
// 2
// function func(elem){
//     let tag_lower =  elem.tagName.toLowerCase();
//     alert(tag_lower)
// }
//
// 3
// elems = document.getElementsByClassName('www')
// for (let i = 0; i < elems.length; i += 1){
//     elems[i].addEventListener('click', function(){
//         this.innerHTML += ' =====> ' + this.tagName.toLowerCase();
//         alert(this.innerHTML);
//     });
// }
//
//
// Вставка элементоа через appendChild
// 4
// let liLast = document.createElement('li');
// liLast.innerHTML = 'пункт';
// ol.append(liLast);
//
// 5
// elements = ['элемент', 'пункт', 'точка']
// for(let i = 0; i < elements.length; i+=1){
//     let creat = document.createElement('li');
//     creat.innerHTML = elements[i];
//     ul.append(creat);
// }
//
//
// Вставка элементов через inncertAdjesentHTM
// 1
// let elem = document.getElementById('pop');
// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');
//
// 2
// let elem = document.getElementById('pop');
// elem.insertAdjacentHTML('afterend', '<span>!!!</span>');
//
// 3
// let elem = document.getElementById('pop');
// elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');
//
// 4
// let elem = document.getElementById('pop');
// elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');
//
//
// Удаление и клонирование
// 1
// let parent = document.getElementById('parent');
// let child = document.getElementById('child');
// function func(child){
//     parent.removeChild(child)
// }
//
// 2
// let parent = document.getElementById('parent')
// lastChild = parent.lastElementChild
// function func(){
//     parent.removeChild(lastChild)
// }
//
// 3
// function func(pop){
//     pop.remove()
// }
//
// 4
// function func(del){
//     del.remove()
// }
//
// 5
// let elem = document.getElementById('pop');
// function func(){
//     let elem = document.getElementById('pop');
//     dup = elem.cloneNode(true);
//     document.body.prepend(dup);
// }
//
//
// Потомки
// 1
// let parent = document.getElementById('pop');
// parent.firstElementChild.style.cssText = 'color:red';
//
// 2
// let parent = document.getElementById('pop');
// parent.lastElementChild.style.cssText = 'color:red';
//
// 3
// let elem = document.getElementById('pop')
// let elems = elem.children
// for(i = 0; i < elems.length; i+=1){
//     let creat = elems[i]
//     creat.innerHTML += '!' 
// }
//
//
// Соседи
// 4
// let nabor = document.getElementById('nabor') 
// nabor.previousElementSibling.innerHTML += '!'
//
// 5
// let nabor = document.getElementById('nabor') 
// nabor.nextElementSibling.innerHTML += '!'
//
// 6
// let nabor = document.getElementById('nabor') 
// nabor.nextElementSibling.nextElementSibling.innerHTML += '!'
//
//
// Родители
// 7
// let nabor = document.getElementById('nabor')
// let parent = nabor.parentElement
// parent.style.cssText = 'color:red'
//
//
// 8
// let nabor = document.getElementById('nabor')
// let parent = nabor.parentElement
// let p_parent = parent.parentElement
// p_parent.style.cssText = 'color:red'
//
//
// На величину границы 
// 1 
// let div = document.getElementById('div');  
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.clientTop) 
// } 
//
// 2 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.clientLeft) 
// } 
//
//
// На полный размер элемента 
// 1  
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.offsetWidth) 
// } 
// 
// 2 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.offsetHeight) 
// } 
//
//
// На размер элемента без границ, но с padding 
// 1 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.clientWidth) 
// } 
//
// 2 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// function func(){ 
//     alert(div.clientHeight) 
// }
//
// 
// Работа с getComputedStyle
// 1 
// let div = document.getElementById('div'); 
// div.style= 'border:3px solid red; width: 50px; padding:10px;' 
// let pop = getComputedStyle(div) 
// function func(){ 
//     alert(pop.width) 
//     alert(pop.height) 
// } 
//
//
// Прокрутка элемента  
// 1 
// let elem = document.getElementById('elem'); 
// let style = getComputedStyle(elem);
// function func() { 
//  alert(elem.scrollTop); 
// } 
//
// 2  
// let elem = document.getElementById('elem'); 
// function func() { 
//  alert(elem.scrollLeft); 
// } 
//
// 3 
// let elem = document.getElementById('elem'); 
// function func() { 
// elem.scrollTop = 100; 
// alert(elem.scrollTop); 
// } 
//
// 4 
//
// let elem2 = document.getElementById('elem2');
// function func() { 
//     elem2.scrollTop = '100'; 
//     alert(elem2.scrollTop); 
// }
//
// 5
// let elem2 = document.getElementById('elem2');
// function func() { 
//     elem2.scrollTop += 100; 
//     alert(elem2.scrollTop); 
// }
//
// 6
// let elem2 = document.getElementById('elem2');
// function func() {  
//     alert(elem2.scrollHeight); 
// }
//
// 7
// let elem2 = document.getElementById('elem2');
// function func() {  
//     alert(elem2.scrollWidth); 
// }
//
// 8
// let elem2 = document.getElementById('elem2');
// function func() {  
//     elem2.scrollTop = elem2.scrollHeight - 100;
//     alert(elem2.scrollHeight);
//     alert(elem2.scrollTop); 
// }
//
//
// Прокрутка страницы
// 1
// function func() {  
//     alert(window.pageYOffset); 
// }
//
// 2
// function func() {  
//     alert(window.pagexOffset); 
// }
//
// 3
// function func() {  
//     window.scrollTo('300px', '500px')
// }
//
// 4
// function func() {  
//     window.scrollBy('0px', '300px')
// }
//
//
// Практика
// 1
// function func() {  
//     window.scrollTo('0px', document.body.scrollHeight)
// }
//
// 2
// function func() {  
//     window.scrollBy(0, 400);
// }
//
// 3
// function func() {
// 	let body = document.documentElement;
// 	if (body.scrollHeight - body.scrollTop = body.clientHeight) {
// 		window.scrollTo(0, 100);
// 	}
// }
//
// 4
// let elem = document.getElementById('elem2');
// function func() {
// 	let startWidth = elem.offsetWidth;
// 	let startHeight = elem.offsetHeight;
// 	elem.style.width = startWidth * 2 + 'px';
// 	elem.style.height = startHeight * 2 + 'px';
// }

