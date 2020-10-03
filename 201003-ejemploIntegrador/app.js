const getData = async (url) => {
    const response = await fetch(url);
    let data = await response.text();
    let html = replacing(data);
    console.log(html);
    build(html);
};

const replacing = (html) => {
    html = html.replace(`<!doctype html>`, '');
    html = html.replace(`<html>`, '');
    html = html.replace(`<head>`, '');
    html = html.replace(`<meta charset="utf-8">`, '');
    html = html.replace(`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`, '');
    html = html.replace(`<link rel="stylesheet" href="../../../../css/bundle.css">`, '');
    html = html.replace(`</head>`, '');
    html = html.replace(`<body`, `<div`);
    html = html.replace(`</body>`, `</div>`);
    html = html.replace(`</html>`, '');
    html = html.split(`../../../../imagenes_front/`).join(`https://desarrolloadaptatin.blob.core.windows.net/sistemaejercicios/ejercicios/Nivel-12/imagenes_front/`);
    // let a = 'andrea'.split('a') // ['a', 'a'];
    return html;
};

const build = (html) => {
    document.body.innerHTML = html;
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.defer = true;
    script.src = './assets/bundle.js';
    head.appendChild(script);
};

getData('https://desarrolloadaptatin.blob.core.windows.net/sistemaejercicios/ejercicios/Nivel-12/Eje-1/OA-1/IE-1/120101010100001/120101010100001_1_f878.html');