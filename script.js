// All Root Words
const roots = [
    'ego','in','ex','verto','ambi','mesein','gyne','anthropos','gamos','asketes','alter'
];

// All Words with their roots
const words = [
    {
        name:'egoist',
        mean:'One who is selfish and always thinks about self-advancements',
        roots:'ego,-ist'
    },
    {
        name:'egotist',
        mean:'One who is talkative about his own accomplishments',
        roots:'ego,-ist'
    },
    {
        name:'introvert',
        mean:'One who turns his thoughts inwards',
        roots:'in-,verto'
    },
    {
        name:'extrovert',
        mean:'One who turns his thoughts outwards',
        roots:'ex-,verto'
    },
    {
        name:'ambivert',
        mean:'One who turns his thoughts both inwards and outwards',
        roots:'ambi,verto'
    },
    {
        name:'misanthropist',
        mean:'One who hates mankind/people',
        roots:'mesein,anthropos,-ist'
    },
    {
        name:'misogamist',
        mean:'One who hates marriage',
        roots:'mesein,gamos,-ist'
    },
    {
        name:'misogynist',
        mean:'One who hates women',
        roots:'mesein,gyne,-ist'
    },
    {
        name:'ascetic',
        mean:'One who lives like a monk',
        roots:'asketes'
    }
];

const finder = document.getElementById("finder");
const cardContainer = document.getElementById("cardContainer");
const exitBtn = document.getElementById("exitBtn");

finder.focus();
finder.setAttribute("placeholder",`Do you have a Root? We have ${roots.length} ✔`);
finder.addEventListener("select", e => {
    let sq = e.target.value;
    cardContainer.innerHTML = "";
    words.forEach(word => {
        if (word.roots.indexOf(sq) > -1 && sq != "") {
            putCard(word.name,word.mean,word.roots);
        }
    });
});
finder.addEventListener("input",e => {
    let sq = e.target.value;
    if (sq=="") {
        cardContainer.innerHTML = "";
    }
});

const dataList = document.getElementById("dataList");
fillOptiosIn(dataList);

function fillOptiosIn(dataList){
    roots.forEach(rootWordElement => {
        let option = document.createElement("OPTION");
        option.setAttribute("value",rootWordElement);
        option.innerHTML = rootWordElement;
        dataList.appendChild(option);
    });
}

function putCard(word,mean,roots){
    const li = document.createElement("LI");
    li.setAttribute("class","card");
    li.innerHTML = word;
    li.addEventListener("click",e =>{
        openModelBox(word,mean,roots);
    });
    cardContainer.appendChild(li);
}

function openModelBox(header,body,footer){
    const box = document.getElementById("primaryBox");
    box.style.display = "block";
    document.querySelector("#primaryBox .header").innerHTML = header;
    document.querySelector("#primaryBox .body").innerHTML = body;
    document.querySelector("#primaryBox .footer").innerHTML = `Root(s): ${footer}`;

}

exitBtn.addEventListener("click",e => {
    console.log(e.target);
    e.target.parentNode.style.display = "none";
});




