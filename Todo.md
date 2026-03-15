Architectura qanday ketma-ketlikda quriladi (Roadmap)

1. Environment & API Base Setup
 Terminal orqali shared/util-env kutubxonasini yarating (nx g lib shared-util-env).
 Uning ichida API_URL nomli InjectionToken yarating.
 Shuningdek, environment.interface.ts yaratib, unda qanday ma'lumotlar saqlanishi kerakligini yozing (masalan: apiUrl, production, availableLangs va h.k).

apps/admin/src/app/app.config.ts
 ga borib, siz yasagan tokenni o'sha yerdan Provide qilib, Local API url (masalan http://localhost:3000/api) ni bering.
2. Global Error Handling & Notifications (PrimeNG)
 shared/util-notifications kutubxonasini yarating.
 Ichida bitta AppNotificationService yarating va u orqali PrimeNG ning MessageService ni inject (u)lab, o'zingizning showError, showSuccess funksiyalaringizni yozing (yoki yoping).
 shared/data-access-api (yoki HTTP) kutubxonasini yarating.
 Shu library ichida Global Error Interceptor yozing. U backenddan kelayotgan (HttpErrorResponse) xatoliklarni ushlab olib, o'sha siz yasagan AppNotificationService orqali toast'ga chiqarsin.
 Yozgan Interceptoringizni Admin ilovasining app.config.ts idagi provideHttpClient(...) ichiga qo'shib ro'yxatdan o'tkazing.
3. i18n (Transloco) Tayyorgarligi
 shared/util-i18n kutubxonasini yarating.
 Loyiha assets/i18n papkasida 4 ta til uchun (uz.json, ru.json, kaa.json, en.json) bo'sh fayllarini yoki test uchun bittadan so'z joylab tayyorlab qo'ying.
 util-i18n ichida Transloco'ning HTTP Loader'ini o'sha json fayllarni o'qiydigan qilib sozlang va kerakli provide'larni bitta Base funksiya (yoki ob'yekt) qilib eksport qiling.
 Admin app ga ularni ulang va birorta komponentda tarjimani ishlating <p>{{ 'HELLO' | transloco }}</p>.
4. Shared Authentication Logic (Tokenlarni boshqarish)
 shared/data-access-auth kutubxonasini yarating.
 Ichida TokenService yoki StorageService yarating (Backenddan kelgan Access/Refresh tokenlarni LocalStorage ga saqlaydigan va undan o'qiydigan kod yozing).
 Shuningdek, Auth Interceptor (Token Interceptor) yarating. U har bir API so'rovining Header qismiga Authorization: Bearer <token> ni qistirib yuborishi kerak (agar token mavjud bo'lsa).
 Auth Guard ham yarating (token bo'lmasa foydalanuvchini Login pagedan o'tkazmaydigan qorovul funksiya).
5. API ulanishi (Admin Auth)
 Biz boya ko'chirgan modulingiz (admin/auth-data) ga kiring.
 Swagger ga qarab, UserDto, LoginRequestDto, LoginResponseDto larini bitta alohida faylda yarating (aytaylik models/auth.models.ts).
 Endi haqiqiy AdminAuthService ni yarating: u faqat /api/v1/auth/login (yoki shunga o'xshash Admin yo'l) ga http POST so'rovini yuborsin.
 Login qilinganda muvaffaqiyatli Response kelsa, tokenni olib TokenService ga saqlang. Muvaffaqiyatsiz bo'lsa xavotir olmang, bizning Global Error Interceptoringiz o'zi toast chiqarib beradi.
 Nihoyat, Admin login interface'sini (UI) shu servisga bog'lab, loginni sinab ko'ring!
Keyingi qadamlar (To-Do)
Bular to'liq ishlaganidan so'ng, faqat Student ilovasini va uning API'larini tayyorlash biroz vaqtni oladi holos, mexanizm esa ajoyib soat kabi har bir ilova uchun bir xil ishlab beradi.