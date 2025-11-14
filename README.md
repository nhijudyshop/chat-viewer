# ChatOmni Viewer - Hướng dẫn sử dụng

## 📋 Tổng quan
Web app để xem và quản lý tin nhắn chat từ hệ thống ChatOmni của TPOS.

## 🏭 Production Build (MỚI)

### Những thay đổi cho Production

**Trước đây (Development Mode):**
- ❌ Tailwind CSS qua CDN (không dùng cho production)
- ❌ Babel chạy trên trình duyệt (chậm, không tối ưu)
- ❌ Thiếu favicon (lỗi 404)
- ❌ CSP violations cho source maps

**Bây giờ (Production Mode):**
- ✅ Tailwind CSS được compile sẵn với PostCSS
- ✅ JSX/React được biên dịch trước với Babel
- ✅ CSS và JavaScript đã được minify
- ✅ Đã thêm favicon
- ✅ Tối ưu hóa cho production

### Build Production

Để build ứng dụng cho production:

```bash
# Cài đặt dependencies (bao gồm cả devDependencies)
npm install

# Build production
npm run build
```

Lệnh này sẽ:
1. Compile Tailwind CSS từ `src/styles.css` → `dist/styles.css` (minified)
2. Biên dịch JSX từ `src/app.jsx` → `dist/app.js` với Babel
3. Minify JavaScript → `dist/app.min.js` với Terser
4. Tạo file `index.html` production

### Chạy Production

```bash
npm start
# Server tự động dùng bản production nếu đã build
```

### Development với Watch Mode

Khi đang phát triển, chạy các lệnh sau trong terminal riêng để tự động rebuild khi có thay đổi:

```bash
# Watch CSS changes
npm run watch:css

# Watch JS changes
npm run watch:js
```

### Cấu trúc thư mục

```
chat-viewer/
├── src/
│   ├── app.jsx          # Source code React
│   └── styles.css       # Tailwind CSS input
├── dist/                # Build output (gitignored)
│   ├── styles.css       # CSS đã compile
│   ├── app.js           # JavaScript đã compile
│   └── app.min.js       # JavaScript đã minify
├── public/
│   └── favicon.svg      # Icon ứng dụng
├── chat-viewer.html     # Development HTML (dùng CDN)
├── index.html           # Production HTML (tự động tạo)
└── server.js            # Express server
```

## 🚀 Cách chạy (npm)

### Bước 1: Cài đặt Node.js
Tải và cài đặt Node.js từ: https://nodejs.org/ (khuyến nghị LTS)

Kiểm tra đã cài thành công:
```bash
node --version
npm --version
```

### Bước 2: Cài đặt dependencies
Mở Terminal/Command Prompt trong thư mục project và chạy:

```bash
npm install
```

### Bước 3: Khởi động server
```bash
npm start
```

Bạn sẽ thấy:
```
✨ ChatOmni Viewer - Server Started
🚀 Server running at: http://localhost:8080
```

### Bước 4: Mở trình duyệt
Truy cập: **http://localhost:8080** hoặc **http://localhost:8080/chat-viewer.html**

### Bước 5: Đăng nhập

Bạn có **2 cách đăng nhập**:

#### Cách 1: Username & Password (Khuyến nghị) 🔥
1. Chọn tab "Username/Password"
2. Nhập username (vd: nv20)
3. Nhập password
4. Click "Đăng nhập"
→ Hệ thống tự động lấy token

#### Cách 2: Paste Token (Backup)
1. Chọn tab "Token"
2. Lấy Bearer token từ trang TPOS (xem hướng dẫn bên dưới)
3. Paste vào ô
4. Click "Đăng nhập"

## 🔑 Cách lấy Bearer Token

1. Đăng nhập vào https://tomato.tpos.vn/tpagev2/
2. Mở Developer Tools (F12)
3. Vào tab **Network**
4. Reload trang
5. Tìm request bất kỳ gửi đến tomato.tpos.vn
6. Xem header **Authorization**, copy phần sau "Bearer "

## ✨ Tính năng

- ✅ **Login thông minh**: Username/Password hoặc Token
- ✅ **Avatar từ Facebook** - Hiển thị ảnh đại diện thật
- ✅ Xem danh sách cuộc hội thoại
- ✅ Đọc tin nhắn (text + ảnh)
- ✅ Hiển thị số tin nhắn chưa đọc
- ✅ Thông tin khách hàng (tên, SĐT, trạng thái)
- ✅ Thời gian tin nhắn (tương đối)
- ✅ **Dual WebSocket System** 🔥
  - Chat WebSocket: Tin nhắn đến ngay lập tức
  - RT WebSocket: Thông báo & cập nhật hệ thống
- ✅ **Auto-refresh polling** (mặc định OFF, bật khi cần)
- ✅ **Triple-redundancy**: 2 WebSockets + Polling = Always works!
- ✅ Status indicators: 🟢 Chat | 🟢 RT | ⚡ Realtime

## ⚠️ Lưu ý

- **Token sẽ hết hạn** sau một thời gian, cần lấy token mới
- Server chỉ chạy trên máy local (localhost)
- **KHÔNG chia sẻ token** với người khác

## 🛠 Khắc phục sự cố

### Lỗi: "npm: command not found" hoặc "node: command not found"
→ Cài đặt Node.js từ https://nodejs.org/

### Lỗi: "Cannot find module 'express'"
→ Chạy: `npm install`

### Lỗi: "Port 8080 already in use"
→ Đổi PORT: `PORT=3000 npm start` (Mac/Linux) hoặc `set PORT=3000 && npm start` (Windows)

### Lỗi: "Failed to fetch"
→ Kiểm tra:
1. Server có đang chạy? (chạy `npm start`)
2. Truy cập đúng http://localhost:8080?
3. Token có đúng không?

### Lỗi khi npm install
→ Thử:
```bash
npm cache clean --force
npm install
```

## 📞 Hỗ trợ

Nếu gặp vấn đề, kiểm tra:
1. Console của trình duyệt (F12 > Console)
2. Terminal chạy proxy server (xem log requests)

---

**Chúc bạn sử dụng hiệu quả!** 🎉
