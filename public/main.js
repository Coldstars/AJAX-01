console.log('我是main.js')
getJSON.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange=()=>{
        console.log(request.readyState);
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                console.log(typeof request.response)
                console.log(request.response)
                const bool=JSON.parse(request.response)
                //json字符串转变为js数据
                console.log(typeof bool)
                console.log(bool)
            };
        }
    }
    request.send();
}

getXML.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange=()=>{
        console.log(request.readyState);
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                // console.log(request.response);
                const dom = request.responseXML;
                const text = dom.getElementsByTagName("warning")[0].textContent;
                console.log(text.trim());
            };
        }
    }
    request.send();
}
getHTML.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/3.html');
    request.onreadystatechange=()=>{
        console.log(request.readyState);
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const html=document.createElement("html");
                console.log(request.response);
                html.innerHTML=request.response;
                document.body.appendChild(html);
            };
        }
    }
    request.send();
}

getJS.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/2.js');
    request.onreadystatechange=()=>{
        console.log(request.readyState);
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const script=document.createElement("script");
                console.log(request.response);
                script.innerHTML=request.response;
                document.body.appendChild(script);
            };
        }
    }
    request.send();
}
getCSS.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onreadystatechange = () => {
        console.log(request.readyState);
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 300) {
            // 创建 style 标签
            const style = document.createElement("style");
            // 填写 style 内容
            style.innerHTML = request.response;
            // 插到头里面
            document.head.appendChild(style);
          } else {
            alert("加载 CSS 失败");
          }
        }
    }   
    request.send();
}
