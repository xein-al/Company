// Toggle Chatbot
document.getElementById('open-chat').addEventListener('click', () => {
    document.getElementById('chatbot').style.display = 'block';
    document.getElementById('open-chat').style.display = 'none';
});
document.getElementById('close-chat').addEventListener('click', () => {
    document.getElementById('chatbot').style.display = 'none';
    document.getElementById('open-chat').style.display = 'block';
});

// Enhanced Chatbot Logic
const responses = {
    "halo|hai|hello": [
        "Halo! Selamat datang di LayananKonsultasi. Bagaimana saya bisa membantu Anda hari ini?",
        "Hai! Ada yang bisa saya bantu tentang perusahaan kami?"
    ],
    "layanan|service|apa yang ditawarkan": [
        "Kami menawarkan: 1. Konsultasi Bisnis (strategi pertumbuhan), 2. Layanan IT (solusi teknologi), 3. Pelatihan (untuk tim Anda). Mana yang ingin Anda ketahui lebih lanjut?",
        "Layanan utama kami meliputi konsultasi bisnis, IT, dan pelatihan profesional. Apa spesifik yang Anda butuhkan?"
    ],
    "konsultasi bisnis|bisnis": [
        "Konsultasi bisnis kami membantu perusahaan Anda dengan analisis pasar, strategi pemasaran, dan optimasi operasional. Biaya mulai dari Rp 5 juta per proyek. Tertarik?"
    ],
    "layanan it|it|teknologi": [
        "Layanan IT kami mencakup pengembangan software, keamanan data, dan dukungan cloud. Kami gunakan teknologi terbaru untuk efisiensi maksimal."
    ],
    "pelatihan|training": [
        "Program pelatihan kami meliputi workshop kepemimpinan, digital marketing, dan manajemen proyek. Durasi 1-3 hari, tersedia online/offline."
    ],
    "tentang|about|profil perusahaan": [
        "LayananKonsultasi adalah perusahaan konsultasi terkemuka sejak 2010, fokus pada inovasi bisnis. Visi kami: Membantu bisnis berkembang. Misi: Solusi berkualitas tinggi."
    ],
    "pendiri|founder|ceo": [
        "Perusahaan ini didirikan oleh tim ahli dengan pengalaman 10+ tahun di industri konsultasi. Jika ingin detail, hubungi kami."
    ],
    "lokasi|alamat|dimana": [
        "Kami berbasis di Jakarta, Indonesia. Untuk konsultasi, kami juga melayani online atau onsite di seluruh Indonesia."
    ],
    "harga|biaya|cost": [
        "Harga tergantung layanan: Konsultasi mulai Rp 5 juta, IT Rp 10 juta, Pelatihan Rp 2 juta per orang. Hubungi untuk penawaran khusus."
    ],
    "kontak|hubungi|email|telepon": [
        "Hubungi kami di email: info@layanankonsultasi.com atau telepon: +62 812-3456-7890. Atau isi form di website."
    ],
    "jam kerja|waktu": [
        "Jam kerja: Senin-Jumat, 09:00-17:00 WIB. Sabtu tutup, tapi email selalu dibalas."
    ],
    "default": [
        "Maaf, saya tidak sepenuhnya mengerti. Coba tanya tentang layanan, tentang perusahaan, atau kontak kami. Atau hubungi tim support di info@layanankonsultasi.com.",
        "Pertanyaan bagus! Untuk detail lebih lanjut, saya sarankan isi form kontak atau email kami."
    ]
};

function getResponse(input) {
    const lowerInput = input.toLowerCase();
    for (const key in responses) {
        const regex = new RegExp(key, 'i'); 
        if (regex.test(lowerInput)) {
            const respArray = responses[key];
            return respArray[Math.floor(Math.random() * respArray.length)];
        }
    }
    return responses.default[Math.floor(Math.random() * responses.default.length)];
}

document.getElementById('chat-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
        const input = e.target.value.trim();
        const messages = document.getElementById('chat-messages');
        messages.innerHTML += `<p><strong>Anda:</strong> ${input}</p>`;
        const response = getResponse(input);
        messages.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
        e.target.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
});
