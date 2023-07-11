import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponent()"> Destruir componente </button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit { 

  public destruir: boolean = true;

  constructor() {}

  ngOnInit(): void {
    
  }

  public destruirComponent() {
    this.destruir = false;
  }
}

{/* SEÇÃO 3 - COMPONENTES NO ANGULAR */}
// OnInit() - Vem assim que o component carregar.
// OnChange() - Executado sempre que um valor de um controle de entrada dentro do componente alterado. Sempre que recebe um dado através do @Input o ngOnChanges() é invocado.
// DoCheck() - Este evento é disparado sempre que  as propriedades de entrada de um componente são verificadas.
  // AfterContentInit() - Este métodod de ciclo de vida é executado quando o Angular realiza qualquer projeção de conteúdo nas visualizações do componente.
  // AfterContentChecked() - Este método de gancho de ciclo de vida é executado sempre que o conteúdo do componente é verificado pelo mecanismo de detecção de alteração do angular.
  // AfterViewInit() - Este método de gancho de ciclo de vida é executado quando a visualização do componente foi totalmente inicializada.
  // AfterViewChecked() - Ela é executada toda vez que a visualização de um determinado componente foi verificada pelo algoritmo de detecção de alterações no angular.

 /*  ngOnInit: é executado uma vez quando o componente é inicializado;

ngOnChanges: executado também uma vez na criação do componente e toda vez que ele sofrer alguma mudança;

ngDoCheck: executado a cada mudança que o ngOnChange não detecta;

ngOnDestroy: executado na destruição do componente.

Além desses existem outros quatros hooks dentro do ngDoCheck:

ngAfterContentInit: sempre que um conteúdo vindo de uma fonte externa do componente é inserido;

ngAfterContentChecked: quando o conteúdo externo é verificado;

ngAfterViewInit: executado logo após os dados dos filhos e do próprio componente ser inicializado;

ngAfterViewChecked: sempre que é detectado uma alteração do conteúdo é chamado esse cara. */