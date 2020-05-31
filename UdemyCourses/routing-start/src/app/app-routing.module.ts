import { NgModule } from '@angular/core';
import { ServersComponent } from './servers/servers.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from '../Services/auth-guard.service';
import { CanDeactivateGuardService } from '../Services/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from 'src/Services/server-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: ':id/:name',
                component: UserComponent
            },
        ]
    },
    {
        path: 'servers',
        // canActivate: [
        //     AuthGuardService
        // ],
        canActivateChild: [
            AuthGuardService
        ],
        component: ServersComponent,
        children: [
            {
                path: ':id/edit',
                component: EditServerComponent,
                canDeactivate: [
                    CanDeactivateGuardService
                ]
            },
            {
                path: ':id',
                component: ServerComponent,
                resolve: {
                    server: ServerResolverService
                }
            }
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: 'Error while executing!!' }
    },
    /*Ordering of routes is important*/
    /*So wild card route must be at last*/
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, { useHash: true })
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
