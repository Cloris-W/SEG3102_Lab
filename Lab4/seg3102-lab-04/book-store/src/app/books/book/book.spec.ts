import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Book } from './book';

describe('Book', () => {
  let component: Book;
  let fixture: ComponentFixture<Book>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Book],
      providers: [{ provide: ActivatedRoute, useValue: { params: of({ id: '1001' }) } }],
    }).compileComponents();

    fixture = TestBed.createComponent(Book);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should look up the book named by the route parameter', () => {
    expect(component.selectedBook.title).toBe('Introduction to Angular');
  });
});
