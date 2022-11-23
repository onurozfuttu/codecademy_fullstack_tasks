class Media{
    constructor(media){
      this._media = media;
      this._title = '';
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
     return this._title;
    }
  
    get isCheckedOut(){
     return this._isCheckedOut;
    }
  
    get ratings(){
     return this._ratings;
    }
  
    set isCheckedOut(val){
      this._isCheckedOut= val;
    }
  
    toggleCheckOutStatus(){
      if(this._isCheckedOut === false){
        this._isCheckedOut = true;
      }else if(this._isCheckedOut === true){
        this._isCheckedOut = false;
      }
    }
  
    getAverageRating(){
     return this._ratings.reduce((acc, curr)=> (acc+curr)/this._ratings.length);
    }
  
    addRating(arg){
      this.ratings.push(arg);
    }
  }
  
  class Book extends Media{
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
      }
  
      get author(){
       return this._author;
      }
  
      get pages(){
        return this._pages;
      }
  }
  
  class Movie extends Media{
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      this._director;
    }
    get runTime(){
      this._runTime;
    }
  }
  
  const historyofEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  //console.log(historyofEverything);
  historyofEverything.toggleCheckOutStatus();
  console.log(historyofEverything.isCheckedOut);
  historyofEverything.addRating(4);
  historyofEverything.addRating(5);
  historyofEverything.addRating(5);
  //console.log(historyofEverything);
  
  console.log(historyofEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
      
      