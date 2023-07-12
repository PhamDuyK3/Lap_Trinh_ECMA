const Navagation = function () {
    return /*html*/`
    <div class="pl-28 ">
        <h3 class="text-[13px font-[400] ">Danh Mục Sản Phẩm</h3>
        <a href="" class="block text-[12px] font-[400] mt-3 mb-2">English Books</a>
        <a href="" class="block text-[12px] font-[400] mb-2">Sách tiếng Việt</a>
        <a href="" class="block text-[12px] font-[400] mb-2">Văn phòng phẩm</a>
        <a href="" class="block text-[12px] font-[400]">Quà lưu niệm</a>
        </div>
        <div class="w-[927px]" >
        <h2 class="text-[32px] font-[400]">Nhà Sách Tiki</h2>
        <img class="w-[857px]" srcset="/sach.png" alt="">
        <div class="mt-4  border-b-2">
            <ul class="flex gap-12 mb-4 ml-6">
                <li><a href="">Phổ biến</a></li>
                <li><a href="">Bán chạy</a></li>
                <li><a href="">Hàng mới</a></li>
                <li><a href="">Giá thấp</a></li>
                <li><a href="">Giá cao</a></li>
            </ul>
        </div>
        <div class="flex gap-4 mt-5 mb-5">
                    <p class="w-[80px] bg-[#EEEEEE] rounded-[100px]">
                        <img class="pl-3"  srcset="/tikinow2.png" alt="">
                    </p>
                    <p class="w-[100px] bg-[#EEEEEE] rounded-[100px]">
                        <img class="pl-3" srcset="/freeship.png" alt="">
                    </p>
                </div>
    `
}

export default Navagation;