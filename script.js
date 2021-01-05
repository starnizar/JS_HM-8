let html = document.querySelector('html');
html.setAttribute('lang', 'ru')

let title = document.createElement('title');
title.innerHTML = 'Home Work 8';

let script = document.querySelector('script');
document.head.insertBefore(title, script);

let charset = document.createElement('meta');
charset.setAttribute('charset', 'utf-8');
document.head.insertBefore(charset, script);

let fontLink_1 = document.createElement('link');
fontLink_1.setAttribute('rel', 'preconnect');
fontLink_1.setAttribute('href', 'https://fonts.gstatic.com');

let fontLink_2 = document.createElement('link');
fontLink_2.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet');
fontLink_2.setAttribute('rel', 'stylesheet');

let fontLink_3 = document.createElement('link');
fontLink_3.setAttribute('rel', 'preconnect');
fontLink_3.setAttribute('href', 'https://fonts.gstatic.com');

let fontLink_4 = document.createElement('link');
fontLink_4.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet');
fontLink_4.setAttribute('rel', 'stylesheet');

document.head.appendChild(fontLink_1);
document.head.appendChild(fontLink_2);
document.head.appendChild(fontLink_3);
document.head.appendChild(fontLink_4);

//script.setAttribute('defer','');

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
h1.style.cssText = `
    font-family: 'Arvo', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
`;

let h1_1 = h1.cloneNode();
h1_1.innerHTML = 'Initially designed to';

let h1_2 = h1_1.cloneNode(true);
h1_2.style.color = 'white';

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
p.style.cssText = `
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #9FA3A7;
`;

let p_1 = p.cloneNode(true);
p_1.style.padding = '25px 0 52px';
let p_2 = p_1.cloneNode(true);

p_2.style.color = 'white';


let h4 = document.createElement('h4');
h4.innerHTML = 'FREELANCER';
h4.style.cssText = `
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #9FA3A7;
    letter-spacing: 2.4px;
    margin-top: 81px;
`;

let h4_1 = h4.cloneNode();
h4_1.innerHTML = 'STUDIO';
h4_1.style.color = '#FFC80A'

let button = document.createElement('a');
button.innerHTML = 'START HERE';
button.style.cssText = `
    border: 3px solid #FFC80A;
    background-color: white;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 2.4px;
    color: black;
    padding: 12px 18px;
    outline: none;
    border-radius: 25px;
    margin: 0 32%;
`;

let button_1 = button.cloneNode(true);
button_1.style.backgroundColor = '#8F75BE';
button_1.style.color = 'white';

let flexibleBox = document.createElement('div');
flexibleBox.style.display = 'Flex';
flexibleBox.style.justifyContent = 'center';
flexibleBox.style.width = '100%';
flexibleBox.style.height = '480px';
flexibleBox.style.marginTop = '55px';



let div_1 = document.createElement('div');
let div_2 = document.createElement('div');
div_2.style.backgroundColor = '#8F75BE';
div_1.style.borderTop = '1px solid #E8E9ED';
div_1.style.borderLeft = '1px solid #E8E9ED';
div_1.style.borderBottom = '1px solid #E8E9ED';
div_1.style.borderTopLeftRadius = '5px';
div_1.style.borderBottomLeftRadius = '5px';
div_2.style.borderTopRightRadius = '5px';
div_2.style.borderBottomRightRadius = '5px';

document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(flexibleBox);
document.body.appendChild(flexibleBox);
flexibleBox.appendChild(div_1);
flexibleBox.appendChild(div_2);

div_1.appendChild(h4);
div_1.appendChild(h1_1);
div_1.appendChild(p_1);
div_1.appendChild(button);

div_2.appendChild(h4_1);
div_2.appendChild(h1_2);
div_2.appendChild(p_2);
div_2.appendChild(button_1);

