import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Coupon } from 'src/app/models/coupons';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {

  public coupons: Coupon[];

  constructor(
    private couponsServices: CouponsService,
    private navParams: NavParams,
    private navController: NavController


  ) { 
    this.coupons = [];
  }

  ngOnInit() {
    this.couponsServices.getCoupons().then((coupons: Coupon[])=>{
      this.coupons = coupons;
      console.log(this.coupons);
    })
  }

  changeActive(coupon: Coupon){
    coupon.active = !coupon.active;
  }

  goToCard(){
    this.navParams.data["coupons"]= this.coupons.filter
    (c => c.active);
    this.navController.navigateForward('card-coupon');
  }

}
