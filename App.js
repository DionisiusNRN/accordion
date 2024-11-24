import Accordion from "./components/Accordion";
import "./index.css";

const faqs = [
  {
    question: "Apakah produk ini memiliki jaminan?",
    answer:
      "Ya, kami memberikan jaminan garansi selama 1 tahun untuk produk kami.",
  },
  {
    question: "Berapa lama waktu pengiriman rata-rata?",
    answer:
      "Waktu pengiriman rata-rata adalah 3-5 hari kerja, tergantung lokasi pengiriman.",
  },
  {
    question: "Bagaimana cara mengembalikan barang yang rusak?",
    answer:
      "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

export default App;

// source code: https://codesandbox.io/p/sandbox/sweet-elion-43g38p?file=%2Fsrc%2FApp.js%3A1%2C34
