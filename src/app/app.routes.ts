import { Routes } from '@angular/router';
import { Atoms } from './presentation/pages/atoms/atoms';
import { Molecules } from './presentation/pages/molecules/molecules';
import { Organisms } from './presentation/pages/organisms/organisms';
import { Productos } from './presentation/pages/productos/productos';
import { Clientes } from './presentation/pages/clientes/clientes';
import { Pedidos } from './presentation/pages/pedidos/pedidos';

export const routes: Routes = [
    { path: 'atoms', component: Atoms },
    { path: 'molecules', component: Molecules },
    { path: 'organisms', component: Organisms },
    { path: 'productos', component: Productos },
    { path: 'clientes', component: Clientes },
    { path: 'pedidos', component: Pedidos },
    { path: '**', redirectTo: 'productos' },
];
