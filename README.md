# ToolGIS — Thư viện 120 bài toán GIS cốt lõi

ToolGIS là thư viện tra cứu bằng tiếng Việt, tổ chức **120 bài toán GIS thực tiễn** theo **10 tầng chức năng**. Mỗi bài toán có tình huống cụ thể, dữ liệu đầu vào, quy trình, công cụ tương ứng trong QGIS/QGIS Plugins, Google Maps Platform/Google Earth Engine và hệ sinh thái ArcGIS, đầu ra mong đợi và liên kết tham khảo.

## 10 tầng

1. Bản đồ & trực quan hóa
2. Places · Search · Geocoding
3. Quản lý & liên thông dữ liệu
4. Vector & Spatial Analysis
5. Network Analyst & Accessibility
6. Raster · DEM · Remote Sensing
7. 3D · Terrain · Reality GIS
8. Temporal · IoT · Realtime GIS
9. Spatial Statistics · Location Intelligence
10. GeoAI · Automation · Decision Support

## Tính năng trang thư viện

- Tìm kiếm toàn văn 120 bài toán.
- Lọc theo tầng, hệ sinh thái và từ khóa.
- Thẻ bài toán có mô tả ngắn, ví dụ và công cụ.
- Popup chi tiết trình bày: mục tiêu, dữ liệu vào, cách làm, QGIS, Google, ArcGIS, đầu ra, ví dụ tham chiếu và link.
- Không phụ thuộc framework/build tool; chạy trực tiếp bằng GitHub Pages.
- Responsive cho desktop/mobile.

## Chạy cục bộ

Mở `index.html` hoặc dùng một static server:

```bash
python -m http.server 8000
```

Sau đó mở http://localhost:8000

## GitHub Pages

Repo có workflow `.github/workflows/pages.yml`. Trong **Settings → Pages**, chọn **Source: GitHub Actions** nếu Pages chưa được bật.

## Nguồn đối chiếu chính

- QGIS Plugins: https://plugins.qgis.org/plugins/
- QGIS Documentation: https://docs.qgis.org/
- Google Maps Platform: https://developers.google.com/maps/documentation
- Google Earth Engine: https://developers.google.com/earth-engine/
- ArcGIS Pro: https://pro.arcgis.com/
- ArcGIS Developers: https://developers.arcgis.com/

> ToolGIS là thư viện tham khảo học thuật/kỹ thuật. Tên API, hạn mức, giấy phép và tính khả dụng có thể thay đổi; luôn kiểm tra tài liệu gốc trước khi triển khai production.
