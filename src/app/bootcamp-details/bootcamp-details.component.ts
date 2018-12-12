import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { bootcampDetails } from '../config-file/bootcamp-details';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { SharedService } from '../shared.service';
declare var $: any;

@Component({
  selector: 'app-bootcamp-details',
  templateUrl: './bootcamp-details.component.html',
  styleUrls: ['./bootcamp-details.component.scss']
})
export class BootcampDetailsComponent implements OnInit {
   topic = [];
   bootcamp: any;
   topics: any = [];
   courseDetails: any = [];
   introductionList: any = [];
   faqDetails: any = [];
   noPause = true;
   myInterval = 4500;
   activeSlideIndex = 0;
   oneAtATime: Boolean = true;
   title: string;
   desc: string;
   selectedItem: any;


  signupForm: FormGroup;
  post: any;
  fname = '';
  lname = '';
  email = '';
  mobileNumber = '';
  firstName: any;
  lastName: any;
  emailID: any;
  mobileno: any;
  showCaution = false;
  modalRefe: any;
  hidePopup: boolean;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    // fade: true,
    cssEase: 'linear',
    arrows: false,
    mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: 'unslick'
    }
  ]
};
modalRef: BsModalRef;
constructor(private fb: FormBuilder, private modalService: BsModalService) {
  this.signupForm = fb.group(
    {
      'fname': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      'lname': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'mobileNumber': [null, Validators.compose([Validators.required, Validators.maxLength(10)])],
    }
  );
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
ngOnInit() {
    sessionStorage.getItem('type'); // card index
     sessionStorage.getItem('tabIndex');
     const tabName = sessionStorage.getItem('tabName');
    const flag = 0;
    // const caseStudyTypes = sessionStorage.getItem('param');
    if (tabName === 'all') {
    const bootCampDetails = Object.keys(bootcampDetails.bootcampList);
      const arr = [];
      bootCampDetails.forEach(element => {
        Array.prototype.push.apply(arr, bootcampDetails.bootcampList[element]);
      });
      this.bootcamp = arr;
      this.courseDetails = bootcampDetails.bootcampList[tabName][0].courseList;
      this.topics = bootcampDetails.bootcampList[tabName][flag].slides;
      this.introductionList = bootcampDetails.bootcampList[tabName][flag].introduction;
      this.faqDetails = bootcampDetails.bootcampList[tabName][flag].faq;
    } else {
      this.bootcamp = new Array(bootcampDetails.bootcampList[tabName][flag]);
      this.courseDetails = bootcampDetails.bootcampList[tabName][flag].courseList;
      this.topics = bootcampDetails.bootcampList[tabName][flag].slides;
      this.introductionList = bootcampDetails.bootcampList[tabName][flag].introduction;
      this.faqDetails = bootcampDetails.bootcampList[tabName][flag].faq;
    }
}
SubmitForm() {
  // tslint:disable-next-line:triple-equals
  if (this.firstName == '' || this.firstName == undefined || this.lastName === '' || this.lastName == undefined || this.emailID == ''
  || this.emailID === undefined || this.mobileno === '' || this.mobileno === undefined) {
    this.showCaution = true;
  } else {
    const $form = $('#bootcamp'),
      url = 'https://script.google.com/macros/s/AKfycbx1KiB2kwynTFNmSD6pzuFNbKwR6b8FovnYoA0xatozrxqLxwU/exec';

    const finaldata = {
      'fname': this.firstName,
      'lname': this.lastName,
      'email': this.emailID,
      'mobile': this.mobileno,
    };
    const jqxhr = $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      data: finaldata,
      success: function () {
        $('#openpopup').trigger('click');
        $('.modal-body #bootcamp input').val('');
        document.getElementById('closePopUp').click();
      }
    });
  }
}
openModala(template1) {
  this.modalRefe = this.modalService.show(template1);
}
}
