// ============================================================
// STOKBAHAN — KONFIGURASI (Sudah diisi)
// ============================================================

const CONFIG = {

    // ========== FIREBASE CONFIGURATION ==========
    firebase: {
        apiKey: "AIzaSyDNvKpyPGRldnhzGF1FmxAkpTcNUGUMW04",
        authDomain: "stokbahan.firebaseapp.com",
        projectId: "stokbahan",
        storageBucket: "stokbahan.firebasestorage.app",
        messagingSenderId: "756454185409",
        appId: "1:756454185409:web:6858b9862293b517fd3740"
    },

    // ========== GOOGLE APPS SCRIPT URL ==========
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzCqr9cpYK-i5y7LdtL4rAY9X5j7paaAs9_vMXYn456Ip9q0wBM4ODlKybE5ZSOCNU5/exec",

    // ========== SYNC KE SPREADSHEET ==========
    // true  → Setiap tambah/edit/hapus juga disimpan ke Spreadsheet (background)
    // false → Hanya simpan di Firebase (paling cepat)
    syncToSheet: true,

    // ========== OFFLINE MODE ==========
    // true → Data di-cache di browser, bisa diakses tanpa internet
    // false → Selalu butuh koneksi internet
    enableOffline: true
};
