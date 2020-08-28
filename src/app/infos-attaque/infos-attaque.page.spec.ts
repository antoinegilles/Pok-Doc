import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosAttaquePage } from './infos-attaque.page';

describe('InfosAttaquePage', () => {
  let component: InfosAttaquePage;
  let fixture: ComponentFixture<InfosAttaquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosAttaquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosAttaquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
