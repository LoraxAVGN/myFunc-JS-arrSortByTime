const initialState = {
    messages: [
    {
    isCompanion: true,
    text: 'Привет, это первое сообщение от твоего компоньена',
    date: '2021-08-26T12:24:49.451+00:00'
    },
    {
    isCompanion: false,
    text: 'Привет, подскажи мне пожалуйста кое-что..',
    date: '2021-08-27T12:45:38.683+00:00'
    },
    {
    isCompanion: false,
    text: 'Зачем плотить налоги?',
    date: '2021-08-27T12:45:38.983+00:00'
    },
    {
    isCompanion: false,
    text: ' 4, это первое сообщение от твоего компоньена',
    date: '2021-08-26T12:24:49.451+00:00'
    },
    {
    isCompanion: false,
    text: ' 5',
    date: '2021-08-27T13:57:01.279+00:00'
    },
    
    {
    isCompanion: false,
    text: ' 6',
    date: '2081-08-27T13:57:01.279+00:00'
    },
    {
    isCompanion: false,
    text: ' 7',
    date: '2001-08-27T13:57:01.279+00:00'
    },
    ]
}

var copy_mes = JSON.parse(JSON.stringify(initialState.messages));

let mainArr=[];
while(copy_mes.length!=0){
    let checkStr=copy_mes[0].date.substr(0,16);
    let subArr=[];
    let delInd=[];
    for(let i=0;i<copy_mes.length;i++){
        if(checkStr===copy_mes[i].date.substr(0,16)){
            subArr.push(copy_mes[i]);
            delInd.push(i);
        }
    }
    for(let i=delInd.length-1;i>=0;i--){
        copy_mes.splice([delInd[i]],1);
    }
    mainArr.push(subArr);
}

mainArr.sort((a,b)=>new Date(a[0].date).getTime()-new Date(b[0].date).getTime());

console.log(mainArr);