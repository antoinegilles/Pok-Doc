import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoketailsPage } from './poketails.page';

describe('PoketailsPage', () => {
  let component: PoketailsPage;
  let fixture: ComponentFixture<PoketailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoketailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoketailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
