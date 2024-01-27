import { Book } from '../book';
import type { BookType } from '../../types';

type BookListProps = {
  books: BookType[];
};

export const BookList = ({ books }: BookListProps) => {
  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          thumbnail={book.thumbnail.url}
          price={book.price}
        />
      ))}
    </>
  );
};
