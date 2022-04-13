import photoGrid4 from '../images/IMG_7780.JPG';
import PertamaKaliKetemu from '../images/9fbf8b9f-8a4c-4002-b376-89a7355eaf21.JPG';
import PertamaKaliNGasihBunga from '../images/d836f1eb-6c7f-43b9-b410-30aa470ec4e0.JPG';
import KetemuDimakam from '../images/fd4b80d5-85ba-4f0e-a61b-b44b26815742.JPG';
import KitaDiJungle from '../images/376FA7C3-B200-4313-8319-84394EC4065A.JPG';
import BirthdayAku from '../images/IMG_7822.JPG';
import Dufann from '../images/dunfen.jpeg';
import Diner from '../images/diner.jpeg';

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
    title: "First Time Diner",
    path: Diner,
    story: "Pertama kali Diner nih, ala ala, candle light diner 🤣, sebelumnya gapernah samsek akuuu, dan setelah cobain, enakan bebek madura haha,, tapi vibesnya seru sih, suka redvelvet ala jaksel haha🥳 ",
    date: "27 November 2021"
  },
  {
    title: "Birthday Aku",
    path: BirthdayAku,
    story: "Pertama ulang tahun di surprisein sama ayang 🥳 happy dan bingung karena seumur2 belum pernah dapet surprise WKWKWK 🤣 luvvss lah intinya 💕",
    date: "5 December 2021"
  },
  {
    title: "Kenalan Nih sama papah 🥳",
    path: KetemuDimakam,
    story: "Yuuuuww, Lagi ketemu papah akuuu nihhh 💕",
    date: "25 December 2021"
  },
  {
    title: "Rock N Roll In The Jungle",
    path: KitaDiJungle,
    story: "Pertama kali jalan2n yang jauuuhh nichh,, happy banget disini aku 🥳🥳🥳. makasiii yaaaa udah ajak💕🤗 ",
    date: "28 December 2021"
  },
  {
    title: "Dufucking Funnnn!!",
    path: Dufann,
    story: "Ke dufan padahal takut tinggi, yang penting dapet fotonya 🤪, ini definisi nantang maut sih aku 🤣. Kora-kora yang penting dah cobain HAHA... dan aku berani 🤪",
    date: "30 March 2022"
  },
]