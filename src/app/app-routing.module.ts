import { EditarPensamentoComponent } from './components/pensamentos_components/editar-pensamento/editar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentosComponent } from './components/pensamentos_components/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentoComponent } from './components/pensamentos_components/criar-pensamento/criar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos_components/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
