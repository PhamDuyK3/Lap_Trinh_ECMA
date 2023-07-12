import footer from "../components/footer"
import Navagation from "../components/navigotion"
import HeardPage from "../components/heard"
import { useState,useEffect } from "../../lib"

function productsPage(id){
    const [data, setData] = useState([])
    const [book, setBook] = useState({})
    const param = new URLSearchParams(location.search)
    const id_cate=param.get('id_cate')
    useEffect(function() {
        fetch(`http://localhost:3000/books?categories.id=${id_cate}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            setData(data)
        });
    }, [])
    

    useEffect(function() {
        fetch(`http://localhost:3000/books/${id}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            setBook(data)
        });
    }, [])
    return `
    ${HeardPage()}
    <div class="max-w-[1222px] pt-9  mx-auto">
    <div class="flex gap-8">
        <div>
            <img class="w-[600px]" src="${book.images?.[0].base_url}" alt="">
            <div class="grid grid-cols-6 gap-2 pt-7">
                ${book.images?.map((Image)=>` <img class="w-[62px] h-[62px]" src="${Image.base_url}" alt="">`).join('')}
            </div>
        </div>
        <div>
            <div class="flex gap-2 pb-8"> 
            <p>Tác Giả : <a class="text-[#0D5CB6] text-[13px]" href="">Ca Tây</a></p>
            <p>Đứng thứ 13 trong : <a class="text-[#0D5CB6] text-[13px]" href="">Top 1000
            Sách tư duy - Kỹ năng sống
            bán chạy tháng này</a></p>
            </div>
            <h3 class="text-[32px] font-[400] pb-6">${book.name}</h3>
            <div class="flex gap-3 ">
            <span class="flex gap-1 ">
            <img class="w-4" src="/Vector.svg" alt="">
            <img class="w-4" src="/Vector.svg" alt="">
            <img class="w-4" src="/Vector.svg" alt="">
            <img class="w-4" src="/Vector.svg" alt="">
            <img class="w-4" src="/Vector.svg" alt="">
            </span>
                <span>
                    (Xem 2942 đánh giá)
                </span>
                <span>|</span>
                <span>Đã bán ${book.quantity_sold?.value}</span>
            </div>
            <div class="bg-[#FAFAFA] h-28 mt-7 ">
                <span class="text-[32px] text-[#FF424E] pr-2">${book.current_seller?.price} ₫</span>
                <span class="text-[#808089] text-[13px] pr-2">${book.list_price} ₫</span>
                <span class="rounded-[2px] bg-[#FFF0F1] border-solid border-2 border-[#FF424E] text-[#FF424E] w-[32px] text-[11px] pl-[2px]">-23%</span>
            </div>
            <div class="pl-5 mt-8">
                <span>Số Lượng</span>
                <div class="flex-nowrap">
                    <input class="minus is-form" type="button" value="-">
                    <input aria-label="quantity" class="w-16 text-center" max="10" min="1" name="" type="number" value="1">
                    <input class="plus is-form" type="button" value="+">
                  </div>
                <div class="mt-5">
                    <a href=""><button class="bg-[#FF3945] text-white rounded w-80 h-12">Chọn mua</button></a>
                </div>
            </div>
        </div>

    </div>
    <div>
        <h2 class="pt-14 pb-12 text-[20px] pl-4">Sản Phẩm Tương Tự</h2>
        <div class="grid grid-cols-6 gap-5">
        
        ${data.map(function(book, index) {
             if(index < 6){
                return /*html*/`
                <a href="/products-detail/${book.id}">
                    <div>
                        <img class="w-52 h-56" src="${book.images?.[0].medium_url}" alt="">
                        <img class="pt-3 pb-3" src="/tikinow2.png" alt="">
                        <p class="text-[#00AB56] text-[12px] pb-1">GIAO SIÊU TỐC 2H</p>
                        <p class="text-[13px] pb-2 font-[400]">${book.name} Do</p>
                    </div>
                    <div class="flex items-center">
                        <span class="flex gap-1 ">
                            <img class="w-4" src="/Vector.svg" alt="">
                            <img class="w-4" src="/Vector.svg" alt="">
                            <img class="w-4" src="/Vector.svg" alt="">
                            <img class="w-4" src="/Vector.svg" alt="">
                            <img class="w-4" src="/Vector.svg" alt="">
                        </span>
                        <span class="pl-2 pr-2 text-[#C7C7C7]" > | </span>
                        <span class="text-[10px] text-[#C7C7C7]">Đã bán 1000+</span>
                    </div>
                    <div class="flex gap-2 items-center mt-2">
                        <p class="text-[16px] text-[#FF424E] font-[500]">${book.current_seller.price} ₫</p>
                        <p class="rounded-[2px] bg-[#FFF0F1] border-solid border-2 border-[#FF424E] text-[#FF424E] w-[32px] text-[11px] pl-[2px]">-23%</p>
                    </div>
                </a>
                `
             } 
           
        }).join('')}
           </div>
    </div>
    <div class="mx-auto mt-1">
<h1 class="text-[20px] mt-10 leading-[32px] font-normal text-[#333333]">Thông tin chi tiết</h1>

<div class="flex w-[888px] h-[287px] rounded-[4px] mt-3">
    <div class="text-[13px] leading-[21px] font-normal text-[#4F4F4F] bg-[#EFEFEF] w-[250px]">
    ${book.specifications?.[0].attributes.map((atr)=> `<p class="mt-[10px] ml-5">${atr.name}</p>`).join('')} 
   
    </div>

    <div class="text-[13px] leading-[21px] font-normal text-[#242424] ml-3">
    ${book.specifications?.[0].attributes.map((atr)=> `<p class="mt-[10px] ml-5">${atr.value}</p>`).join('')} 
    </div>
</div>
</div>
    <div class="mb-12">
        <h2 class="pt-14 pb-12 text-[20px] pl-4">Mô Tả Sản Phẩm</h2>
        <p>${book.description}</p>
    </div>
</div>

${footer()}
`

}
export default productsPage