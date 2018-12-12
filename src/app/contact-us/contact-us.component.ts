import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  modalRef: any;
  signupForm: FormGroup;
  post: any;
  Name = '';
  Company = '';
  Email = '';
  Contact = '';
  fullName: any;
  companyName: any;
  emailID: any;
  mobileno: any;
  showCaution = false;

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.signupForm = fb.group(
      {
        'Name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
        'Company': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
        'Email': [null, Validators.compose([Validators.required, Validators.email])],
        'Contact': [null, Validators.compose([Validators.required, Validators.maxLength(10)])],
      }
    );
  }

  ngOnInit() {
  }

  SubmitForm() {
    if (this.fullName === '' || this.fullName === undefined || this.companyName === ''
     || this.companyName === undefined || this.emailID === ''
    || this.emailID === undefined || this.mobileno === '' || this.mobileno === undefined) {
      this.showCaution = true;
    } else {
      const $form = $('#contactForm'),
        url = 'https://script.google.com/macros/s/AKfycbx3hZq9Y4yZQL8yQLv-kfdoGWFemYLVgvDc4YQTRMQUE8nrdVA/exec';

      const finaldata = $form.serialize();

      const jqxhr = $.ajax({
          url: url,
          method: 'GET',
          dataType: 'json',
          data: finaldata,
          success: function() {
            $('#openpopup').trigger('click');
            $('.hashworks--form input').val('');
            $('.hashworks--form textarea').val('');
          }
        });
    }
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template);
  }
}
