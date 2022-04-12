import photoGrid4 from '../images/IMG_7780.JPG';
import PertamaKaliKetemu from '../images/9fbf8b9f-8a4c-4002-b376-89a7355eaf21.JPG';
import PertamaKaliNGasihBunga from '../images/d836f1eb-6c7f-43b9-b410-30aa470ec4e0.JPG';

export interface IListImages {
  title: string;
  path: any;
  story: string;
  date: string;
}

export const listImages: IListImages[] = [
  {
    title: "First Date",
    path: PertamaKaliKetemu,
    story: "Pertama kali ketemu, gapake basa basi, langsung aja bukber kitaaa di Jakarta, tapi sebelumnya kita ke makam dlu ya bey... 🤗💕",
    date: "8 May 2021"
  },
  {
    title: "Pasir Angin",
    path: photoGrid4,
    story: "Tempat pertama kita nugas bareng, dan tempat berawal kita membahas interest satu sama lain, berkat mas-mas foto, aku jadi bisa rangkul kamu foto 🤪😝",
    date: "27 May 2021"
  },
  {
    title: "Ngambek Tapi Ngasih Bunga 😜",
    path: PertamaKaliNGasihBunga,
    story: "Uhuuyy, malah ke bandung,, tapii aku untung masih selow,, trus random aja ngasih bungaaa 🤣💕🤗",
    date: "26 August 2021"
  },
  {
    title: "Birthday Aku",
    path: PertamaKaliNGasihBunga,
    story: "Yuuuuww, pertama kali dapat birthday surpise priseeeee !!🍾🥳💕😍 maaciiww bebey",
    date: "05 August 2021"
  }
]