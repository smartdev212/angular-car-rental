import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {driverinfo} from "../bookingdetail/bookingdetail.component";

@Injectable()
export class BookingsService {

  constructor(private http:HttpClient) { }

  booking:Booking;

  getBookingsByEmail(email:string){
    return this.http.get(`/api/booking/${email}`);

  }

  createBooking(booking:Booking){
    return this.http.post(`/api/booking`, booking);
  }

  setBooking(booking:Booking){
    this.booking = booking;
  }

  getBooking(){
    return this.booking;
  }

  // getUpcBooking(): Booking{
  //   return new Booking(
  //     'bookingid',
  //     '2017-08-1',
  //     '2017-08-04',
  //     'DFW',
  //     'DFW',
  //     355,
  //     'carid',
  //     'useid'
  //   );
  // }
  // getPastBooking(): Booking{
  //   return new Booking(
  //     'bookingid',
  //     '2017-01-1',
  //     '2017-01-04',
  //     'DFW',
  //     'DFW',
  //     255,
  //     'carid',
  //     'useid'
  //   );
  // }
  //
  // getCncldBooking(): Booking{
  //   return new Booking(
  //     'bookingid',
  //     '2017-04-1',
  //     '2017-04-04',
  //     'DFW',
  //     'DFW',
  //     333,
  //     'carid',
  //     'useid'
  //
  //   );
  // }
}

export class Booking{

  pickupdate:string;
  dropoffdate:string;
  pickuploc:string;
  dropoffloc:string;
  price:number;
  carid:string;
  email:string;
  driverinfo:object;

  constructor(
    pickupdate:string,
    dropoffdate:string,
    pickuploc:string,
    dropoffloc:string,
    price:number,
    carid:string,
    email:string,
    driverinfo:object
  ){
    this.pickupdate = pickupdate;
    this.dropoffdate =dropoffdate;
    this.pickuploc = pickuploc;
    this.dropoffloc = dropoffloc;
    this.price = price;
    this.carid = carid;
    this.email = email;
    this.driverinfo=driverinfo;
  }



}
