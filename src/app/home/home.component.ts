import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.tabManager();
  }

  tabManager(){

    let tabsWithContent = (function () {
      let tabs = document.querySelectorAll('.tabs li');
      let tabsContent = document.querySelectorAll('.tab-content');
    
      let deactvateAllTabs = function () {
        tabs.forEach(function (tab) {
          tab.classList.remove('is-active');
        });
      };
    
      let hideTabsContent = function () {
        tabsContent.forEach(function (tabContent) {
          tabContent.classList.remove('is-active');
          tabContent.setAttribute('visibility', 'hidden');
        });
      };
    
      let activateTabsContent = function (tab) {
        tabsContent[getIndex(tab)].classList.add('is-active');
        tabsContent[getIndex(tab)].setAttribute('visibility', 'visible');
      };
    
      let getIndex = function (el) {
        return [...el.parentElement.children].indexOf(el);
      };
    
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          deactvateAllTabs();
          hideTabsContent();
          tab.classList.add('is-active');
          activateTabsContent(tab);
        });
      })

      document.getElementById("overviewTab").classList.add('is-active');
      
    
    })();
  }

  
 
   
  

  
}