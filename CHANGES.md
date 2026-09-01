# تغییرات اعمال شده - 2026-08-31

## ✅ بنر Hero
- بنر اصلی از `LabelhookSocialmedia` به `public/hero-banner.webp` کپی شد
- در بخش Hero صفحه اصلی نمایش داده می‌شود
- تصویر ماسکوت و پیام "پس قلابت رو بنداز و برندت رو قبل از دیگران صید کن!" نمایش داده می‌شود

## ✅ لینک‌های شبکه‌های اجتماعی (@labelhook)

### Header (هدر)
- ✅ آیکون Instagram با لینک به `https://instagram.com/labelhook`
- ✅ آیکون Telegram با لینک به `https://t.me/labelhook`
- ✅ دکمه "شروع کنید" به کانال تلگرام لینک شده
- ✅ منوی موبایل شامل هر دو لینک شبکه اجتماعی + نمایش `@labelhook`

### Footer (فوتر)
- ✅ **بخش CTA ویژه تلگرام** در بالای فوتر (gradient بنفش):
  - عنوان: "برای خرید یا رزرو برند، با ما در تماس باشید"
  - توضیحات: "سوالی دارید؟ می‌خواهید مشاوره رایگان بگیرید؟ از طریق تلگرام پاسخگوی شما هستیم"
  - دکمه بزرگ با آیکون تلگرام: "ارتباط در تلگرام"
  - پس‌زمینه gradient purple to indigo
  - hover effects + scale animation
- ✅ بخش اصلی فوتر (dark theme):
  - دکمه‌های شبکه اجتماعی با آیکون Instagram + Telegram
  - لیست لینک‌های محصولات (amlaker, horarai, arangai)
  - بخش "ارتباط با ما" با لینک‌های تلگرام و اینستاگرام

### صفحات محصول (Product Detail Pages)
تمام دکمه‌های CTA به کانال تلگرام لینک شده‌اند:

1. **ProductHero (بالای صفحه)**:
   - "این برند را می‌خواهم" → `https://t.me/labelhook`
   - "درخواست اطلاعات بیشتر" → `https://t.me/labelhook`

2. **OpportunityCTA (بنر میانی)**:
   - "این برند را می‌خواهم" → `https://t.me/labelhook`
   - "دریافت مشاوره" → `https://t.me/labelhook`

3. **StickyMobileCTA (دکمه شناور موبایل)**:
   - "این برند را می‌خواهم" → `https://t.me/labelhook`

## 🎨 طراحی و UX

### آیکون‌های شبکه اجتماعی
- Instagram: hover effect صورتی (#e91e63)
- Telegram: hover effect آبی (#0088cc)
- SVG inline (بدون وابستگی خارجی)

### CTA Section فوتر
- Gradient بنفش تا ایندیگو
- دکمه سفید با shadow و scale animation
- آیکون تلگرام inline
- Responsive (mobile + desktop)

### تمام لینک‌ها
- `target="_blank"` برای باز شدن در تب جدید
- `rel="noopener noreferrer"` برای امنیت
- `aria-label` برای دسترسی‌پذیری

## 📱 تست کنید

1. **صفحه اصلی**: بنر hero + آیکون‌های social در header
2. **Footer**: بخش CTA تلگرام + لینک‌های اجتماعی
3. **صفحه محصول**: تمام دکمه‌های CTA به تلگرام لینک شده‌اند
4. **Mobile**: منوی hamburger شامل social links

## مسیرهای تست:
```
http://localhost:5173/                    # صفحه اصلی
http://localhost:5173/brand/horarai       # صفحه محصول نمونه
```

همه تغییرات commit-ready هستند! 🚀
