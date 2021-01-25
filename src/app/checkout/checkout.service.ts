import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }
  headerDict = {
    'X-Api-Key': 'd82016f839e13cd0a79afc0ef5b288b3', 
    'X-Auth-Token': '3827881f669c11e8dad8a023fd1108c2',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS"//for corse policy error
  }
requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };

  payload = {
    purpose: 'FIFA 16',
    amount: '2500',
    phone: '9999999999',
    buyer_name: 'John Doe',
    redirect_url: 'http://www.example.com/redirect/',
    send_email: true,
    webhook: 'http://www.example.com/webhook/',
    send_sms: true,
    email: 'foo@example.com',
    allow_repeated_payments: false}

    postPayment=()=>{
      return this.http.post('https://www.instamojo.com/api/1.1/payment-requests/',this.payload,this.requestOptions)
    }
}
