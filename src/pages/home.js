import Navagation from "../components/navigotion"
import footer from "../components/footer"
import HeardPage from "../components/heard"
import { useState,useEffect } from "../../lib"
function HomePage(){
    const [data, setData] = useState([])

    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            setData(data)
        });
    }, [])
    return `
    ${HeardPage()}
    <div class="max-w-[1792px] mx-auto mb-12">
        <div class=" max-w-[1300px] mx-auto flex gap-6 mt-4">
        ${Navagation()}
                
               <div class="grid grid-cols-4 gap-8">
               ${data.map(function(book, index) {
                return /*html*/`
                <a href="/products-detail/${book.id}?id_cate=${book.categories?.id}">
                    <div>
                        <img class=" h-[200px]" src="${book.images?.[0].medium_url}" alt="">
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
                        <span class="text-[13px] text-[#C7C7C7]">Đã bán 1000+</span>
                    </div>
                    <div class="flex gap-2 items-center mt-2">
                        <p class="text-[16px] text-[#FF424E] font-[500]">${book.current_seller?.price} ₫</p>
                        <p class="rounded-[2px] bg-[#FFF0F1] border-solid border-2 border-[#FF424E] text-[#FF424E] w-[32px] text-[11px] pl-[2px]">-23%</p>
                    </div>
                </a>
                `
            }).join('')}
               </div>
            </div>
        </div>
    </div>
    
    ${footer()}
    `
}
export default HomePage
