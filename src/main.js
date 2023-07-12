import { render, router } from "../lib";
import HomePage from "./pages/home";
import navigo from "navigo"
import productsPage from "./pages/products-detail";
import './style/main.css';
import BookUpdate from "./pages/admin/book-update";
import Dashboard from "./pages/admin/dashboard";
import Add from "./pages/admin/add";



var app=document.querySelector("#app")

router.on('/',function(){
  render(HomePage,app)
})
router.on('/products-detail/:id',function({data}){
  render(()=>productsPage(data.id),app)
})
router.on("/admin", function() {
  render(Dashboard, app)        
})
router.on("/add", function() {
  render(Add, app)
})
router.on("/admin/book/:id", function({data}) {
  render(() => BookUpdate(data.id), app)
})

router.resolve();

