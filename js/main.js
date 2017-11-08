var Period = function Period() {
  this.name = "Осенний мясоед";
  this.startDate = new Date(2017, 7, 28);
  this.endDate = new Date(2017, 10, 8);
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

    if( period ) console.log(period);
  };
};

var oxkn = new OrthodoxKitchen();
oxkn.getMenu();