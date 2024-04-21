# **CHÚ Ý ĐỌC VÀ LÀM CHÍNH XÁC THEO HƯỚNG DẪN TRƯỚC KHI THỰC HIỆN BẤT KÌ MỘT HÀNH ĐỘNG NÀO TRÊN GIT**

## I. Thực hiện clone repository

- Chọn 1 folder rỗng chuột phải chọn gitbash để clone git repository về máy với dòng lệnh bên dưới

```
git clone https://github.com/nguyendat6625/CreativeWebTeamwork.git
```

**LƯU Ý:** Nếu chưa sử dụng Gitbash trên máy bao giờ, Gitbash lúc này sẽ yêu cầu đăng nhập vào tài khoản git. Bắt buộc phải sử dụng tài khoản git gắn với gmail sinh viên được nhà trường cấp

## II. Thực hiện tạo nhánh cho cá nhân

- Sau khi clone repository về máy thành công tiến hành tạo **NHÁNH CHÍNH** theo **ĐÚNG** format: `<ROOT_họ_và_tên>`. Format phải **CHÍNH XÁC** giống như sau: `ROOT_Ngo_Quang_Dai`
- Sử dụng lệnh sau để tạo nhánh:

```
git checkout -b ROOT_Ngo_Quang_Dai
```
- Sau khi tạo nhánh chính, tạo thêm file **ho_va_ten.txt** (Ví dụ: Ngo_Quang_Dai.txt) vào thư mục để bắt đầu thực hiện commit đầu tiên
- Sau khi thêm file bắt đầu thực hiện commit đầu tiên cho **NHÁNH CHÍNH**:

```
git add .
git commit -m "first commit"

```

- Push **NHÁNH CHÍNH** lên remote repository với câu lệnh push origin kèm theo tên nhánh muốn push:

```
git push origin ROOT_Ngo_Quang_Dai
```
## Hướng dẫn làm việc nhóm trên dự án Website

### I. Tạo nhánh mới và thực hiện công việc

1. **Tạo nhánh mới**: Sử dụng lệnh sau để tạo nhánh mới từ nhánh chính theo format: `<họ_và_tên_msv/cong-viec>`:

    ```bash
    git checkout -b Ngo_Quang_Dai_1122334455/website-feature
    ```

2. **Tạo folder công việc**: Tạo một thư mục mới chứa tên công việc bạn đang thực hiện trên nhánh này.

3. **Thực hiện công việc**: Làm công việc của bạn trên nhánh của bạn. Sau khi hoàn thành mỗi phần công việc, thêm các thay đổi, commit và push lên nhánh của bạn:

    ```bash
    git add .
    git commit -m "Hoàn thành phần công việc mới"
    git push origin Ngo_Quang_Dai_1122334455/website-feature
    ```

### II. Tạo pull request vào nhánh chính

1. **Tạo Pull Request**: Truy cập GitHub và tạo Pull Request từ nhánh của bạn vào nhánh chính. Ghi rõ nội dung của Pull Request.

### III. Cập nhập công việc từ git

1. **Cập nhập công việc**: Mỗi khi có công việc mới, hãy chuyển về nhánh chính của bạn và pull các thay đổi từ nhánh chính:

    ```bash
    git checkout Ngo_Quang_Dai_1122334455
    git pull origin main
    ```

2. **Thực hiện công việc mới**: Sau khi cập nhập thành công, làm công việc mới bằng cách thực hiện lại các bước từ **I. Tạo nhánh mới và thực hiện công việc**.

### IV. Lưu ý quan trọng

- **Kiểm tra nhánh**: Luôn chắc chắn rằng bạn đang làm việc trên nhánh của mình và không thực hiện pull request vào nhánh chính hoặc nhánh của thành viên khác.
- **Tuân thủ format**: Đặt tên nhánh và thư mục theo đúng format quy định để tránh vi phạm và làm rối mắt đồng nghiệp.
- **Hoàn thành đúng hạn**: Luôn hoàn thành công việc đúng hạn để tránh bị trừ điểm.
- **Hỏi khi cần thiết**: Nếu gặp bất kỳ vấn đề nào liên quan đến git hoặc công việc, hãy đặt câu hỏi để được giúp đỡ.

Hãy tuân thủ các hướng dẫn trên để thực hiện công việc nhóm hiệu quả và đạt được kết quả tốt nhất trên dự án Website chung.
# CreativeWebTeamwork
CreativeWebTeamwork là nơi quy tụ các nhà phát triển và thiết kế web, hợp tác để xây dựng những trang web độc đáo và sáng tạo. Chúng tôi tập trung vào việc làm việc nhóm hiệu quả và phát triển website đẹp mắt, đáp ứng nhu cầu của khách hàng. Hãy tham gia cùng chúng tôi để chia sẻ ý tưởng và cống hiến cho dự án!
