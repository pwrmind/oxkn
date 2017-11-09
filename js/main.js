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
  ]
};

var Period = function Period() {
  this.name = "Осенний мясоед";
  this.startDate = new Date(2017, 7, 28);
  this.endDate = new Date(2017, 10, 27);
  this.dayOfTheWeek = [
    "поста нет",
    "поста нет",
    "поста нет",
    "сухоядение",
    "поста нет",
    "сухоядение",
    "поста нет"
  ];
};

Period.prototype.getMenu = function getMenu() {
    
};

var OrthodoxKitchen = function OrthodoxKitchen() {
  this.periods = [];
  
  this.periods.push(new Period());
  
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