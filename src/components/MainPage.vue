<template>
  <div class="container mx-auto py-10">
    <div class="bg-blue-500 rounded-md p-9">
      <div class="text-center mb-10">
        <h1 class="text-white font-black text-5xl">Paket Mandiri Supplier</h1>
        <p class="text-white mt-2">
          Paket kebutuhan pokok dengan harga terjangkau
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Paket A -->
        <div
          class="bg-white rounded-2xl shadow p-6 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <span
            class="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full"
          >
            Terlaris
          </span>

          <img
            :src="paket_A"
            alt="Paket A"
            class="w-fit object-contain rounded-xl mb-4"
          />

          <h2 class="text-xl font-bold text-slate-950 mb-2">Paket A</h2>
          <p class="text-gray-500 text-sm mb-4">
            Solusi praktis untuk kebutuhan dapur sehari-hari
          </p>

          <ul class="text-gray-700 space-y-1 mb-6">
            <li>✔ Minyak Saudara 800ML</li>
            <li>✔ Beras Rojolele 1KG</li>
            <li>✔ Gulaku 500GR</li>
          </ul>

          <p class="text-2xl font-bold mb-4">
            Rp 40.000 <span class="text-gray-500 text-base">/paket</span>
          </p>

          <!-- RouterLink HANYA pada tombol -->
          <RouterLink :to="{ name: 'MenuPembelian', params: { paket: 'A' } }">
            <button
              class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Pesan
            </button>
          </RouterLink>
        </div>

        <!-- Paket B -->
        <div
          class="bg-white rounded-2xl shadow p-6 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <span
            class="absolute top-4 right-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full"
          >
            Ekonomis
          </span>

          <img
            :src="paket_B"
            alt="Paket B"
            class="w-fit object-contain rounded-xl mb-4"
          />

          <h2 class="text-xl text-slate-950 font-bold mb-2">Paket B</h2>
          <p class="text-gray-500 text-sm mb-4">
            Pilihan terbaik untuk stock dan banyak keperluan
          </p>

          <ul class="text-gray-700 space-y-1 mb-6">
            <li>✔ Minyak Saudara 1LTR</li>
            <li>✔ Beras Rojolele 5KG</li>
            <li>✔ Gulaku 500GR</li>
          </ul>

          <p class="text-2xl font-bold mb-4">
            Rp 95.000 <span class="text-gray-500 text-base">/paket</span>
          </p>

          <RouterLink :to="{ name: 'MenuPembelian', params: { paket: 'B' } }">
            <button
              class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Pesan
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Informasi Pembayaran Tetap -->
    <div
      class="bg-white mt-5 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto border border-gray-200"
    >
      <h3 class="text-xl font-bold text-blue-600 mb-4 text-center">
        Informasi Pembayaran & Keamanan
      </h3>
      <p class="text-gray-500 text-sm mb-4 text-center">
        Silakan pesan paket yang Anda pilih terlebih dahulu. Setelah Admin
        merespon, Anda dapat melanjutkan transaksi melalui rekening resmi.
      </p>

      <div class="space-y-3">
        <div class="bg-gray-50 p-4 rounded-lg border border-blue-700">
          <p class="font-semibold text-slate-950">Rekening Pembayaran:</p>
          <p class="text-blue-500 mt-1">Bank BCA — 7130564628</p>
          <p class="text-blue-500">Sungkono</p>
        </div>

        <div class="bg-green-50 p-4 rounded-lg border border-green-500">
          <p class="font-semibold text-slate-950">WhatsApp:</p>
          <a
            href="https://wa.me/625694419400"
            target="_blank"
            class="text-green-500 font-bold underline"
          >
            +625694419400
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import paket_A from "../assets/A.jpg";
import paket_B from "../assets/B.jpg";
</script>
