import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { AuthenticationService } from './authentication-service';
import { Admin } from './admin/admin';

describe('routing smoke test', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    sessionStorage.clear();
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    harness = await RouterTestingHarness.create();
  });

  it('renders Home at the root path', async () => {
    await harness.navigateByUrl('/');
    expect(harness.routeNativeElement?.textContent).toContain('Welcome to the Book Store');
  });

  it('renders an existing book through the parameterized child route', async () => {
    await harness.navigateByUrl('/books/1003');
    const text = harness.routeNativeElement?.textContent ?? '';
    expect(text).toContain('A Fantastic Story');
    expect(text).toContain('Jane, C');
    expect(text).toContain('Tala, Tolo');
  });

  it('reports an unknown book id', async () => {
    await harness.navigateByUrl('/books/9999');
    expect(harness.routeNativeElement?.textContent).toContain("Sorry can't find the requested book");
  });

  it('redirects an unknown path to Home', async () => {
    await harness.navigateByUrl('/nowhere');
    expect(harness.routeNativeElement?.textContent).toContain('Welcome to the Book Store');
  });

  it('sends a logged out visitor from Admin to Login', async () => {
    await harness.navigateByUrl('/admin');
    expect(TestBed.inject(Router).url).toBe('/login');
    expect(TestBed.inject(AuthenticationService).redirectUrl).toBe('/admin');
  });

  it('lets an authenticated visitor reach Admin', async () => {
    TestBed.inject(AuthenticationService).login('admin', 'password');
    await harness.navigateByUrl('/admin');
    expect(TestBed.inject(Router).url).toBe('/admin');
    expect(harness.routeNativeElement?.textContent).toContain('Book Form');
  });

  it('adds a book through the Admin form and serves it on its own route', async () => {
    TestBed.inject(AuthenticationService).login('admin', 'password');
    const admin = (await harness.navigateByUrl('/admin', Admin)) as Admin;

    admin.addAuthor();
    admin.bookForm.patchValue({
      id: '2001',
      category: 'Cook',
      title: 'Bread and Butter',
      cost: '31.50',
      year: '2024',
      description: 'A baking book.',
    });
    admin.authors.at(0).patchValue({ firstName: 'Ada', lastName: 'L' });
    expect(admin.bookForm.valid).toBe(true);
    admin.onSubmit();

    await harness.navigateByUrl('/books/2001');
    const text = harness.routeNativeElement?.textContent ?? '';
    expect(text).toContain('Bread and Butter');
    expect(text).toContain('Ada, L');
    expect(text).toContain('31.5');
  });
});
