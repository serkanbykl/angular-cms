"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var layout_component_1 = require("../layout/layout.component");
var login_component_1 = require("./pages/login/login.component");
var register_component_1 = require("./pages/register/register.component");
var recover_component_1 = require("./pages/recover/recover.component");
var lock_component_1 = require("./pages/lock/lock.component");
var maintenance_component_1 = require("./pages/maintenance/maintenance.component");
var error404_component_1 = require("./pages/error404/error404.component");
var error500_component_1 = require("./pages/error500/error500.component");
exports.routes = [
    {
        path: '',
        component: layout_component_1.LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
            { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
            { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
            { path: 'ecommerce', loadChildren: './ecommerce/ecommerce.module#EcommerceModule' },
            { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
            { path: 'student', loadChildren: './student/student.module#StudentModule' },
            { path: 'teacher', loadChildren: './teacher/teacher.module#TeacherModule' }
        ]
    },
    // Not lazy-loaded routes
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'recover', component: recover_component_1.RecoverComponent },
    { path: 'lock', component: lock_component_1.LockComponent },
    { path: 'maintenance', component: maintenance_component_1.MaintenanceComponent },
    { path: '404', component: error404_component_1.Error404Component },
    { path: '500', component: error500_component_1.Error500Component },
    // Not found
    { path: '**', redirectTo: 'home' }
];
//# sourceMappingURL=routes.js.map