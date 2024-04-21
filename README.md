# **CHÚ Ý ĐỌC VÀ LÀM CHÍNH XÁC THEO HƯỚNG DẪN TRƯỚC KHI THỰC HIỆN BẤT KÌ MỘT HÀNH ĐỘNG NÀO TRÊN GIT**

## I. Thực hiện clone repository

- Chọn 1 folder rỗng chuột phải chọn gitbash để clone git repository về máy với dòng lệnh bên dưới

```
git clone https://github.com/tbtrung39/KHDL_K17A1_LAB.git
```

**LƯU Ý:** Nếu chưa sử dụng Gitbash trên máy bao giờ, Gitbash lúc này sẽ yêu cầu đăng nhập vào tài khoản git. Bắt buộc phải sử dụng tài khoản git gắn với gmail sinh viên được nhà trường cấp

## II. Thực hiện tạo nhánh cho cá nhân

- Sau khi clone repository về máy thành công tiến hành tạo **NHÁNH CHÍNH** theo **ĐÚNG** format: `<ROOT_lớp_họ_và_tên_msv>`. Format phải **CHÍNH XÁC** giống như sau: `ROOT_KHDL17A1HN_Ngo_Quang_Dai_1122334455`
- Sử dụng lệnh sau để tạo nhánh:

```
git checkout -b ROOT_KHDL17A1HN_Ngo_Quang_Dai_1122334455
```

**LƯU Ý:** Nhánh chính làm không chính xác sẽ bị xóa, nếu mất bài sinh viên tự chịu trách nhiệm

- Sau khi tạo nhánh chính, sinh viên tạo thêm file **ho_va_ten.txt** (Ví dụ: Ngo_Quang_Dai.txt) vào thư mục để bắt đầu thực hiện commit đầu tiên
- Sau khi thêm file bắt đầu thực hiện commit đầu tiên cho **NHÁNH CHÍNH**:

```
git add .
git commit -m "first commit"

```

- Push **NHÁNH CHÍNH** lên remote repository với câu lệnh push origin kèm theo tên nhánh muốn push:

```
git push origin ROOT_KHDL17A1HN_Ngo_Quang_Dai_1122334455
```

## III. Thực hiện làm các bài tập trong lab

- Tạo nhánh mới theo lab mà bạn đang làm từ nhánh chính theo **ĐÚNG** format: `<họ_và_tên_msv/lab-đang-thực-hiện>`. Format phải **CHÍNH XÁC** giống như sau: `Ngo_Quang_Dai_1122334455/lab01`
- Sử dụng lệnh sau để tạo nhánh:

```
git checkout -b Ngo_Quang_Dai_1122334455/lab01
```

- Sau khi tạo nhánh mới, tạo một folder chứa tên lab mình đang thực hiện ở nhánh này
- Làm các bài tập trên nhánh theo từng lab, `add` thay đổi, `commit` rồi push lên đúng nhánh đang thực hiện. Ví dụ:

```
git add .
git commit -m "thuc hanh lab01 da hoan thanh"
git push origin Ngo_Quang_Dai_1122334455/lab01
```

**LƯU Ý:** Kiểm tra kĩ nhánh hiện tại xem mình có đúng đang ở nhánh làm bài tập của mình không trước khi thực hiện. Nếu push trực tiếp vào nhánh **MAIN**, **NHÁNH CHÍNH** hoặc **NHÁNH CỦA SINH VIÊN KHÁC**, vi phạm sinh viên sẽ bị trừ điểm quá trình.
**LƯU Ý:** Mỗi lab yêu cầu sinh viên làm một nhánh riêng và push commit mỗi bài lab chính xác vào nhánh đó.

**LƯU Ý:** Checkout về **NHÁNH CHÍNH** rồi mới tạo nhánh làm bài tập mới

## IV. Tạo pull request gửi yêu cầu merge vào NHÁNH CHÍNH đã tạo ở trên

- Sau khi đã hoàn thành bài và commit đầy đủ lên nhánh lab của mình. Sinh viên truy cập github và tạo pull request vào **NHÁNH CHÍNH** của mình. Ghi rõ nội dung nộp bài Pull Request Title.

**LƯU Ý:** **KIỂM TRA KĨ TRƯỚC KHI THỰC HIỆN PULL REQUEST** Không tạo pull request vào **MAIN** hoặc bất kỳ **NHÁNH CỦA SINH VIÊN KHÁC**, chỉ pull request vào **NHÁNH CHÍNH** do mình tạo (ví dụ: ROOT_KHDL17A1HN_Ngo_Quang_Dai_1122334455) vi phạm sẽ bị trừ điểm quá trình

## V. Cập nhập bài tập trên git

- Mỗi buổi học thầy cô sẽ gửi bài lên git
- Sinh viên checkout lại về **NHÁNH CHÍNH** của bản thân và pull lại từ nhánh main để cập nhập bài học

```
git checkout ROOT_KHDL17A1HN_Ngo_Quang_Dai_1122334455
git pull origin main
```

- Sau khi đã pull về thành công, sinh viênlàm theo hướng dẫn ở phần **Thực hiện làm các bài tập trong lab** để thực hiện làm bài tập

## VI. Lưu ý trong quá trình thực hành

- **KHÔNG PULL REQUEST VÀO MAIN**
- **KHÔNG PULL REQUEST VÀO NHÁNH CỦA SINH VIÊN KHÁC**
- **KHÔNG PUSH LÊN NHÁNH MAIN**
- **KHÔNG PUSH TRỰC TIẾP LÊN NHÁNH CHÍNH CỦA BẢN THÂN**
- **ĐẶT TÊN NHÁNH THEO ĐÚNG FORMAT**
- **HOÀN THÀNH BÀI TẬP ĐÚNG HẠN**

- Có bất kì vấn đề gì liên quan đến git có thể nhắn tin hỏi lại thầy.
- Học thêm về git:
  - https://git-scm.com/book/en/v2
  - https://learngitbranching.js.org/?locale=vi

# CreativeWebTeamwork
CreativeWebTeamwork là nơi quy tụ các nhà phát triển và thiết kế web, hợp tác để xây dựng những trang web độc đáo và sáng tạo. Chúng tôi tập trung vào việc làm việc nhóm hiệu quả và phát triển website đẹp mắt, đáp ứng nhu cầu của khách hàng. Hãy tham gia cùng chúng tôi để chia sẻ ý tưởng và cống hiến cho dự án!
