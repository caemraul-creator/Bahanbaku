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
    SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxSLgQWN2qWX0t1JQxeRm7KZB4bJkLrZaZfiC6cbcVKR7dx7v7LKeQ1qLn0-2psLdZ1/exec",

    // ========== SYNC KE SPREADSHEET ==========
    // true  → Setiap tambah/edit/hapus juga disimpan ke Spreadsheet (background)
    // false → Hanya simpan di Firebase (paling cepat)
    syncToSheet: true,

    // ========== OFFLINE MODE ==========
    // true → Data di-cache di browser, bisa diakses tanpa internet
    // false → Selalu butuh koneksi internet
    enableOffline: true
};
