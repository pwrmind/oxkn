var foodDictionary = {
  "сухоядение": [
    "хлеб",
    "вода",
    "соль",
    "сырые овощи",
    "квашеные овощи",
    "зелень",
    "мед",
    "термически обработанная пища растительного происхождения без вкусовых приправ",
    "овощи печеные",
    "фрукты сырые",
    "фрукты моченые",
    "травяные настои",
    "холодные напитки",
    "соки"
  ],
  "поста нет": [
    "по пище ограничений нет"
  ],
  "горячая без масла": [
    ""
  ]
};

var Period = function Period(properties) {
  this.name = properties.name;
  this.startDate = properties.startDate;
  this.endDate = properties.endDate;
  this.dayOfTheWeek = properties.dayOfTheWeek;
};

Period.prototype.getMenu = function getMenu() {
    
};

var OrthodoxKitchen = function OrthodoxKitchen() {
  this.periods = [
    {
      name: "Осенний мясоед",
      startDate: new Date(2017, 7, 28),
      endDate: new Date(2017, 10, 27),
      dayOfTheWeek: [
        "поста нет",
        "поста нет",
        "поста нет",
        "сухоядение",
        "поста нет",
        "сухоядение",
        "поста нет"
      ]
    },
    {
      name: "Рождественский пост",
      startDate: new Date(2017, 10, 27),
      endDate: new Date(2017, 11, 19),
      dayOfTheWeek: [
        "рыба",
        "горячая без масла",
        "рыба",
        "сухоядение",
        "рыба",
        "сухоядение",
        "рыба"
      ]
    },
    {
      name: "Рождественский пост",
      startDate: new Date(2017, 11, 20),
      endDate: new Date(2018, 0, 1),
      dayOfTheWeek: [
        "рыба",
        "горячая без масла",
        "горячая с маслом",
        "сухоядение",
        "горячая с маслом",
        "сухоядение",
        "рыба"
      ]
    },
    {
      name: "Рождественский пост",
      startDate: new Date(2018, 0, 2),
      endDate: new Date(2018, 0, 6),
      dayOfTheWeek: [
        "горячая с маслом",
        "сухоядение",
        "горячая без масла",
        "сухоядение",
        "горячая без масла",
        "сухоядение",
        "горячая с маслом"
      ]
    }
  ];
    
  this.getMenu = function getMenu() {
    var d = new Date();
    var dayOfTheWeek = d.getDay();
    var now = new Date(d.getFullYear(), d.getMonth(), d.getDate());

    var period = this.periods.find( function( p ) {
        return p.startDate <= now && now <= p.endDate;
    } );

    if( period ) {
      document.querySelector("#periodName > h1").innerText = period.name;
      document.querySelector("#periodName > h2").innerText = period.dayOfTheWeek[dayOfTheWeek];
      document.querySelector("#foodRecommendations > p").innerText = foodDictionary[period.dayOfTheWeek[dayOfTheWeek]].join(", ");
    }
  };
};

var oxkn = new OrthodoxKitchen();
oxkn.getMenu();