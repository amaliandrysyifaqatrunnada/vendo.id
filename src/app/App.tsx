import { useState } from "react";
import { MapPin, Star, Users, Calendar, Phone, Mail, Menu, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const categories = [
  { id: "all", name: "Semua Paket" },
  { id: "wedding", name: "Paket Pernikahan" },
  { id: "birthday", name: "Paket Ulang Tahun" },
  { id: "corporate", name: "Paket Acara Kantor" },
  { id: "graduation", name: "Paket Wisuda" },
];

function FooterLinks() {
  return (
    <div>
      <h4 className="mb-4 font-semibold text-[#1A5F7A]">Perusahaan</h4>
      <ul className="space-y-3 text-sm">
        <li><a href="#about" className="text-[#374151] hover:text-[#1A5F7A] transition-colors">Tentang Kami</a></li>
        <li>
          <Dialog>
            <DialogTrigger className="text-[#374151] hover:text-[#1A5F7A] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer">
              Cara Kerja
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                  Cara Kerja vendo.id
                </DialogTitle>
                <DialogDescription>
                  Proses mudah untuk mewujudkan acara impian Anda
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Pilih Paket</h4>
                    <p className="text-sm text-amber-900/70">Jelajahi berbagai paket event kami dan pilih yang sesuai dengan kebutuhan Anda.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Konsultasi Gratis</h4>
                    <p className="text-sm text-amber-900/70">Hubungi kami via WhatsApp untuk konsultasi dan diskusi detail acara Anda.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Kustomisasi</h4>
                    <p className="text-sm text-amber-900/70">Sesuaikan paket dengan preferensi Anda, dari menu hingga dekorasi.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Pembayaran</h4>
                    <p className="text-sm text-amber-900/70">Lakukan pembayaran DP untuk mengonfirmasi pesanan Anda.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Nikmati Acara</h4>
                    <p className="text-sm text-amber-900/70">Kami yang urus semuanya, Anda tinggal nikmati momen spesial Anda!</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </li>
        <li>
          <Dialog>
            <DialogTrigger className="text-[#374151] hover:text-[#1A5F7A] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer">
              Mitra Vendor
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                  Bergabung Sebagai Mitra Vendor
                </DialogTitle>
                <DialogDescription>
                  Kembangkan bisnis Anda bersama vendo.id
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <p className="text-amber-900/70">
                  Kami selalu mencari vendor profesional untuk bergabung dengan platform kami. Dengan menjadi mitra vendo.id, Anda akan mendapatkan:
                </p>
                <ul className="space-y-2 text-sm text-amber-900/70">
                  <li className="flex gap-2">
                    <CheckCircle2 className="size-5 text-amber-600 flex-shrink-0" />
                    <span>Akses ke ribuan calon pelanggan potensial</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="size-5 text-amber-600 flex-shrink-0" />
                    <span>Platform marketing gratis untuk mempromosikan layanan Anda</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="size-5 text-amber-600 flex-shrink-0" />
                    <span>Dukungan tim kami dalam mengelola pesanan</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="size-5 text-amber-600 flex-shrink-0" />
                    <span>Pembayaran yang aman dan tepat waktu</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="size-5 text-amber-600 flex-shrink-0" />
                    <span>Kesempatan untuk berkembang bersama platform terpercaya</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm text-amber-900/70 mb-4">Tertarik bergabung? Hubungi kami sekarang!</p>
                  <Button
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                    onClick={() => window.open('https://wa.me/6285808794964?text=Halo%20vendo.id,%20saya%20tertarik%20menjadi%20mitra%20vendor', '_blank')}
                  >
                    <MessageCircle className="mr-2" />
                    Hubungi via WhatsApp
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </li>
        <li>
          <Dialog>
            <DialogTrigger className="text-[#374151] hover:text-[#1A5F7A] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer">
              Blog
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                  Blog & Tips Event
                </DialogTitle>
                <DialogDescription>
                  Artikel dan tips untuk membuat acara Anda lebih berkesan
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Tips Memilih Vendor Pernikahan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-amber-900/70 mb-3">Panduan lengkap memilih vendor yang tepat untuk hari spesial Anda...</p>
                    <span className="text-xs text-amber-600">15 Mei 2026</span>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Tren Dekorasi Event 2026</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-amber-900/70 mb-3">Inspirasi dekorasi terkini untuk membuat acara Anda lebih instagramable...</p>
                    <span className="text-xs text-amber-600">10 Mei 2026</span>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Checklist Persiapan Acara</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-amber-900/70 mb-3">Hal-hal penting yang tidak boleh terlewat dalam persiapan acara Anda...</p>
                    <span className="text-xs text-amber-600">5 Mei 2026</span>
                  </CardContent>
                </Card>

                <p className="text-sm text-amber-900/70 text-center pt-4">
                  Artikel lengkap segera hadir. Stay tuned!
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </li>
      </ul>
    </div>
  );
}

const vendors = [
  {
    id: 1,
    name: "Paket Pernikahan Premium",
    category: "wedding",
    rating: 4.8,
    reviews: 156,
    location: "Jakarta Selatan",
    price: "Rp 25.000.000",
    image: "https://images.unsplash.com/photo-1761226874991-039d2fc4b490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGRlY29yYXRpb24lMjB2ZW5kb3J8ZW58MXx8fHwxNzc4NjE1NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Paket lengkap untuk pernikahan impian Anda dengan dekorasi, katering, dan dokumentasi",
    services: ["Dekorasi", "Katering 200 pax", "Foto & Video", "MC & Musik"],
  },
  {
    id: 2,
    name: "Paket Ulang Tahun Anak",
    category: "birthday",
    rating: 4.9,
    reviews: 203,
    location: "Jakarta Barat",
    price: "Rp 5.500.000",
    image: "https://images.unsplash.com/photo-1764344832838-f53060686020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxldmVudCUyMGRlY29yYXRpb24lMjB2ZW5kb3J8ZW58MXx8fHwxNzc4NjE1NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Pesta ulang tahun meriah untuk si kecil dengan dekorasi tema favoritnya",
    services: ["Dekorasi Tema", "Kue & Snack", "Badut & Games", "Foto"],
  },
  {
    id: 3,
    name: "Paket Corporate Event",
    category: "corporate",
    rating: 4.7,
    reviews: 189,
    location: "Tangerang",
    price: "Rp 15.000.000",
    image: "https://images.unsplash.com/photo-1732259495388-af40b972c311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBzZXJ2aWNlfGVufDF8fHx8MTc3ODYxNTQwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Solusi lengkap untuk acara gathering, seminar, dan launching produk perusahaan",
    services: ["Venue", "Katering", "Sound System", "Dokumentasi"],
  },
  {
    id: 4,
    name: "Paket Pernikahan Intimate",
    category: "wedding",
    rating: 4.6,
    reviews: 142,
    location: "Jakarta Utara",
    price: "Rp 12.000.000",
    image: "https://images.unsplash.com/photo-1774025967891-b4ed833e57ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXRlcmluZyUyMGZvb2QlMjBzZXJ2aWNlfGVufDF8fHx8MTc3ODYxNTQwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Paket pernikahan intimate untuk 50-100 tamu dengan konsep modern minimalis",
    services: ["Dekorasi Simple", "Katering 100 pax", "Foto", "Live Music"],
  },
  {
    id: 5,
    name: "Paket Wisuda & Graduation",
    category: "graduation",
    rating: 4.8,
    reviews: 167,
    location: "Bekasi",
    price: "Rp 8.500.000",
    image: "https://images.unsplash.com/photo-1761110429384-0678d7015545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjYXRlcmluZyUyMGZvb2QlMjBzZXJ2aWNlfGVufDF8fHx8MTc3ODYxNTQwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Rayakan kelulusan dengan pesta wisuda yang berkesan bersama keluarga dan teman",
    services: ["Dekorasi", "Katering", "Photo Booth", "Dokumentasi"],
  },
  {
    id: 6,
    name: "Paket Sweet Seventeen",
    category: "birthday",
    rating: 4.9,
    reviews: 221,
    location: "Jakarta Pusat",
    price: "Rp 9.000.000",
    image: "https://images.unsplash.com/photo-1745848038063-bbb6fc8c8867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwaG90b2dyYXBoeSUyMGVxdWlwbWVudCUyMHN0dWRpb3xlbnwxfHx8fDE3Nzg2MTU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Pesta sweet seventeen yang elegan dan tak terlupakan untuk momen spesial Anda",
    services: ["Dekorasi Elegan", "Katering", "DJ & Lighting", "Foto & Video"],
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<typeof vendors[0] | null>(null);

  const filteredVendors = vendors.filter((vendor) => {
    const matchesCategory = selectedCategory === "all" || vendor.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-amber-50/30">
      <header className="sticky top-0 z-50 w-full border-b border-amber-200/50 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-9 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/20">
                <Calendar className="size-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">vendo.id</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-amber-900/70 hover:text-amber-900 transition-colors">
                Beranda
              </a>
              <a href="#paket" className="text-sm font-medium text-amber-900/70 hover:text-amber-900 transition-colors">
                Paket
              </a>
              <a href="#about" className="text-sm font-medium text-amber-900/70 hover:text-amber-900 transition-colors">
                Tentang
              </a>
              <a href="#contact" className="text-sm font-medium text-amber-900/70 hover:text-amber-900 transition-colors">
                Kontak
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg shadow-amber-900/20">
    Masuk
  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">Masuk ke Akun</DialogTitle>
                    <DialogDescription>
                      Masukkan email dan password Anda untuk melanjutkan
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="nama@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                      Masuk
                    </Button>
                    <p className="text-center text-sm text-amber-900/70">
                      Belum punya akun?{" "}
                      <button
                        onClick={() => {
                          setLoginOpen(false);
                          setRegisterOpen(true);
                        }}
                        className="font-medium text-amber-900 hover:underline"
                      >
                        Daftar di sini
                      </button>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg shadow-amber-900/20">Daftar</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">Buat Akun Baru</DialogTitle>
                    <DialogDescription>
                      Lengkapi data di bawah untuk membuat akun baru
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <Input id="reg-email" type="email" placeholder="nama@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">No. Telepon</Label>
                      <Input id="phone" type="tel" placeholder="08123456789" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">Password</Label>
                      <Input id="reg-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                      Daftar Sekarang
                    </Button>
                    <p className="text-center text-sm text-amber-900/70">
                      Sudah punya akun?{" "}
                      <button
                        onClick={() => {
                          setRegisterOpen(false);
                          setLoginOpen(true);
                        }}
                        className="font-medium text-amber-900 hover:underline"
                      >
                        Masuk di sini
                      </button>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-sm hover:text-amber-900 transition-colors">Beranda</a>
                <a href="#paket" className="text-sm hover:text-amber-900 transition-colors">Paket</a>
                <a href="#about" className="text-sm hover:text-amber-900 transition-colors">Tentang</a>
                <a href="#contact" className="text-sm hover:text-amber-900 transition-colors">Kontak</a>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" className="w-full" onClick={() => setLoginOpen(true)}>Masuk</Button>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600" onClick={() => setRegisterOpen(true)}>Daftar</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
        <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyYWluIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiM3ODM1MEYiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjE1IiByPSIxLjUiIGZpbGw9IiM5MjQwMEUiLz48Y2lyY2xlIGN4PSIxNSIgY3k9IjQ1IiByPSIwLjgiIGZpbGw9IiM3ODM1MEYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhaW4pIi8+PC9zdmc+')]"></div>

        <div className="absolute top-10 right-10 w-64 h-64 opacity-20 hidden lg:block">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1568823577963-7f207be7f395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwY29uZmV0dGl8ZW58MXx8fHwxNzc4NjI4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Confetti decoration"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute bottom-10 left-10 w-48 h-48 opacity-10 hidden lg:block">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwY29uZmV0dGl8ZW58MXx8fHwxNzc4NjI4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Party celebration"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-amber-900 via-orange-800 to-amber-700 bg-clip-text text-transparent drop-shadow-sm">
              Paket Event Terlengkap untuk Acara Impian Anda
            </h1>
            <p className="text-xl text-amber-900/80 max-w-2xl mx-auto leading-relaxed">
              Pilih paket event yang sesuai dengan kebutuhan Anda. Lengkap dengan vendor profesional dan harga terjangkau.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-xl shadow-xl shadow-amber-900/20 px-8">
                Lihat Paket
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-900 hover:bg-amber-100 rounded-xl px-8">
                Konsultasi Gratis
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm">
              <div className="flex items-center gap-3 text-amber-900">
                <div className="size-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-md border border-amber-200/50">
                  <Calendar className="size-6 text-amber-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg text-amber-900">50+</div>
                  <div className="text-xs text-amber-700">Paket Event</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-amber-900">
                <div className="size-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-md border border-amber-200/50">
                  <Star className="size-6 text-amber-700 fill-amber-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg text-amber-900">4.8</div>
                  <div className="text-xs text-amber-700">Rating Rata-rata</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-amber-900">
                <div className="size-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center shadow-md border border-amber-200/50">
                  <Users className="size-6 text-amber-700" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg text-amber-900">10.000+</div>
                  <div className="text-xs text-amber-700">Acara Berhasil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="paket" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-orange-50/40"></div>
        <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0id29vZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgNTBRMjUgNDUgNTAgNTBUMTAwIDUwIiBzdHJva2U9IiM3ODM1MEYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgNzBRMjUgNjggNTAgNzBUMTAwIDcwIiBzdHJva2U9IiM3ODM1MEYiIHN0cm9rZS13aWR0aD0iMC4zIiBmaWxsPSJub25lIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3dvb2QpIi8+PC9zdmc+')]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent mb-3">
                Paket Event Kami
              </h2>
              <p className="text-amber-900/70 text-lg">Pilih paket yang sesuai dengan kebutuhan acara Anda</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-full px-6 shadow-lg shadow-amber-900/20 border-0"
                    : "border-amber-300 text-amber-900 hover:bg-amber-100 hover:border-amber-400 rounded-full px-6 bg-white/50 backdrop-blur-sm"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map((vendor) => (
              <Card key={vendor.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-amber-200 bg-white group hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                  <ImageWithFallback
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/95 backdrop-blur text-amber-900 border border-amber-200/50 rounded-full shadow-lg">
                      {categories.find(c => c.id === vendor.category)?.name}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">{vendor.name}</CardTitle>
                  <CardDescription className="text-amber-900/70">{vendor.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-1.5 rounded-full border border-amber-200">
                      <Star className="size-4 fill-amber-600 text-amber-600" />
                      <span className="text-sm font-semibold text-amber-900">
                        {vendor.rating}
                      </span>
                      <span className="text-sm text-amber-700">({vendor.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-amber-800">
                      <MapPin className="size-4" />
                      <span>{vendor.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {vendor.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="outline" className="border-amber-300 text-amber-900 bg-amber-50/50 rounded-full">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-amber-200">
                    <div>
                      <div className="text-xs text-amber-700">Mulai dari</div>
                      <div className="font-bold text-lg bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">{vendor.price}</div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-lg shadow-lg shadow-amber-900/20"
                      onClick={() => setSelectedPackage(vendor)}
                    >
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-amber-900/70">Tidak ada paket yang ditemukan. Coba kategori lain.</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent mb-4">
                Tentang vendo.id
              </h2>
              <p className="text-xl text-amber-900/80 max-w-2xl mx-auto">
                Platform terpercaya untuk mewujudkan acara impian Anda dengan paket lengkap dan harga terjangkau
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50/30">
                <CardHeader>
                  <div className="size-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="size-6 text-white" />
                  </div>
                  <CardTitle className="text-amber-900">Visi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-900/70 leading-relaxed">
                    Menjadi platform penyedia paket event terlengkap dan terpercaya di Indonesia yang memudahkan setiap orang untuk merayakan momen spesial mereka tanpa ribet.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50/30">
                <CardHeader>
                  <div className="size-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Star className="size-6 text-white fill-white" />
                  </div>
                  <CardTitle className="text-amber-900">Misi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-900/70 leading-relaxed">
                    Menyediakan paket event berkualitas dengan harga transparan, vendor profesional, dan pelayanan terbaik untuk setiap pelanggan kami.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Mengapa Memilih vendo.id?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="size-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Calendar className="size-8 text-amber-700" />
                  </div>
                  <h4 className="font-semibold text-amber-900 mb-2">Paket Lengkap</h4>
                  <p className="text-sm text-amber-900/70">Semua kebutuhan event dalam satu paket praktis</p>
                </div>
                <div className="text-center">
                  <div className="size-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="size-8 text-amber-700" />
                  </div>
                  <h4 className="font-semibold text-amber-900 mb-2">Vendor Terpilih</h4>
                  <p className="text-sm text-amber-900/70">Hanya bekerjasama dengan vendor profesional dan terpercaya</p>
                </div>
                <div className="text-center">
                  <div className="size-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle2 className="size-8 text-amber-700" />
                  </div>
                  <h4 className="font-semibold text-amber-900 mb-2">Harga Transparan</h4>
                  <p className="text-sm text-amber-900/70">Tidak ada biaya tersembunyi, semua sudah termasuk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-800"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBhdHRlcm4iIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>

        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 hidden lg:block">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1651399973942-1721a0de0851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwY29uZmV0dGl8ZW58MXx8fHwxNzc4NjI4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Colorful celebration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-10 hidden lg:block">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1739734963148-5f1e0868cb7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwY29uZmV0dGl8ZW58MXx8fHwxNzc4NjI4MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Party cupcakes"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-white drop-shadow-lg">✨ Siap Mewujudkan Acara Impian Anda?</h2>
            <p className="text-lg text-amber-100 leading-relaxed">
              Hubungi kami sekarang dan dapatkan konsultasi gratis untuk merencanakan acara Anda bersama vendor terpercaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-white text-amber-900 hover:bg-amber-50 rounded-xl shadow-2xl font-semibold"
                onClick={() => window.open('https://wa.me/6285808794964?text=Halo%20vendo.id,%20saya%20ingin%20konsultasi%20tentang%20paket%20event', '_blank')}
              >
                <MessageCircle />
                Hubungi via WhatsApp
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-amber-800/90 border-2 border-white text-white hover:bg-white hover:text-amber-900 rounded-xl backdrop-blur-sm font-semibold shadow-2xl transition-all">
                    <Mail />
                    Kirim Email
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">Hubungi Kami</DialogTitle>
                    <DialogDescription>
                      Kirim pesan Anda dan kami akan segera menghubungi Anda kembali
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Nama</Label>
                      <Input id="contact-name" placeholder="Nama lengkap Anda" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="nama@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">No. WhatsApp</Label>
                      <Input id="contact-phone" type="tel" placeholder="085808794964" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Pesan</Label>
                      <Textarea id="contact-message" placeholder="Ceritakan kebutuhan acara Anda..." rows={4} />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                      Kirim Pesan
                    </Button>
                    <p className="text-center text-sm text-amber-900/70">
                      Atau hubungi langsung via WhatsApp:{" "}
                      <a href="https://wa.me/6285808794964" target="_blank" rel="noopener noreferrer" className="font-medium text-amber-900 hover:underline">
                        085808794964
                      </a>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Detail Paket */}
      <Dialog open={selectedPackage !== null} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPackage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                  {selectedPackage.name}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedPackage.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                {/* Gambar Paket */}
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={selectedPackage.image}
                    alt={selectedPackage.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Informasi Lokasi & Rating */}
                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-amber-700" />
                    <span className="font-medium text-amber-900">{selectedPackage.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-amber-200">
                    <Star className="size-4 fill-amber-600 text-amber-600" />
                    <span className="text-sm font-semibold text-amber-900">
                      {selectedPackage.rating}
                    </span>
                    <span className="text-sm text-amber-700">({selectedPackage.reviews} ulasan)</span>
                  </div>
                </div>

                {/* Fasilitas yang Termasuk */}
                <div>
                  <h4 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-amber-600" />
                    Fasilitas yang Termasuk:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedPackage.services.map((service, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <CheckCircle2 className="size-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-amber-900">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rincian Harga */}
                <div className="p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-3">Rincian Harga:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-amber-900/70">Biaya Paket</span>
                      <span className="font-medium text-amber-900">{selectedPackage.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-amber-900/70">PPN 11%</span>
                      <span className="font-medium text-amber-900">Termasuk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-amber-900/70">Biaya Koordinasi</span>
                      <span className="font-medium text-amber-900">Gratis</span>
                    </div>
                    <div className="border-t border-amber-300 pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-amber-900">Total Harga</span>
                        <span className="font-bold text-xl bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
                          {selectedPackage.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informasi Kontak */}
                <div className="p-4 bg-white border-2 border-amber-200 rounded-xl">
                  <h4 className="font-semibold text-amber-900 mb-3">Informasi Kontak:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="size-4 text-amber-700" />
                      <span className="text-amber-900">WhatsApp: 085808794964</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="size-4 text-amber-700" />
                      <span className="text-amber-900">Email: info@vendo.id</span>
                    </div>
                  </div>
                </div>

                {/* Tombol Aksi */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-amber-300 text-amber-900 hover:bg-amber-50"
                    onClick={() => setSelectedPackage(null)}
                  >
                    Tutup
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg"
                    onClick={() => {
                      const message = `Halo vendo.id, saya tertarik dengan ${selectedPackage.name} (${selectedPackage.price}). Mohon informasi lebih lanjut.`;
                      window.open(`https://wa.me/6285808794964?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    <MessageCircle className="mr-2" />
                    Pesan Sekarang
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer id="contact" className="border-t border-amber-200 py-16 bg-gradient-to-b from-amber-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyYWluMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjNzgzNTBGIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWluMikiLz48L3N2Zz4=')]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-9 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="size-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">vendo.id</span>
              </div>
              <p className="text-sm text-amber-900/70 leading-relaxed">
                Platform paket event terlengkap untuk mewujudkan acara impian Anda.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-[#1A5F7A]">Kategori Paket</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#paket" className="text-[#374151] hover:text-[#1A5F7A] transition-colors">Paket Pernikahan</a></li>
                <li><a href="#paket" className="text-[#374151] hover:text-[#1A5F7A] transition-colors">Paket Ulang Tahun</a></li>
                <li><a href="#paket" className="text-[#374151] hover:text-[#1A5F7A] transition-colors">Paket Acara Kantor</a></li>
                <li><a href="#paket" className="text-[#374151] hover:text-[#1A5F7A] transition-colors">Paket Wisuda</a></li>
              </ul>
            </div>

            <FooterLinks />

            <div>
              <h4 className="mb-4 font-semibold text-[#1A5F7A]">Bantuan</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Dialog>
                    <DialogTrigger className="text-[#374151] hover:text-[#1A5F7A] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer">
                      FAQ
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                          Pertanyaan yang Sering Diajukan (FAQ)
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Bagaimana cara memesan paket event?</h4>
                          <p className="text-sm text-amber-900/70">Anda bisa memilih paket yang sesuai, klik "Lihat Detail", lalu hubungi kami via WhatsApp untuk konsultasi lebih lanjut.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Apakah bisa kustomisasi paket?</h4>
                          <p className="text-sm text-amber-900/70">Tentu! Semua paket bisa disesuaikan dengan kebutuhan dan budget Anda. Hubungi kami untuk diskusi detail.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Berapa lama waktu persiapan minimal?</h4>
                          <p className="text-sm text-amber-900/70">Kami merekomendasikan minimal 1 bulan sebelum hari H untuk persiapan optimal, namun kami juga bisa membantu untuk waktu yang lebih singkat.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Apakah ada uang muka (DP)?</h4>
                          <p className="text-sm text-amber-900/70">Ya, biasanya DP 30-50% dari total paket untuk mengamankan tanggal acara Anda.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Bagaimana jika ingin membatalkan pesanan?</h4>
                          <p className="text-sm text-amber-900/70">Kebijakan pembatalan tercantum dalam kontrak. Hubungi kami untuk informasi detail mengenai hal ini.</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger className="text-[#374151] hover:text-[#1A5F7A] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer">
                      Kebijakan Privasi
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                          Kebijakan Privasi
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4 text-sm text-amber-900/70">
                        <p>vendo.id berkomitmen melindungi privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.</p>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Informasi yang Kami Kumpulkan</h4>
                          <p>Kami mengumpulkan informasi yang Anda berikan saat mendaftar, memesan paket, atau menghubungi kami, termasuk nama, email, nomor telepon, dan detail acara.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Penggunaan Informasi</h4>
                          <p>Informasi Anda digunakan untuk memproses pesanan, berkomunikasi dengan Anda, meningkatkan layanan kami, dan mengirimkan informasi relevan tentang paket event.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Keamanan Data</h4>
                          <p>Kami menggunakan langkah-langkah keamanan yang sesuai untuk melindungi informasi Anda dari akses, pengungkapan, atau penggunaan yang tidak sah.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">Hak Anda</h4>
                          <p>Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda kapan saja dengan menghubungi kami.</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger className="text-[#374151] hover:text-[#1A5F7A] transition-colors text-left bg-transparent border-0 p-0 cursor-pointer">
                      Syarat & Ketentuan
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                          Syarat & Ketentuan
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4 text-sm text-amber-900/70">
                        <p>Dengan menggunakan layanan vendo.id, Anda menyetujui syarat dan ketentuan berikut:</p>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">1. Pemesanan Paket</h4>
                          <p>Pemesanan dianggap sah setelah pembayaran uang muka (DP) diterima dan konfirmasi pemesanan dikirimkan.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">2. Pembayaran</h4>
                          <p>Pembayaran dapat dilakukan melalui transfer bank atau metode pembayaran lain yang disepakati. Pelunasan harus dilakukan maksimal 7 hari sebelum acara.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">3. Pembatalan</h4>
                          <p>Pembatalan dapat dilakukan dengan menghubungi kami. Pengembalian dana akan disesuaikan dengan kebijakan yang berlaku dan waktu pembatalan.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">4. Perubahan Paket</h4>
                          <p>Perubahan detail paket dapat dilakukan maksimal 14 hari sebelum acara, tergantung ketersediaan vendor.</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">5. Force Majeure</h4>
                          <p>vendo.id tidak bertanggung jawab atas kegagalan pelaksanaan acara yang disebabkan oleh keadaan di luar kendali (bencana alam, pandemi, dll).</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-amber-900 mb-2">6. Kontak</h4>
                          <p>Untuk pertanyaan lebih lanjut, hubungi kami di WhatsApp: 085808794964</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>
                  <a
                    href="https://wa.me/6285808794964?text=Halo%20vendo.id,%20saya%20butuh%20bantuan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#374151] hover:text-[#1A5F7A] transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-200 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500">&copy; 2026 vendo.id - Vendor Rental System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
