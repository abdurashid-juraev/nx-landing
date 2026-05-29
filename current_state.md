# Project Handoff: Signal-Based Angular Authentication

Ushbu hujjat uydagi ish holatini saqlash va ishxonadagi boshqa kompyuterda (masalan, Windows) ishni aynan to'xtagan joydan tezda davom ettirish uchun tayyorlandi.

---

## 💻 Loyihaning Umumiy Arxitekturasi
- **Texnologiyalar:** Angular 21 (Signals, standalone components, `inject()` patterns), RxJS.
- **Monorepo:** Nx Workspace.
- **Kutubxonalar (Libs):**
  - `@org/data-access-auth` (Admin auth xizmatlari va modellari): `libs/admin/auth-data/src/lib/auth.service.ts`
  - `@nx-landing/admin/feature-auth` (Login UI qatlami): `libs/admin/feature-auth/src/lib/feature-auth/`

---

## 📌 Hozirgi Holat (Current State)

### 1. `AuthService` (Bajarilgan ✅)
- `libs/admin/auth-data/src/lib/auth.service.ts` faylida Signals-ga asoslangan to'liq autentifikatsiya xizmati yozilgan:
  - `currentUser = signal<User | null>(null)`
  - `isLoading = signal<boolean>(false)`
  - `error = signal<string | null>(null)`
  - `isAuthenticated = computed(...)` token holatiga qarab avtomatik yangilanadi.
  - `login()` va `logout()` metodlari tayyor.

### 2. `FeatureAuth` UI Komponenti (Qisman Bajarilgan ⚠️)
- `libs/admin/feature-auth/src/lib/feature-auth/feature-auth.ts` faylida reactive formalar sozlangan:
  - `loginForm` (`username` va `password` validatsiyalari bilan) tayyorlangan.
  - `AuthService`, `Router` va `FormBuilder` `inject()` orqali kiritilgan.
- **Fayllar holati:**
  - `feature-auth.ts` -> Component klassi yozilgan.
  - `feature-auth.html` -> Hali dizayn qo'shilmagan (standart `<p>FeatureAuth works!</p>` holatida).

---

## 🎯 Navbatdagi Qadamlar (Next Steps)

1. **Login Interfeysini Yaratish (`feature-auth.html`):**
   - HTML-da login formani loyihalash (`username` va `password` field-lari bilan).
   - Formani komponentdagi `loginForm` bilan bog'lash (`[formGroup]="loginForm"`).
   - Signal-based error va loading holatlarini ko'rsatish (`authService.isLoading()` va `authService.error()`).

2. **Submit Funksiyasini Bog'lash:**
   - `feature-auth.ts` komponentida `onSubmit()` metodini yozish va unda `authService.login(this.loginForm.value)`ni chaqirish hamda muvaffaqiyatli kirganda dashboard sahifasiga yo'naltirish.

3. **Styling & Polishing:**
   - `feature-auth.css` fayliga zamonaviy, premium ko'rinish beruvchi Tailwind yoki custom CSS styling qo'shish.

---

> [!NOTE]
> **AI uchun ko'rsatma:** Yangi chatni boshlaganingizda ushbu faylni va `libs/admin/feature-auth/src/lib/feature-auth/` fayllarini o'qing, keyin to'g'ridan-to'g'ri **1-qadam (Login Interfeysini Yaratish)** dan ishni davom ettiring.
