# Architectura qurish ketma-ketligi (Roadmap)

Ushbu ro'yxat loyihani professional darajada, bosqichma-bosqich qurish uchun mo'ljallangan.

1. Environment & API Base Setup (Bajarildi)
   - shared/util-env kutubxonasini yaratish. (Bajarildi)
   - API_URL InjectionToken-ni yaratish. (Bajarildi)
   - environment.interface.ts-ni shakllantirish. (Bajarildi)
   - Admin ilovasida tokenni Provide qilish va API URL-ni berish. (Bajarildi)

2. Global Error Handling & Notifications (Bajarildi)
   - shared/util-notifications kutubxonasini yaratish. (Bajarildi)
   - AppNotificationService-ni PrimeNG MessageService bilan yaratish. (Bajarildi)

3. i18n (Transloco) Markazlashtirish (Bajarildi)
   - shared/i18n kutubxonasini yaratish. (Bajarildi)
   - Transloco-ni Admin ilovasiga o'rnatish (ng-add). (Bajarildi)
   - TranslocoHttpLoader-ni shared/i18n kutubxonasiga ko'chirish va export qilish. (Bajarildi)
   - Tarjima (JSON) fayllarini apps/admin/public/i18n papkasiga to'g'ri joylashtirish. (Bajarildi)
   - Admin ilovasida shared loader-dan foydalanishni sozlash. (Bajarildi)
   - Komponentlarda tarjima ishlashini test qilish. (Bajarildi)

4. Global Error Interceptor & API Data Access (Hozirgi bosqich)
   - shared/data-access-api (yoki HTTP) kutubxonasini yaratish.
   - Global Error Interceptor yozish (HttpErrorResponse xatolarini ushlash uchun).
   - Interceptorni Admin ilovasida ro'yxatdan o'tkazish.

5. Shared Authentication Logic (Token boshqaruvi)
   - shared/data-access-auth kutubxonasini yaratish.
   - TokenService (LocalStorage bilan ishlash) yaratish.
   - Auth Interceptor (Bearer token qo'shish) yaratish.
   - Auth Guard (Sahifalarni himoya qilish) yaratish.

6. API Integratsiyasi (Admin Auth)
   - admin/auth-data modulida DTO modellarni yaratish.
   - AdminAuthService (Login/Logout API) yaratish.
   - Login muvaffaqiyatli bo'lsa, tokenni saqlash mexanizmini ulash.
   - Admin UI (Login sahifasi)ni servisga bog'lash.

7. Yakuniy sozlashlar
   - Barcha ilovalar uchun umumiy Tailwind va PrimeNG mavzularini tekshirish.
   - Loyihani test qilish va xatolarni tuzatish.