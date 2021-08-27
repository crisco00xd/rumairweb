import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news = [
    { id: 1,headline: 'SAE Aero Design Validation Event 2021 Awards Ceremony', description: 'Ceremonia de entrega de premios en las competencias "SAE Aero Design 2021"', image: 'https://drive.google.com/uc?export=view&id=1RbEbdbTcT7Keei3FdCnNUL2JqS0EGNMA' , link:'https://www.youtube.com/watch?v=uAbDxoxrmtw' },
    { id: 2,headline: 'Estudiantes del RUM Air - Aero Design han desarrollado un proyecto patrocinado por la Sociedad de Ingenieros Automotrices, alzado con premios y más.', description: 'Estudiantes del RUM Air - Aero Design han desarrollado un proyecto patrocinado por la Sociedad de Ingenieros Automotrices, alzado con premios....', image: 'https://drive.google.com/uc?export=view&id=1HXmi-13kYLi7YhtDodYwdMEu0YtdFM1T' , link:'https://www.wapa.tv/noticias/especiales/ciencia-y-meteorologia--jovenes-disenan-modelos-aereos_20131122481220.html' },
    { id: 3,headline: 'Estudiantes boricuas en competencia de diseño de aviones', description: 'Los jóvenes alumnos de la Universidad de Puerto Rico en Mayagüez diseñan aviones con especificaciones dadas por el SAE creando gastos sobre 75,000 dólares para cubrir los gastos de las competencias contra mas de 50 diferentes universidades.....', image: 'https://drive.google.com/uc?export=view&id=1G_QWdRbNuTRtKuQX4zd1QySUuK4VJTax' , link:'https://www.wapa.tv/noticias/especiales/ciencia-y-meteorologia--estudiantes-boricuas-en-competencia-de-diseno-de-aviones_20131122504134.html' }
    ];
constructor() { }

ngOnInit(): void {
}

}
