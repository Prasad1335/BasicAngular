import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './htmlc/newhtml.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicAngular';
  getValue() {
    return "getfunction value";
  }


  user = "prasad";
  disabled = true;


  myName = "";


  mouseenter() {
    console.log("enter mouse");
  }

  clickFun(refv2: any) {
    alert(refv2);
  }

  image: string = 'https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg';

  images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyHjBtzhM0W_are-CBIWUSrHcTC9RQnPE3V5-SSxgL_ytGmyfcYXWiDlEOaO4UiUnVI4&usqp=CAU", "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/16:9/w_2000,h_1125,c_limit/Transpo_G70_TA-518126.jpg", "https://c.files.bbci.co.uk/118A0/production/_118604817__116721094_mustang.jpg", "https://www.gpas-cache.ford.com/guid/d7afc86b-6ee3-332c-a23e-6df31812282b.png"]

  imageSrc(num: number) {

    this.image = this.images[num - 1];

    console.log("call function");
  }


  // arr = ['a', 'i', 'e', 'o', 'u'];

  ovelFun(v: string) {

    if (v == 'a')
      alert("a");
    else if (v == 'i')
      alert("i");
    else if (v == 'e')
      alert("e")
    else if (v == 'o')
      alert("o");
    else if (v == 'u')
      alert("u");
    else
      alert(v + " : is not ovels  ");
  }

  // ref='btn btn-primary';
  flag = true;
  clrFun(c: any) {

    if (this.flag == true) {
      // this.ref='btn btn-danger';
      c.style.backgroundColor = 'orange';
      c.style.color = 'blue';

    }
    else {
      // this.ref='btn btn-success';
      c.style.backgroundColor = 'yellow';
      c.style.color = 'red';

    }

    this.flag = !this.flag;

  }


  userStatus = "new";
  toogleLoginAndRegister() {
    this.flag = !this.flag;
    (this.flag == true ? this.userStatus = "old" : this.userStatus = "new");
  }



  num!: any;



  navFun() {
    this.num = 1;

  }
  navFun2() {
    this.num = 2;
  }
  navFun3() {
    this.num = 3;
  }

  movies: Movie[] =[

 

    new Movie('Zootopia','Byron Howard, Rich Moore','Idris Elba, Ginnifer Goodwin, Jason Bateman','March 4, 2016'),
  
    new Movie ('Batman v Superman: Dawn of Justice','Zack Snyder','Ben Affleck, Henry Cavill, Amy Adams','March 25, 2016'),
  
    new Movie ('Captain American: Civil War','Anthony Russo, Joe Russo','Scarlett Johansson, Elizabeth Olsen, Chris Evans','May 6, 2016')
  
    ]


    states:State[]=[
      {id:1,name:"ahmednagar"},
      {id:2,name:"pune"},
      {id:3,name:"aurangbad"},
      {id:4,name:"satara"},
      {id:5,name:"nashik"},
    ];
  

}


export class Movie {

  title : string;

  director : string;

  cast : string;

  releaseDate : string;



  constructor(title:string,director:string,cast:string,releaseDate:string)

  {

    this.title=title;

    this.director=director;

    this.cast=cast;

    this.releaseDate=releaseDate;



  }



}


export class State {



  id : number;
  name : string;
  constructor(id:number,name:string)
  {
    this.id=id;
    this.name=name;
  }
}