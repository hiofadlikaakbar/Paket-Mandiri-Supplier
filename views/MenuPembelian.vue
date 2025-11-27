<template>
  <div class="container mx-auto py-10 relative">
    <!-- Tombol Chevron Back: POSISI POJOK KIRI ATAS -->
    <RouterLink
      to="/"
      class="absolute top-4 left-4 inline-flex items-center text-blue-600 hover:opacity-80 transition bg-white p-2 rounded-full shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </RouterLink>
    <div class="bg-blue-500 rounded-md p-9 max-w-3xl mx-auto">
      <!-- Tombol Chevron Back -->

      <h1 class="text-white text-center font-black text-4xl mb-6">
        Pembelian Paket {{ paket }}
      </h1>

      <div class="bg-white rounded-2xl shadow p-7">
        <div class="flex flex-col items-center mb-6">
          <img :src="gambarPaket" class="w-52 rounded-xl mb-4" />
          <h2 class="text-2xl font-bold">Paket {{ paket }}</h2>
          <p class="text-gray-500">
            {{ deskripsi }}
          </p>
          <p class="text-3xl font-bold mt-3">{{ harga }}</p>
        </div>

        <hr class="my-5" />

        <h3 class="text-xl font-bold mb-3">Form Pemesanan</h3>

        <form class="space-y-4" @submit.prevent="kirimPesanan">
          <div>
            <label class="block font-semibold mb-1">Nama Pemesan</label>
            <input
              v-model="nama"
              type="text"
              class="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">No. Telepon</label>
            <input
              v-model="telepon"
              type="text"
              class="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Nama Sales</label>
            <input
              v-model="namaSales"
              type="text"
              class="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Jumlah</label>
            <input
              v-model="jumlah"
              type="number"
              min="1"
              class="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Konfirmasi Pesanan
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { supabase } from "../src/supabase";

// aset paket
import paket_A from "../src/assets/A.jpg";
import paket_B from "../src/assets/B.jpg";

// ambil paket dari url
const route = useRoute();
const paket = route.params.paket;

// Data paket
const dataPaket = {
  A: {
    img: paket_A,
    harga: "Rp 40.000",
    deskripsi: "Paket kebutuhan pokok harian yang ekonomis.",
  },
  B: {
    img: paket_B,
    harga: "Rp 95.000",
    deskripsi: "Paket super lengkap untuk kebutuhan bulanan.",
  },
};

// mapping data
const gambarPaket = dataPaket[paket].img;
const harga = dataPaket[paket].harga;
const deskripsi = dataPaket[paket].deskripsi;

// FORM STATE
const nama = ref("");
const telepon = ref("");
const namaSales = ref("");
const jumlah = ref(1);

// SUPABASE INSERT FUNCTION
const kirimPesanan = async () => {
  const { error } = await supabase.from("pesanan").insert([
    {
      paket: paket,
      nama: nama.value,
      telepon: telepon.value,
      nama_sales: namaSales.value,
      jumlah: jumlah.value,
    },
  ]);

  if (error) {
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Gagal!",
      text: "Pesanan tidak dapat dikirim. Coba lagi nanti.",
      confirmButtonColor: "#3085d6",
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Pesanan Terkirim!",
    text: "Tunggu, Admin akan segera menghubungi Anda.",
    confirmButtonColor: "#3085d6",
  });

  // reset form
  nama.value = "";
  telepon.value = "";
  namaSales.value = "";
  jumlah.value = 1;
};
</script>
