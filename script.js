// Dark/Light Modu
const modeToggle = document.querySelector('.mode-toggle');
const langToggle = document.querySelector('.lang-toggle');

// Gece/Gündüz Modu
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Mod değiştikçe simgeyi değiştir
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = '🌞'; // Gündüz modu simgesi
    } else {
        modeToggle.textContent = '🌙'; // Gece modu simgesi
    }
});

// Dil Değiştirici
let language = 'en'; // Başlangıçta İngilizce dilini varsayıyoruz

langToggle.addEventListener('click', () => {
    if (language === 'en') {
        language = 'tr'; // Türkçeye geçiş
        langToggle.textContent = 'TR'; // Buton yazısı Türkçe olsun
    } else {
        language = 'en'; // İngilizceye geçiş
        langToggle.textContent = 'EN'; // Buton yazısı İngilizce olsun
    }

    updateLanguage(); // Sayfa içeriğini güncelle
});

function updateLanguage() {
    const enTexts = {
        'about-header': 'About Me',
        'about-text': `Hello! I’m Sait, a computer engineering student with a passion for technology. My interests lie in areas such as software development, cloud solutions, and DevOps. My goal is to optimize software development processes and create scalable and sustainable solutions by working with cloud infrastructures.

Currently, I’m enhancing my skills in software development and system management by working with cloud platforms like AWS. Additionally, I have hands-on experience with Linux-based operating systems and Git for version control. Linux provides me with flexibility and a powerful environment for software development and server management, while Git has become an essential tool for collaboration and version control in my projects.

I am always eager to learn new technologies and apply this knowledge in practical projects. Through my portfolio, I aim to showcase the projects I've worked on and the experience I've gained, demonstrating my skills and approach to potential employers or collaborators. I am enthusiastic about learning more and contributing to the tech world!

`,
        'contact-header': 'Contact Me',
    };
    const trTexts = {
        'about-header': 'Hakkımda',
        'about-text': `Merhaba! Ben Sait, bilgisayar mühendisliği öğrencisiyim ve teknolojiye olan tutkum sayesinde yazılım geliştirme, bulut çözümleri ve DevOps gibi alanlara ilgi duymaktayım. Hedefim, yazılım geliştirme süreçlerini daha verimli hale getirmek, bulut altyapıları üzerinde çalışarak ölçeklenebilir ve sürdürülebilir çözümler üretmek.

Şu anda AWS gibi bulut platformları üzerinde çalışarak, yazılım geliştirme ve sistem yönetimi alanındaki becerilerimi geliştirmekteyim. Ayrıca, Linux tabanlı işletim sistemleri ve Git ile sürüm kontrol sistemleri konusunda deneyim sahibiyim. Linux, yazılım geliştirme ve sunucu yönetimi için bana esneklik ve güçlü bir çalışma ortamı sunarken, Git ise projelerde işbirliği yapma ve sürüm kontrolü sağlama konusunda önemli bir araç oldu.

Her zaman yeni teknolojileri öğrenmeye ve uygulamalı projelerde bu bilgileri hayata geçirmeye yönelik bir yaklaşım benimseyerek kendimi geliştirmeye devam ediyorum. Portfolyomda, çalıştığım projeleri ve kazandığım deneyimleri paylaşarak, potansiyel işverenlere veya iş ortaklarına becerilerimi ve projelere olan yaklaşımımı göstermek istiyorum. Teknoloji dünyasında daha fazlasını öğrenmeye ve katkı sağlamaya hevesliyim!`,
        'contact-header': 'Bana Ulaşın',
    };

    const texts = language === 'en' ? enTexts : trTexts;

    // Metinleri güncelle
    for (const key in texts) {
        document.getElementById(key).innerText = texts[key];
    }
}

// Sayfa yüklenince dil seçeneklerini güncelle
updateLanguage();
