import {Component, DestroyRef, inject, signal} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Subscription} from 'rxjs';
import {AuthorDetails, BooksService} from '../books/service/books-service';

@Component({
  selector: 'app-authors',
  imports: [ReactiveFormsModule],
  templateUrl: './authors.html'
})
export class Authors {
  private readonly booksService = inject(BooksService);
  private readonly destroyRef = inject(DestroyRef);
  private request?: Subscription;

  readonly form = new FormGroup({
    id: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('[1-9][0-9]*')]
    })
  });
  readonly author = signal<AuthorDetails | null>(null);
  readonly message = signal('');
  readonly loading = signal(false);

  search(): void {
    this.request?.unsubscribe();
    this.author.set(null);
    this.message.set('');
    this.loading.set(false);

    const id = this.form.controls.id.value;
    if (this.form.invalid || id.length > 19 ||
        (id.length === 19 && id > '9223372036854775807')) {
      this.message.set('Enter a valid positive author ID.');
      return;
    }

    this.loading.set(true);
    this.request = this.booksService.getAuthor(id).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: author => {
        this.author.set(author);
        this.loading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.loading.set(false);
        this.message.set(error.status === 404
          ? `No author found with ID ${id}.`
          : 'Unable to retrieve the author. Please try again.');
      }
    });
  }
}
