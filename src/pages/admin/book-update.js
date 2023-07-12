import {useState, useEffect, router} from '../../../lib'
import axios from 'axios'
import HeardPage from '../../components/heard'

const BookUpdate = function(id) {
    const [book, setBook] = useState({})

    useEffect(function() {
        axios.get(`http://localhost:3000/books/${id}`)
        .then(function(dataAxios) {
            setBook(dataAxios.data)
        })
    }, [])

    const updateBook = function() {
        const name = document.querySelector("#name").value
        const original_price = document.querySelector("#original_price").value
        const description = document.querySelector("#description").value
        axios.put(`http://localhost:3000/books/${id}`, {
            ...book,
            name,
            original_price,
            description
        }).then(function(res) {
            router.navigate("/admin")
        })
    }

    useEffect(function() {
        document.querySelector("#update-form").onsubmit = function(e) {
            e.preventDefault()
            updateBook()
        }
    })

    console.log(book);

    return /*html*/`
    ${HeardPage()}
    <section class="bg-gray-100">
    <p class="text-center bg-red-100 mb-4 w-36 mx-auto rounded-lg text-[20px]">Sửa Sách</p>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            </div>
            </div>
            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form id="update-form" class="space-y-4">
            <div class="mb-4 hover:text-red-600 flex justify-between ">
            <a href="/admin" class="  bg-red-100  rounded-lg ">Back</a>
            <a href="/" class="  bg-red-100  rounded-lg ">Home</a>
            </div>
                <div>
                <label class="sr-only" for="name">Tên sách</label>
                <input value="${book.name}" class="w-full border border-gray-200 p-3 text-sm" placeholder="Tên sách" type="text" id="name" />
                </div>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label class="sr-only" for="email">Giá thành</label>
                    <input value="${book.original_price}" class="w-full border border-gray-200 p-3 text-sm" placeholder="Giá thành" type="number"
                    id="original_price" />
                </div>
                </div>
                <div>
                <label class="sr-only" for="message">Mô tả</label>
                <textarea class="w-full border border-gray-200 p-3 text-sm" placeholder="Mô tả" rows="8"
                    id="description">${book.description}</textarea>
                </div>
                <div class="mt-4">
                <button type="submit"
                    class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto">
                    <span class="font-medium">Cập nhật</span>
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
        </section>
    `
}

export default BookUpdate