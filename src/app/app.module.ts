import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CriarPensamentoComponent } from './components/pensamentos_components/criar-pensamento/criar-pensamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPensamentosComponent } from './components/pensamentos_components/listar-pensamentos/listar-pensamentos.component';
import { PensamentoComponent } from './components/pensamentos_components/pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './components/pensamentos_components/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos_components/editar-pensamento/editar-pensamento.component';
import { BotaoCarregarComponent } from './components/pensamentos_components/listar-pensamentos/botao-carregar/botao-carregar.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentosComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent,
    BotaoCarregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
