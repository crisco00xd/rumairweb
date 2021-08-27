import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let microVisibility = document.getElementById("micro");
    let regVisibility = document.getElementById("reg");
    let advVisibility = document.getElementById("adv");
    let aeroVisibility = document.getElementById("aero");

    let microBox = document.getElementById("microBox");
    let regBox = document.getElementById("regBox");
    let advBox = document.getElementById("advBox");
    let aeroBox = document.getElementById("aeroBox");

    let microSelect = document.getElementById("microSelect");
    let regSelect = document.getElementById("regSelect");
    let advSelect = document.getElementById("advSelect");
    let aeroSelect = document.getElementById("aeroSelect");

    let microImg = document.getElementById("microImg") as HTMLImageElement;;
    let regImg = document.getElementById("regImg") as HTMLImageElement;;
    let advImg = document.getElementById("advImg") as HTMLImageElement;;
    let aeroImg = document.getElementById("aeroImg") as HTMLImageElement;;

    let microClick = function () {
      if(microVisibility.classList.contains('view')){
        microVisibility.classList.remove('view');
        microSelect.classList.remove('is-link');
        microImg.src = "https://drive.google.com/uc?export=view&id=1xhgyT4fkfgZaskIZExbKu959IQE-z0fl";
      }else{
        microVisibility.classList.add('view');
        regVisibility.classList.remove('view');
        advVisibility.classList.remove('view');
        aeroVisibility.classList.remove('view');

        microSelect.classList.add('is-link');
        regSelect.classList.remove('is-link');
        advSelect.classList.remove('is-link');
        aeroSelect.classList.remove('is-link');

        microImg.src = "https://drive.google.com/uc?export=view&id=1m29TQg3GJHr1gM44J_ALrp7R_BBmwmnH";
        aeroImg.src = "assets/img/aero.png";
        regImg.src = "https://drive.google.com/uc?export=view&id=1oKJXx-mJxSKCedyXJAFAlQlNURupHy0n";
        advImg.src = "https://drive.google.com/uc?export=view&id=14cJaQZA5Lg0OJuvMIaGRmR9tH0eiKn-Y";
      } 
    }

    let regularClick = function () {
      if(regVisibility.classList.contains('view')){
        regVisibility.classList.remove('view');
        regSelect.classList.remove('is-link');
        regImg.src = "https://drive.google.com/uc?export=view&id=1oKJXx-mJxSKCedyXJAFAlQlNURupHy0n";
      }else{
      microVisibility.classList.remove('view');
      regVisibility.classList.add('view');
      advVisibility.classList.remove('view');
      aeroVisibility.classList.remove('view');

      microSelect.classList.remove('is-link');
      aeroSelect.classList.remove('is-link');
      regSelect.classList.add('is-link');
      advSelect.classList.remove('is-link');

      microImg.src = "https://drive.google.com/uc?export=view&id=1xhgyT4fkfgZaskIZExbKu959IQE-z0fl";
      aeroImg.src = "assets/img/aero.png";
      regImg.src = "https://drive.google.com/uc?export=view&id=1ktC-G8d_P7gAmeOGt8TrAlwpP6MO5hGc";
      advImg.src = "https://drive.google.com/uc?export=view&id=14cJaQZA5Lg0OJuvMIaGRmR9tH0eiKn-Y";
      }
    }

    let advancedClick = function () {
      if(advVisibility.classList.contains('view')){
        advVisibility.classList.remove('view');
        advSelect.classList.remove('is-link');

        advImg.src = "https://drive.google.com/uc?export=view&id=14cJaQZA5Lg0OJuvMIaGRmR9tH0eiKn-Y";
      }else{
      microVisibility.classList.remove('view');
      regVisibility.classList.remove('view');
      aeroVisibility.classList.remove('view');
      advVisibility.classList.add('view');

      microSelect.classList.remove('is-link');
      regSelect.classList.remove('is-link');
      aeroSelect.classList.remove('is-link');
      advSelect.classList.add('is-link');

      microImg.src = "https://drive.google.com/uc?export=view&id=1xhgyT4fkfgZaskIZExbKu959IQE-z0fl";
      aeroImg.src = "assets/img/aero.png";
      regImg.src = "https://drive.google.com/uc?export=view&id=1oKJXx-mJxSKCedyXJAFAlQlNURupHy0n";
      advImg.src = "https://drive.google.com/uc?export=view&id=1aRHe6TMJW8zd2gGlcFktGK6hP18xVPpO";
      }
    }

    let aeroClick = function () {
      if(aeroVisibility.classList.contains('view')){
        aeroVisibility.classList.remove('view');
        aeroSelect.classList.remove('is-link');
        aeroImg.src = "assets/img/aero.png";
      }else{
        aeroVisibility.classList.add('view');
        regVisibility.classList.remove('view');
        microVisibility.classList.remove('view');
        advVisibility.classList.remove('view');

        aeroSelect.classList.add('is-link');
        regSelect.classList.remove('is-link');
        advSelect.classList.remove('is-link');
        microSelect.classList.remove('is-link');

        aeroImg.src = "assets/img/aero.png";
        regImg.src = "https://drive.google.com/uc?export=view&id=1oKJXx-mJxSKCedyXJAFAlQlNURupHy0n";
        advImg.src = "https://drive.google.com/uc?export=view&id=14cJaQZA5Lg0OJuvMIaGRmR9tH0eiKn-Y";
        microImg.src = "https://drive.google.com/uc?export=view&id=1xhgyT4fkfgZaskIZExbKu959IQE-z0fl";
      } 
    }

    microBox.addEventListener('click', function () {
      microClick();
    })
    regBox.addEventListener('click', function () {
      regularClick();
    })
    advBox.addEventListener('click', function () {
      advancedClick();
    })
    aeroBox.addEventListener('click', function () {
      aeroClick();
    })

    //RESPONSIVE CODE

    let microVisibility2 = document.getElementById("micro2");
    let regVisibility2 = document.getElementById("reg2");
    let advVisibility2 = document.getElementById("adv2");
    let aeroVisibility2 = document.getElementById("aero2");

    let microBox2 = document.getElementById("microBox2");
    let regBox2 = document.getElementById("regBox2");
    let advBox2 = document.getElementById("advBox2");
    let aeroBox2 = document.getElementById("aeroBox2");

    let microSelect2 = document.getElementById("microSelect2");
    let regSelect2 = document.getElementById("regSelect2");
    let advSelect2 = document.getElementById("advSelect2");
    let aeroSelect2 = document.getElementById("aeroSelect2");

    let microImg2 = document.getElementById("microImg2") as HTMLImageElement;;
    let regImg2 = document.getElementById("regImg2") as HTMLImageElement;;
    let advImg2 = document.getElementById("advImg2") as HTMLImageElement;;
    let aeroImg2 = document.getElementById("aeroImg2") as HTMLImageElement;;

    let microClick2 = function () {
      if(microVisibility2.classList.contains('view')){
        microVisibility2.classList.remove('view');
        microSelect2.classList.remove('is-link');
        microImg2.src = "https://drive.google.com/uc?export=view&id=1xhgyT4fkfgZaskIZExbKu959IQE-z0fl";
      }else{
        microVisibility2.classList.add('view');
        regVisibility2.classList.remove('view');
        aeroVisibility2.classList.remove('view');
        advVisibility2.classList.remove('view');

        microSelect2.classList.add('is-link');
        regSelect2.classList.remove('is-link');
        advSelect2.classList.remove('is-link');
        aeroSelect2.classList.remove('is-link');

        microImg2.src = "https://drive.google.com/uc?export=view&id=1m29TQg3GJHr1gM44J_ALrp7R_BBmwmnH";
        aeroImg2.src = "assets/img/aero.png";
        regImg2.src = "https://drive.google.com/uc?export=view&id=1oKJXx-mJxSKCedyXJAFAlQlNURupHy0n";
        advImg2.src = "https://drive.google.com/uc?export=view&id=14cJaQZA5Lg0OJuvMIaGRmR9tH0eiKn-Y";
      } 
    }

    let regularClick2 = function () {
      if(regVisibility2.classList.contains('view')){
        regVisibility2.classList.remove('view');
        regSelect2.classList.remove('is-link');
        regImg2.src = "https://drive.google.com/uc?export=view&id=1oKJXx-mJxSKCedyXJAFAlQlNURupHy0n";
      }else{
      microVisibility2.classList.remove('view');
      regVisibility2.classList.add('view');
      advVisibility2.classList.remove('view');
      aeroVisibility2.classList.remove('view');

      microSelect2.classList.remove('is-link');
      aeroSelect2.classList.remove('is-link');
      regSelect2.classList.add('is-link');
      advSelect2.classList.remove('is-link');

      microImg2.src = "https://drive.google.com/uc?export=view&id=1xhgyT4fkfgZaskIZExbKu959IQE-z0fl";
      aeroImg2.src = "assets/img/aero.png";
      regImg2.src = "https://drive.google.com/uc?export=view&id=1ktC-G8d_P7gAmeOGt8TrAlwpP6MO5hGc";
      advImg2.src = "https://drive.google.com/uc?export=view&id=14cJaQZA5Lg0OJuvMIaGRmR9tH0eiKn-Y";
      }
    }

    let advancedClick2 = function () {
      if(advVisibility2.classList.contains('view')){
        advVisibility2.classList.remove('view');
        advSelect2.classList.remove('is-link');

        advImg2.src = "https://drive.google.com/uc?export=view&id=14cJaQZA5Lg0OJuvMIaGRmR9tH0eiKn-Y";
      }else{
      microVisibility2.classList.remove('view');
      regVisibility2.classList.remove('view');
      aeroVisibility2.classList.remove('view');
      advVisibility2.classList.add('view');

      microSelect2.classList.remove('is-link');
      regSelect2.classList.remove('is-link');
      aeroSelect2.classList.remove('is-link');
      advSelect2.classList.add('is-link');

      microImg2.src = "https://drive.google.com/uc?export=view&id=1xhgyT4fkfgZaskIZExbKu959IQE-z0fl";
      regImg2.src = "https://drive.google.com/uc?export=view&id=1oKJXx-mJxSKCedyXJAFAlQlNURupHy0n";
      advImg2.src = "https://drive.google.com/uc?export=view&id=1aRHe6TMJW8zd2gGlcFktGK6hP18xVPpO";
      aeroImg2.src = "assets/img/aero.png";
      }
    }

    let aeroClick2 = function () {
      if(aeroVisibility2.classList.contains('view')){
        aeroVisibility2.classList.remove('view');
        aeroSelect2.classList.remove('is-link');
        aeroImg2.src = "assets/img/aero.png";
      }else{
        aeroVisibility2.classList.add('view');
        regVisibility2.classList.remove('view');
        advVisibility2.classList.remove('view');
        microVisibility2.classList.remove('view');

        aeroSelect2.classList.add('is-link');
        regSelect2.classList.remove('is-link');
        advSelect2.classList.remove('is-link');
        microSelect2.classList.remove('is-link');

        aeroImg2.src = "assets/img/aero.png";
        regImg2.src = "https://drive.google.com/uc?export=view&id=1oKJXx-mJxSKCedyXJAFAlQlNURupHy0n";
        advImg2.src = "https://drive.google.com/uc?export=view&id=14cJaQZA5Lg0OJuvMIaGRmR9tH0eiKn-Y";
        microImg2.src = "https://drive.google.com/uc?export=view&id=1xhgyT4fkfgZaskIZExbKu959IQE-z0fl";
      } 
    }

    microBox2.addEventListener('click', function () {
      microClick2();
    })
    regBox2.addEventListener('click', function () {
      regularClick2();
    })
    advBox2.addEventListener('click', function () {
      advancedClick2();
    })
    aeroBox2.addEventListener('click', function () {
      aeroClick2();
    })

  }





}

