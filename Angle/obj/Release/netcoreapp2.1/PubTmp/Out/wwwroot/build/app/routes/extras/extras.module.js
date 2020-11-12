"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtrasModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_tree_component_1 = require("angular-tree-component");
var core_2 = require("@agm/core");
var ngx_select_ex_1 = require("ngx-select-ex");
var shared_module_1 = require("../../shared/shared.module");
var bugtracker_component_1 = require("./bugtracker/bugtracker.component");
var calendar_component_1 = require("./calendar/calendar.component");
var codeeditor_component_1 = require("./codeeditor/codeeditor.component");
var contactdetails_component_1 = require("./contactdetails/contactdetails.component");
var contacts_component_1 = require("./contacts/contacts.component");
var faq_component_1 = require("./faq/faq.component");
var filemanager_component_1 = require("./filemanager/filemanager.component");
var followers_component_1 = require("./followers/followers.component");
var forum_component_1 = require("./forum/forum.component");
var forumdiscussion_component_1 = require("./forum/forumdiscussion/forumdiscussion.component");
var forumtopics_component_1 = require("./forum/forumtopics/forumtopics.component");
var helpcenter_component_1 = require("./helpcenter/helpcenter.component");
var invoice_component_1 = require("./invoice/invoice.component");
var compose_component_1 = require("./mailbox/compose/compose.component");
var folder_component_1 = require("./mailbox/folder/folder.component");
var mailbox_component_1 = require("./mailbox/mailbox.component");
var view_component_1 = require("./mailbox/view/view.component");
var plans_component_1 = require("./plans/plans.component");
var profile_component_1 = require("./profile/profile.component");
var projects_component_1 = require("./projects/projects.component");
var projectsdetails_component_1 = require("./projectsdetails/projectsdetails.component");
var search_component_1 = require("./search/search.component");
var settings_component_1 = require("./settings/settings.component");
var socialboard_component_1 = require("./socialboard/socialboard.component");
var teamviewer_component_1 = require("./teamviewer/teamviewer.component");
var timeline_component_1 = require("./timeline/timeline.component");
var todolist_component_1 = require("./todolist/todolist.component");
var votelinks_component_1 = require("./votelinks/votelinks.component");
var routes = [
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'contactdetails', component: contactdetails_component_1.ContactdetailsComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'projectsdetails', component: projectsdetails_component_1.ProjectsdetailsComponent },
    { path: 'teamviewer', component: teamviewer_component_1.TeamviewerComponent },
    { path: 'socialboard', component: socialboard_component_1.SocialboardComponent },
    { path: 'votelinks', component: votelinks_component_1.VotelinksComponent },
    { path: 'bugtracker', component: bugtracker_component_1.BugtrackerComponent },
    { path: 'faq', component: faq_component_1.FaqComponent },
    { path: 'helpcenter', component: helpcenter_component_1.HelpcenterComponent },
    { path: 'followers', component: followers_component_1.FollowersComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: 'plans', component: plans_component_1.PlansComponent },
    { path: 'filemanager', component: filemanager_component_1.FilemanagerComponent },
    {
        path: 'forum',
        children: [
            { path: '', component: forum_component_1.ForumComponent },
            { path: 'topics/:catid', component: forumtopics_component_1.ForumtopicsComponent, outlet: 'primary' },
            { path: 'discussion/:topid', component: forumdiscussion_component_1.ForumdiscussionComponent, outlet: 'primary' }
        ]
    },
    {
        path: 'mailbox',
        component: mailbox_component_1.MailboxComponent,
        children: [
            { path: '', redirectTo: 'folder/inbox' },
            { path: 'folder/:folder', component: folder_component_1.FolderComponent },
            { path: 'view/:mid', component: view_component_1.ViewComponent },
            { path: 'compose', component: compose_component_1.ComposeComponent }
        ]
    },
    { path: 'timeline', component: timeline_component_1.TimelineComponent },
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
    { path: 'invoice', component: invoice_component_1.InvoiceComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'todolist', component: todolist_component_1.TodolistComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'codeeditor', component: codeeditor_component_1.CodeeditorComponent }
];
var ExtrasModule = /** @class */ (function () {
    function ExtrasModule() {
    }
    ExtrasModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                angular_tree_component_1.TreeModule.forRoot(),
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
                }),
                ngx_select_ex_1.NgxSelectModule
            ],
            declarations: [
                bugtracker_component_1.BugtrackerComponent,
                calendar_component_1.CalendarComponent,
                codeeditor_component_1.CodeeditorComponent,
                contactdetails_component_1.ContactdetailsComponent,
                contacts_component_1.ContactsComponent,
                faq_component_1.FaqComponent,
                filemanager_component_1.FilemanagerComponent,
                followers_component_1.FollowersComponent,
                forum_component_1.ForumComponent,
                forumdiscussion_component_1.ForumdiscussionComponent,
                forumtopics_component_1.ForumtopicsComponent,
                helpcenter_component_1.HelpcenterComponent,
                invoice_component_1.InvoiceComponent,
                compose_component_1.ComposeComponent,
                folder_component_1.FolderComponent,
                mailbox_component_1.MailboxComponent,
                view_component_1.ViewComponent,
                plans_component_1.PlansComponent,
                profile_component_1.ProfileComponent,
                projects_component_1.ProjectsComponent,
                projectsdetails_component_1.ProjectsdetailsComponent,
                search_component_1.SearchComponent,
                settings_component_1.SettingsComponent,
                socialboard_component_1.SocialboardComponent,
                teamviewer_component_1.TeamviewerComponent,
                timeline_component_1.TimelineComponent,
                todolist_component_1.TodolistComponent,
                votelinks_component_1.VotelinksComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], ExtrasModule);
    return ExtrasModule;
}());
exports.ExtrasModule = ExtrasModule;
//# sourceMappingURL=extras.module.js.map