const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      // goodreads: {
      //   rating: 4.16,
      //   ratingsCount: 11663,
      //   reviewsCount: 812,
      // },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
const book3 = getBook(3);
const books = getBooks();

const { title, id, publicationDate } = book;
const { title2, id1 } = book3;
title;
id;

const { genres } = book;
genres;

const newgen = [genres, "jadu"];
newgen;

//Rest operator
const [pgen, sgen, ...other] = genres;
pgen;
sgen;
other;

const newgen2 = [pgen, sgen, other];
newgen2;

//Spread operator
const newgen3 = ["Jadu", ...genres];
newgen3;

//Spread operator --> Overwrite
const updatedbook = { ...book, publicationDate: "2003-10-04", pages: 1000 };
updatedbook;

//String literal
const str = `Title of id ${id} is ${title} and in ${
  publicationDate.split("-")[0]
}`;
str;

const fun = (str) => str.split(" ")[0];

console.log(fun(str));

//Chaining
function totalreview(book) {
  return (
    book.reviews.goodreads?.reviewsCount ??
    0 + book.reviews.librarything.reviewsCount
  );
}

console.log(totalreview(book));

//Filter method
const pages = books
  .filter((books) => books.pages > 500)
  .map((books) => books.title);
pages;

//Reduce method
const sumPages = books.reduce((accu, book) => accu + book.pages, 0);
sumPages;

//Ascending sort
const arr = [2, 4, 1, 3, 6, 5];
const sortArr = arr.sort((a, b) => a - b);
sortArr;

//Descending sort
const arr1 = [2, 4, 1, 3, 6, 5];
const sortArr1 = arr.sort((a, b) => b - a);
sortArr1; //[6,5,4,3,2,1]
arr1; //[6,5,4,3,2,1]

/*****Above sorting method sorting change the original array data*****/

const arr3 = [4, 2, 1, 3, 6, 5];
const sortArr3 = arr.slice().sort((a, b) => a - b);
sortArr3; //[1,2,3,4,5,6]
arr1; //[2, 4, 1, 3, 6, 5]

const sortByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortByPages;

/****INSERT****DELETE ****UPDATE******/

////INSERT using spread operators
const afterInsert = [
  ...books,
  {
    id: 7,
    title: "<NAME>",
    author: "<NAME>",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
  },
];
afterInsert;

//DELETE using filter

const afterDelete = books.filter((book) => book.id != 7);
afterDelete;

//UPDATE using map

const afterUpdate = books.map((book) => ({
  ...book,
  pages: book.pages + 1,
}));
afterUpdate;
