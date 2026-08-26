# Pontech Learning Hub

Website tĩnh, không cần cài đặt hoặc build.

## Chạy thử

Mở `index.html` trực tiếp hoặc chạy bằng một web server tĩnh.

## Deploy bằng GitHub Pages

1. Upload toàn bộ nội dung thư mục này lên repository GitHub.
2. Mở **Settings → Pages**.
3. Chọn **Deploy from a branch**, branch `main`, thư mục `/ (root)`.
4. Lưu và chờ GitHub cung cấp đường dẫn website.

## Thay nội dung khóa học

Mở `app.js` và chỉnh mảng `courses` ở đầu file. Mỗi khóa học gồm:

- Thông tin tổng quan, trình độ, điều kiện đầu vào và kết quả đầu ra.
- `x`, `y`: vị trí node trên bản đồ tính theo phần trăm.
- `next`: danh sách ID của các kỹ năng tiếp theo.
- `chapters`: danh sách chương và bài học.
- `video`: URL video MP4/WebM hoặc đường dẫn tương đối, ví dụ `videos/bim-01.mp4`.
- `resources`: tên, mô tả và URL tài liệu tải xuống.

Ví dụ video và tài liệu đặt trong repository:

```js
{
  title: "BIM là gì?",
  duration: "05:02",
  video: "videos/bim-foundation/01-bim-la-gi.mp4",
  resources: [
    { name: "BEP_Template.pdf", meta: "PDF · 1.2 MB", url: "documents/BEP_Template.pdf" }
  ]
}
```

> GitHub thường giới hạn mỗi file trong repository ở 100 MB. Với thư viện video lớn, nên dùng dịch vụ lưu video riêng và gắn URL vào `app.js`.

## Tiến độ học tập

Tiến độ hiện được lưu bằng `localStorage`, chỉ tồn tại trên trình duyệt và thiết bị đang sử dụng. Khi cần tài khoản, upload quản trị hoặc đồng bộ tiến độ nhiều thiết bị, website sẽ cần thêm backend.
