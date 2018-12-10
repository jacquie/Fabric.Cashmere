import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TypeformSurveyModule} from './typeform-survey.module';
import {By} from '@angular/platform-browser';
import {TypeformSurveyComponent} from './typeform-survey.component';

@Component({
    template: `<hc-typeform-survey #survey [surveyUri]="surveyUri" [dataAutoOpen]="dataAutoOpen">Survey</hc-typeform-survey>`
})
class TestAppComponent {
    private _surveyUri = 'https://somecompany.typeform.com/to/surveyId?parameter=parametervalue';
    private _dataAutoOpen = false;

    get surveyUri() {
        return this._surveyUri;
    }
    set surveyUri(link) {
        this._surveyUri = link;
    }
    get dataAutoOpen(): boolean {
        return this._dataAutoOpen;
    }
    set dataAutoOpen(open: boolean) {
        this._dataAutoOpen = open;
    }
}

fdescribe('TypeformSurveyComponent', () => {
    let testComponent: TestAppComponent;
    let fixture: ComponentFixture<TestAppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TypeformSurveyModule],
            declarations: [TestAppComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestAppComponent);
        testComponent = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(testComponent).toBeTruthy();
        let childDebugElement = fixture.debugElement.query(By.directive(TypeformSurveyComponent));
        expect(childDebugElement.componentInstance).toBeTruthy();
    });

    describe('when getScripts is called and there is no uri ', () => {
        it('should throw an error', () => {
            let childDebugComponent = fixture.debugElement.query(By.directive(TypeformSurveyComponent)).componentInstance;
            testComponent.surveyUri = '';
            fixture.detectChanges();
            const wrap = () => childDebugComponent.open();
            expect(wrap).toThrowError(`SurveyUri must be specified on element hc-typeform-survey`);
        });
    });
    describe('when getScripts is called and there is a uri', () => {
        it('should create a script element', () => {
            let childDebugElement = fixture.debugElement.query(By.directive(TypeformSurveyComponent));
            testComponent.surveyUri = 'https://healthcatalyst.typeform.com/to/bGDyIK?productname=Fabric.Cashmere';
            fixture.detectChanges();
            childDebugElement.componentInstance.open();
            const scriptElement = document.getElementById('typeform_share');
            const firstScript = document.getElementsByTagName.call(document, 'script')[0];
            expect(scriptElement).toBeTruthy();
            expect(scriptElement!.getAttribute('src')).toEqual(`https://embed.typeform.com/embed.js`);
            expect(firstScript.getAttribute('id')).toEqual('typeform_share');
        });
    });
    xdescribe('when the script exists', () => {
        it('should create a popup', () => {
            let embedScript = document.createElement('script');
            embedScript.id = 'typeform_share';
            embedScript.src = `https://embed.typeform.com/embed.js`;

            // insert embed script before other js scripts
            const firstScript = document.getElementsByTagName.call(document, 'script')[0];
            if (firstScript.parentNode) {
                firstScript.parentNode.insertBefore(embedScript, firstScript);
            }
            let childDebugComponent = fixture.debugElement.query(By.directive(TypeformSurveyComponent)).componentInstance;
            testComponent.surveyUri = 'https://healthcatalyst.typeform.com/to/bGDyIK?productname=Fabric.Cashmere';
            testComponent.dataAutoOpen = true;

            fixture.detectChanges();
            childDebugComponent.open();
        });
    });
});
