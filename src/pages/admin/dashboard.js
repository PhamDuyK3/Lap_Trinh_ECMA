import {useEffect, useState} from '../../../lib'
import HeardPage from '../../components/heard';


const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(function() {
        fetch('http://localhost:3000/books')
        .then(function(res) {
            return res.json()
        })
        .then(function(dataFetch) {
            setData(dataFetch)
        });
    }, [])

    useEffect(() => {
        const deleteBtns = document.querySelectorAll('.delete-btn')
        deleteBtns.forEach((btn) => {
            btn.addEventListener('click', function() {
                console.log(btn.dataset.id);
                const id = btn.dataset.id
                deleteBook(id)
            })
        })
    })

    const deleteBook = function(id) {
        fetch(`http://localhost:3000/books/${id}`, {
            method: "DELETE",
        })
        .then(() => alert("bạn chắc chắn muốn xóa sản phẩm"))
    }
    return `
    ${HeardPage()}
    <table class="border-separate border border-slate-400 ...">
    <div class="text-center bg-fuchsia-600 w-36 mx-auto rounded-lg "> <p class="text-center    mb-4 mt-4 text-[20px]">Dashboard</p></div>
   
    <div class="mb-4 flex justify-between">
                <a href="/" class=" text-red-600 hover:bg-sky-700 ml-9 bg-red-100 w-20 text-center items-center rounded-lg ">Home</a>
                <a href="add" class=" text-red-600 hover:bg-sky-700 ml-4 mr-9 w-24 text-center items-center rounded-lg bg-red-100 ">Thêm New</a>
    </div>
        <thead>
            <tr>
                <th class="border border-slate-300 w-[5%]">STT</th>
                <th class="border border-slate-300 w-[10%]">Tên sản phẩm</th>
                <th class="border border-slate-300 w-[10%]">Giá</th>
                <th class="border border-slate-300 w-[10%]">Hình ảnh</th>
                <th class="border border-slate-300 w-[5%]">Thao tác</th>
            </tr>
        </thead>
        <tbody>
        ${data.map((book, index) => `
        <tr>
            <td class="border border-slate-300">${index + 1}</td>
            <td class="border border-slate-300">
                <a class="underline hover:text-red-600 text-black" href="/admin/book/${book.id}">${book.name}</a>
            </td>
            <td class="border text-center border-slate-300">${book.original_price}</td>
            <td class="border border-slate-300">
                <img src="${book.images?.[0].base_url}"/>
            </td>
            
            <td class="border text-center  border-slate-300">
                <button data-id="${book.id}" class="bg-red-500 hover:bg-sky-700 m-auto rounded-md p-2 delete-btn">Xoá</button>
            </td>
        </tr>
        `).join('')}
            
        </tbody>
        </table>
    `
}

export default Dashboard