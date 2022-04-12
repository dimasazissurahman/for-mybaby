
export interface IQuestionList {
  question: string;
  answer?: string;
  page: number;
}
export const questionList:IQuestionList[] = [
  {
    question: "Tanggal berapa kita pertama kali bertemu ? (Format Jawaban DD-MM-YYYY)",
    answer: "08-05-2021",
    page: 1
  },
  {
    question: "Apa nama tempat kita nugas bareng, yang memorable dan pertanda kita jadian ?",
    answer: "Pasir Angin",
    page: 2
  },
  {
    question: "Apa warna favorit akuuwww ?",
    answer: "biru langit",
    page: 3
  }
]