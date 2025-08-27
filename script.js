






document.addEventListener("DOMContentLoaded", function() {
    // Event listener untuk tombol beli yang tidak memiliki onclick
    const buttons = document.querySelectorAll('.beli-btn:not([onclick])');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'order.html';
        });
    });
});

// Variabel global untuk menyimpan pilihan
let paketDipilih = '';
let kemasanDipilih = '';

function tampilkanForm() {
    document.getElementById('formPembelian').style.display = 'block';
}

function pilihPaket(btn) {
    document.querySelectorAll('.paket-container button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    paketDipilih = btn.innerText;
    updateLinkCheckout();
}

function pilihKemasan(btn) {
    document.querySelectorAll('.kemasan-container button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    kemasanDipilih = btn.innerText;
    updateLinkCheckout();
}

function updateLinkCheckout() {
    const produk = document.getElementById('namaProduk').innerText;
    const harga = document.getElementById('hargaProduk').innerText;
    
    let pesan = `Halo, saya ingin membeli ${produk} dengan harga ${harga}`;
    
    if (paketDipilih) {
        pesan += `, paket ${paketDipilih}`;
    }
    
    if (kemasanDipilih) {
        pesan += `, pengemasan ${kemasanDipilih}`;
    }
    
    const linkWA = `https://wa.me/6281228601369?text=${encodeURIComponent(pesan)}`;
    document.getElementById('checkoutBtn').href = linkWA;
}


