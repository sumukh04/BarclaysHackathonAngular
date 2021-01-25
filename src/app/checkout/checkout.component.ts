import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from './checkout.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router ,private checkoutService: CheckoutService,@Inject (DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  checkoutSuccess=()=>{
    
    // this.checkoutService.postPayment().subscribe(
    //   (res)=>{
    //     console.log(res)
    //     this.document.location.href = res["longURL"];
    //   },
    //   (err)=>{
    //     console.log(err)
    //   });

    alert("CHECKOUT SUCCESSFULL")
    sessionStorage.clear()
    this.router.navigate(['/home']);

  }
}
