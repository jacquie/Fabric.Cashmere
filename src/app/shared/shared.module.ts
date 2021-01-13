import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownDirective} from './markdown/markdown.directive';
import {HighlightDirective} from './highlight/highlight.directive';
import {CashmereModule} from './cashmere.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule],
    declarations: [MarkdownDirective, HighlightDirective],
    exports: [MarkdownDirective, HighlightDirective, CommonModule, CashmereModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
