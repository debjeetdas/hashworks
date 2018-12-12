import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('subscribeForm') enrollform;
  signupForm: FormGroup;
  post: any;
  subscribe = '';
  subscribedName: any;
  showCaution = false;
  constructor(private fb: FormBuilder) {
    this.signupForm = fb.group({
      subscribe: [null, Validators.compose([Validators.required])]
    });
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {}
  SubmitForm() {
    if (this.enrollform.valid) {
      const $form = $('form#subscriber'),
        url =
          'https://script.google.com/macros/s/AKfycbxxJvGtMAUD-SojeWWRIOfkeV3V03rsWzoBhTW1cnnc2VYHY-zN/exec';

      const finaldata = {
        subscribe: this.subscribedName
      };

      const jqxhr = $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        data: finaldata,
        success: function() {
          $('.footer__news__subscribe #subscriber input').val('');
          $('#subsAdded').show();
          setTimeout(function() {
            $('#subsAdded').hide();
          }, 2000);
        }
      });
    }
  }
}
