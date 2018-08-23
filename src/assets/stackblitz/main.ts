import './polyfills';

import {
    AccordionModule,
    AppSwitcherModule,
    BreadcrumbsModule,
    ButtonModule,
    CheckboxModule,
    ChipModule,
    DrawerModule,
    IconModule,
    InputModule,
    ListModule,
    ModalModule,
    NavbarModule,
    PaginationModule,
    PicklistModule,
    PopoverModule,
    ProgressIndicatorsModule,
    RadioButtonModule,
    SelectModule,
    SortModule,
    SubnavModule,
    TableModule,
    TabsModule,
    TileModule,
    TypeformSurveyModule
} from '@healthcatalyst/cashmere';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {CashmereDocsExample} from './app/cashmere-docs-example';
import {NgModule} from '@angular/core';

const EXPORT_CASHMERE_MODULES = [
    AccordionModule,
    AppSwitcherModule,
    BreadcrumbsModule,
    ButtonModule,
    CheckboxModule,
    ChipModule,
    DrawerModule,
    IconModule,
    InputModule,
    ListModule,
    ModalModule,
    NavbarModule,
    PaginationModule,
    PicklistModule,
    PopoverModule,
    ProgressIndicatorsModule,
    RadioButtonModule,
    SelectModule,
    SortModule,
    SubnavModule,
    TableModule,
    TabsModule,
    TileModule,
    TypeformSurveyModule
];

@NgModule({
    exports: EXPORT_CASHMERE_MODULES
})
export class DemoCashmereModule {
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        DemoCashmereModule
    ],
    entryComponents: [CashmereDocsExample],
    declarations: [CashmereDocsExample],
    bootstrap: [CashmereDocsExample],
    providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
