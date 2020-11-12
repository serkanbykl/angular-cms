import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../core/translator/translator.service';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { admin_menu, main_menu, student_menu, teacher_menu } from './menu';
import { routes } from './routes';
import { AccountService } from './pages/services/account.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor(public menuService: MenuService, tr: TranslatorService, private acc: AccountService) {
        // Logged in
        if (!acc.checkLoginStatus()) {
            menuService.addMenu(main_menu);
        }

        else {
            
            
            if (localStorage.getItem("userRole") === "Admin") {
                menuService.addMenu(admin_menu);

            }
            else if (localStorage.getItem("userRole") === "Teacher") {
                menuService.addMenu(teacher_menu);

            }

            else if (localStorage.getItem("userRole") === "Student") {
                menuService.addMenu(student_menu);

            }            
            else {
                menuService.addMenu(main_menu);
            }

        }


    }

    
}
