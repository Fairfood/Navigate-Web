import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { ActivatedRoute } from '@angular/router';

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;
    let mockActivatedRoute: Partial<ActivatedRoute>;

    beforeEach(async () => {
        mockActivatedRoute = {};
        await TestBed.configureTestingModule({
            imports: [SidebarComponent],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
