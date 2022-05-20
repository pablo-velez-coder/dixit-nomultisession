const arrayGenerator = (start,end) =>{
  let cards = []
for(let i=start;i<=end;i++){
  const zeros = '00000'.slice(0,-String(i).length)
  cards.push({id:i,image:`/img/card_${zeros + String(i)}.jpg`})
}
return cards
}

export const game = [
  {
    id:1,
    cards : arrayGenerator(1,5),
    phrase:'El cielo es el límite',
    correctAnswer: 1
  },
  {
    id:2,
    cards : arrayGenerator(6,10),
    phrase:'En el mar la vida es más sabrosa',
    correctAnswer: 9
  },
  {
    id:3,
    cards : arrayGenerator(11,15),
    phrase:'Podremos arreglarlo?',
    correctAnswer: 14
  },
  {
    id:4,
    cards : arrayGenerator(16,20),
    phrase:'Quiero irme de aquí',
    correctAnswer: 17
  },
  {
    id:5,
    cards : arrayGenerator(21,25),
    phrase:'La vida es injusta',
    correctAnswer: 23
  },
  {
    id:6,
    cards : arrayGenerator(26,30),
    phrase:'Todo es de colores',
    correctAnswer: 26
  },
  {
    id:7,
    cards : arrayGenerator(31,35),
    phrase:'Tú y nadie más que tú',
    correctAnswer: 33
  },
  {
    id:1,
    cards : arrayGenerator(36,40),
    phrase:'Caballo de troya',
    correctAnswer: 37
  },
  {
    id:8,
    cards : arrayGenerator(41,45),
    phrase:'Extraño presentimiento',
    correctAnswer: 44
  },
  {
    id:9,
    cards : arrayGenerator(46,50),
    phrase:'En un mar de lágrimas',
    correctAnswer: 47
  },
  {
    id:10,
    cards : arrayGenerator(51,55),
    phrase:'Quisiera ser tú',
    correctAnswer: 54
  },
  {
    id:11,
    cards : arrayGenerator(56,60),
    phrase:'La ley de murphy',
    correctAnswer: 60
  },
  {
    id:12,
    cards : arrayGenerator(61,65),
    phrase:'Escalera al cielo',
    correctAnswer: 64
  },
  {
    id:13,
    cards : arrayGenerator(66,70),
    phrase:'Un clavo saca otro clavo',
    correctAnswer: 66
  },
  {
    id:14,
    cards : arrayGenerator(71,75),
    phrase:'Algo en la forma como se mueve',
    correctAnswer: 72
  },
  {
    id:15,
    cards : arrayGenerator(76,80),
    phrase:'El che y los rolling stones',
    correctAnswer: 80
  },
  {
    id:16,
    cards : arrayGenerator(81,85),
    phrase:'Fibre de sábado por la noche',
    correctAnswer: 84
  },
  {
    id:17,
    cards : arrayGenerator(86,90),
    phrase:'La vida es sueño',
    correctAnswer: 86
  },
  {
    id:18,
    cards : arrayGenerator(91,95),
    phrase:'En algún lugar de la mancha',
    correctAnswer: 92
  },
  {
    id:19,
    cards : arrayGenerator(96,100),
    phrase:'Lo más grande del mundo',
    correctAnswer: 97
  },
]


export const cards = [
    {id:1, image: '/img/card_00001.jpg'},
    {id:2, image: '/img/card_00002.jpg'},
    {id:3, image: '/img/card_00003.jpg'},
    {id:4, image: '/img/card_00004.jpg'},
    {id:5, image: '/img/card_00005.jpg'},
    {id:6, image: '/img/card_00006.jpg'},
    {id:7, image: '/img/card_00007.jpg'},
    {id:8, image: '/img/card_00008.jpg'},
    {id:9, image: '/img/card_00009.jpg'},
    {id:10, image: '/img/card_00010.jpg'},
    {id:11, image: '/img/card_00011.jpg'},
    {id:12, image: '/img/card_00012.jpg'},
    {id:13, image: '/img/card_00013.jpg'},
    {id:14, image: '/img/card_00014.jpg'},
    {id:15, image: '/img/card_00015.jpg'},
    {id:16, image: '/img/card_00016.jpg'},
    {id:17, image: '/img/card_00017.jpg'},
    {id:18, image: '/img/card_00018.jpg'},
    {id:19, image: '/img/card_00019.jpg'},
    {id:20, image: '/img/card_00020.jpg'},
    {id:21, image: '/img/card_00021.jpg'},
    {id:22, image: '/img/card_00022.jpg'},
    {id:23, image: '/img/card_00023.jpg'},
    {id:24, image: '/img/card_00024.jpg'},
    {id:25, image: '/img/card_00025.jpg'},
    {id:26, image: '/img/card_00026.jpg'},
    {id:27, image: '/img/card_00027.jpg'},
    {id:28, image: '/img/card_00028.jpg'},
    {id:29, image: '/img/card_00029.jpg'},
    {id:30, image: '/img/card_00030.jpg'},
    {id:31, image: '/img/card_00031.jpg'},
    {id:32, image: '/img/card_00032.jpg'},
    {id:33, image: '/img/card_00033.jpg'},
    {id:34, image: '/img/card_00034.jpg'},
    {id:35, image: '/img/card_00035.jpg'},
    {id:36, image: '/img/card_00036.jpg'},
    {id:37, image: '/img/card_00037.jpg'},
    {id:38, image: '/img/card_00038.jpg'},
    {id:39, image: '/img/card_00039.jpg'},
    {id:40, image: '/img/card_00040.jpg'},
    {id:41, image: '/img/card_00041.jpg'},
    {id:42, image: '/img/card_00042.jpg'},
    {id:43, image: '/img/card_00043.jpg'},
    {id:44, image: '/img/card_00044.jpg'},
    {id:45, image: '/img/card_00045.jpg'},
    {id:46, image: '/img/card_00046.jpg'},
    {id:47, image: '/img/card_00047.jpg'},
    {id:48, image: '/img/card_00048.jpg'},
    {id:49, image: '/img/card_00049.jpg'},
    {id:50, image: '/img/card_00050.jpg'},
    {id:51, image: '/img/card_00051.jpg'},
    {id:52, image: '/img/card_00052.jpg'},
    {id:53, image: '/img/card_00053.jpg'},
    {id:54, image: '/img/card_00054.jpg'},
    {id:55, image: '/img/card_00055.jpg'},
    {id:56, image: '/img/card_00056.jpg'},
    {id:57, image: '/img/card_00057.jpg'},
    {id:58, image: '/img/card_00058.jpg'},
    {id:59, image: '/img/card_00059.jpg'},
    {id:60, image: '/img/card_00060.jpg'},
    {id:61, image: '/img/card_00061.jpg'},
    {id:62, image: '/img/card_00062.jpg'},
    {id:63, image: '/img/card_00063.jpg'},
    {id:64, image: '/img/card_00064.jpg'},
    {id:65, image: '/img/card_00065.jpg'},
    {id:66, image: '/img/card_00066.jpg'},
    {id:67, image: '/img/card_00067.jpg'},
    {id:68, image: '/img/card_00068.jpg'},
    {id:69, image: '/img/card_00069.jpg'},
    {id:70, image: '/img/card_00070.jpg'},
    {id:71, image: '/img/card_00071.jpg'},
    {id:72, image: '/img/card_00072.jpg'},
    {id:73, image: '/img/card_00073.jpg'},
    {id:74, image: '/img/card_00074.jpg'},
    {id:75, image: '/img/card_00075.jpg'},
    {id:76, image: '/img/card_00076.jpg'},
    {id:77, image: '/img/card_00077.jpg'},
    {id:78, image: '/img/card_00078.jpg'},
    {id:79, image: '/img/card_00079.jpg'},
    {id:80, image: '/img/card_00080.jpg'},
    {id:81, image: '/img/card_00081.jpg'},
    {id:82, image: '/img/card_00082.jpg'},
    {id:83, image: '/img/card_00083.jpg'},
    {id:84, image: '/img/card_00084.jpg'},
    {id:85, image: '/img/card_00085.jpg'},
    {id:86, image: '/img/card_00086.jpg'},
    {id:87, image: '/img/card_00087.jpg'},
    {id:88, image: '/img/card_00088.jpg'},
    {id:89, image: '/img/card_00089.jpg'},
    {id:90, image: '/img/card_00090.jpg'},
    {id:91, image: '/img/card_00091.jpg'},
    {id:92, image: '/img/card_00092.jpg'},
    {id:93, image: '/img/card_00093.jpg'},
    {id:94, image: '/img/card_00094.jpg'},
    {id:95, image: '/img/card_00095.jpg'},
    {id:99, image: '/img/card_00096.jpg'},
    {id:97, image: '/img/card_00097.jpg'},
    {id:98, image: '/img/card_00098.jpg'},
    {id:99, image: '/img/card_00099.jpg'},
    {id:100, image: '/img/card_00100.jpg'},
  ]