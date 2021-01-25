import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedItem=[]
  totalPrice=0
  constructor() { }

  ngOnInit(): void {
    const Items = sessionStorage.getItem("selectedItem")
    if(Items!=null){
      this.selectedItem=JSON.parse(Items)
      this.selectedItem.forEach(item => {
        this.totalPrice+=item.price*item.quantity
      });
    }
    sessionStorage.setItem('totalPrice',this.totalPrice.toString())
  }
  addToCart = (product) => {
    const index = this.selectedItem.findIndex(
      (currProduct) => currProduct.bookID == product.bookID
    );
    if (index > -1) {
      this.selectedItem[index].quantity += 1;
    } else {
      let obj = product;
      obj.quantity = 1;
      this.selectedItem.push(obj);
    }
    this.setToSessionStorage()
  };
  removeFromCart = (product) => {
    const index = this.selectedItem.findIndex(
      (currProduct) => currProduct.bookID == product.bookID
    );
    if(this.selectedItem[index].quantity==1){
      this.selectedItem.splice(index, 1);
    }else{
      this.selectedItem[index].quantity -= 1;
    }
    this.setToSessionStorage()
  };
  setToSessionStorage=()=>{
    const items = JSON.stringify(this.selectedItem)
    sessionStorage.setItem("selectedItem",items)
    this.totalPrice=0
    this.selectedItem.forEach(item => {
      this.totalPrice+=item.price*item.quantity
    });
    sessionStorage.setItem('totalPrice',this.totalPrice.toString())
  }
  clearCart=()=>{
    this.selectedItem=[]
    const items = JSON.stringify(this.selectedItem)
    sessionStorage.setItem("selectedItem",items)
    this.totalPrice=0
    sessionStorage.setItem('totalPrice',this.totalPrice.toString())
  }
  totalItems=()=>{
    let items=0
    this.selectedItem.forEach(item=>{
      items+=item.quantity
    })
    return items
  }
}
