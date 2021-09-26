import { makeAutoObservable } from "mobx";
import Products from "../Products";

class ProductStore {
  filterText = "";
  inStockOnly = false;
  products = Products;

  product = {
    category : "",
    price : "",
    stocked : false,
    name : "",
  }
  
  

  constructor(){
    makeAutoObservable(this);
  }

  //action
  
  init = ()=>{
    this.product = {
      category : "",
      price : "",
      stocked : false,
      name : "",
    }
  }
  
  handleFilterTextChange(filterText){
    this.filterText = filterText;
  }

  handleInStockChange(inStockOnly){
    this.inStockOnly = inStockOnly;
  }

  handleChange = (value, object)=>{
    this.product = {
      ...this.product,
      [object] : value,
    }
  }

  inputClick = (object)=>{
    this.product = {
      ...this.product,
      [object] : "",
    }
  }

  handleClick = (product)=>{
    this.product = product;
  }

  handleAdd = ()=>{
    let price = "$"+this.product.price
    this.product = {
      ...this.product, price: price
    }
    this.products = this.products.concat(this.product).sort(function(a,b) {
      return a.category > b.category ? -1 : a.category < b.category ? 1: 0;
    })
    this.init();
  }

  handleDel = ()=>{
    this.products = this.products.filter((product)=>product.name !== this.product.name)
    this.init();
  }

  handleMod = ()=>{
    let indexNumber = "";
    let price = "$"+this.product.price
    this.products.map((product, index)=>(product.name === this.product.name)
    ? indexNumber = index
    : indexNumber
    )
    if (indexNumber===""){
      alert("수정할 item을 클릭하세요.")
      return
    }else {
      const new_product = {
        category : this.product.category,
        price : price,
        stocked : this.product.stocked,
        name : this.product.name,
      } 
      this.products.splice(indexNumber,1,new_product)
    }
  }
}



export default new ProductStore(); //singletone: 객체 1개만 생성해서 사용