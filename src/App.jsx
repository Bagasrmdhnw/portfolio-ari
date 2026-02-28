import "./App.css"
import profilePic from "./assets/Fotoprofile.jpg"; // import foto dari src/assets

function App() {
  return (
    <div className="container">

      <header className="header">
  <div className="header-content">
    {/* Foto Profil */}
    <img src=
      {profilePic}
      alt="Ari Bagas Ramadhan Wibowo" 
      className="profile-pic"
    />

    {/* Nama & Deskripsi */}
    <div className="header-text">
      <h1>Ari Bagas Ramadhan Wibowo</h1>
      <p>Informatics Graduate | Front-End Developer | IT Support</p>
    </div>
  </div>
</header>

      {/* ABOUT */}
      <section>
  <h2>Tentang Saya</h2>
  <div className="about-card">
    <p>
      Lulusan Teknik Informatika di <strong> Universitas Dian Nuswantoro </strong> 
      dengan IPK 3,73 yang memiliki pengalaman dalam pengembangan aplikasi berbasis web 
      menggunakan JavaScript dan ReactJS. Berpengalaman dalam merancang 
      dan mengimplementasikan sistem informasi dari tahap analisis kebutuhan hingga deployment. 
      Memiliki pemahaman mengenai integrasi REST API, manajemen state, serta pengolahan data berbasis web.
      Terbiasa bekerja secara kolaboratif dan memiliki kemampuan komunikasi yang baik. 
      Siap berkontribusi dalam mendukung penguatan dan transformasi digital perusahaan berbasis sistem 
      yang efisien dan terstruktur.
    </p>
  </div>
</section>
{/* EDUCATION */}
<section>
  <h2>Education</h2>

  <div className="card">
    <h3>Universitas Dian Nuswantoro</h3>
    <p className="company">S1 Teknik Informatika | 2020 – 2024</p>
    <ul>
      <li>Lulus dengan predikat <strong>Cum Laude</strong> (IPK 3,73)</li>
      <li>Mempelajari pemrograman, pengembangan web, dan manajemen proyek TI</li>
      <li>Melakukan penelitian dan proyek akhir yang berfokus pada pengembangan aplikasi berbasis web</li>
      <li>Aktif mengikuti seminar dan kegiatan IT di kampus</li>
    </ul>
  </div>

</section>
      {/* EXPERIENCE */}
      <section>
  <h2>Experience</h2>

  {/* Pengalaman Profesional */}
  <div className="card">
    <h3>Frontend Developer Intern</h3>
    <p className="company">PT Ruang Raya Indonesia (Ruangguru) | Feb 2023 – Jun 2023</p>
    <ul>
      <li>Mengembangkan Single Page Application (SPA) menggunakan ReactJS.</li>
      <li>Mengintegrasikan REST API untuk pengolahan dan penyajian data dinamis.</li>
      <li>Mengimplementasikan state management dalam pengembangan aplikasi.</li>
      <li>Menerapkan version control menggunakan Git dalam kolaborasi tim.</li>
      <li>Melakukan deployment aplikasi berbasis web menggunakan Netlify dan Vercel.</li>
      <li>Berkontribusi aktif dalam diskusi dan penyelesaian proyek berbasis web.</li>
      <li>Mendapatkan penghargaan “The Most Active Student of the Week”.</li>
    </ul>
  </div>

  {/* Pengalaman Akademik */}
  <div className="card">
    <h3>Asisten Dosen – Manajemen Proyek</h3>
    <p className="company">Universitas Dian Nuswantoro | (2022)</p>
    <ul>
      <li>Mendampingi dosen dalam pelaksanaan perkuliahan terkait perencanaan dan pengelolaan proyek TI.</li>
      <li>Membantu mahasiswa memahami konsep perencanaan proyek, penjadwalan, manajemen risiko, dan evaluasi kinerja proyek.</li>
      <li>Memberikan asistensi dalam penyusunan dokumen proyek seperti timeline, WBS, dan laporan proyek.</li>
      <li>Mendukung proses evaluasi tugas dan presentasi proyek mahasiswa.</li>
    </ul>
  </div>

  <div className="card">
    <h3>Asisten Dosen – Pengembangan Website</h3>
    <p className="company">Universitas Dian Nuswantoro | (2021)</p>
    <ul>
      <li>Membimbing mahasiswa dalam praktik pengembangan website menggunakan HTML, CSS, dan JavaScript.</li>
      <li>Memberikan asistensi teknis dalam implementasi fitur dan debugging kode.</li>
      <li>Membantu mahasiswa memahami integrasi frontend dengan REST API.</li>
      <li>Mendukung proses penilaian tugas praktik dan proyek akhir mata kuliah.</li>
    </ul>
  </div>
</section>

<section>
  <h2 className="volunteer-title">Volunteer Experience</h2>

  <div className="volunteer-card">
    <h3>Yayasan Disabilitas Tegal Bahari</h3>
    <p className="organization">2024</p>
    <ul>
      <li>Mendokumentasikan kegiatan sosial dan membuat konten publikasi yang menarik untuk berbagai platform digital.</li>
      <li>Mengelola media sosial untuk mendukung penyebaran informasi kegiatan yayasan secara efektif.</li>
      <li>Berkontribusi dalam meningkatkan awareness masyarakat mengenai program sosial dan inklusivitas disabilitas.</li>
    </ul>
  </div>

  <div className="volunteer-card">
    <h3>Mantik Creative – Hari Jadi Kabupaten Tegal</h3>
    <p className="organization">2019</p>
    <ul>
      <li>Berkoordinasi dalam pengelolaan logistik dan komunikasi eksternal selama acara berlangsung.</li>
      <li>Membantu penyusunan strategi komunikasi untuk memastikan informasi kegiatan tersampaikan dengan jelas.</li>
      <li>Berkontribusi dalam kesuksesan acara melalui dukungan teknis, dokumentasi, dan koordinasi tim.</li>
    </ul>
  </div>
</section>

      <section>
  <h2>Projects</h2>

  <div className="card">
    <h3>Sistem Informasi Perpustakaan</h3>
    <p>
      Sebuah aplikasi web yang dirancang untuk mempermudah pengelolaan perpustakaan, 
      mulai dari katalog, peminjaman, hingga pengembalian buku secara efisien. 
      Proyek ini mengasah kemampuan saya dalam membangun SPA menggunakan <strong>ReactJS</strong>, 
      mengintegrasikan <strong>REST API</strong>, dan menerapkan konsep <strong>state management</strong> 
      untuk data dinamis.
    </p>
    <a
      href="https://lib-bagas-master.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="card-btn"
    >
      Lihat Project
    </a>
  </div>
    <h2>Project Website</h2>

  <div className="card">
    <h3>E-Commerce Website</h3>
    <p>
      Sebuah aplikasi web rekayasa yang dirancang untuk mengelola transksaksi pembelian barang, 
      mulai dari katalog dan pembelian barang-barang secara efisien. 
      Proyek ini mengasah kemampuan saya dalam membangun SPA menggunakan <strong>ReactJS</strong>, 
      mengintegrasikan <strong>REST API</strong>, dan menerapkan konsep <strong>state management</strong> 
      untuk data dinamis.
    </p>
    <a
      href="https://ecommerce-app-nu-six.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="card-btn"
    >
      Lihat Project
    </a>
  </div>

<div className="card">
  <h3>Portfolio lainnya</h3>
  <p>
    Membuat website portfolio interaktif untuk menampilkan pengalaman, skill, 
    dan proyek secara profesional. Proyek ini memperkuat kemampuan saya dalam 
    desain UI/UX, responsif web design, dan penerapan animasi halus untuk pengalaman pengguna yang lebih menarik.
  </p>
  <a
    href="https://drive.google.com/drive/folder/YourFolderIDHere?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="card-btn"
  >
    Lihat Project
  </a>
</div>
</section>
      {/* SKILLS */}
      <section>
  <h2>Technical Skills</h2>

  {/* Programming & Web Development */}
  <div className="skills-card">
    <h3>Programming & Web Development</h3>
    <ul>
      <li>JavaScript (ES6+)</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>ReactJS</li>
    </ul>
  </div>

  {/* Tools & Technologies */}
  <div className="skills-card">
    <h3>Tools & Technologies</h3>
    <ul>
      <li>Git & GitHub</li>
      <li>VS Code</li>
      <li>Netlify</li>
      <li>Vercel</li>
      <li>Basic Node.js</li>
    </ul>
  </div>

  {/* Concepts */}
  <div className="skills-card">
    <h3>Concepts</h3>
    <ul>
      <li>REST API Integration</li>
      <li>Object-Oriented Programming (OOP)</li>
      <li>Asynchronous Programming</li>
      <li>Responsive Web Design</li>
    </ul>
  </div>
</section><section>
  <h2>Contact</h2>
  <div className="contact-card">
    <p>Email: aribagasramadhanwibowo09@gmail.com</p>
    <p>LinkedIn: linkedin.com/in/aribagasrmdhnw</p>
    <p>GitHub: github.com/bagasrmdhnw</p>
    <a
      href="https://wa.me/6287794012227"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-btn"
    >
      Hubungi Saya
    </a>
  </div>
</section>

      <footer>
        <p>© 2026 Ari Bagas Ramadhan Wibowo</p>
      </footer>

    </div>
  );
}

export default App;