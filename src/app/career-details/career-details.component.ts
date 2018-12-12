import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { jobList } from '../config-file/job-service';

declare var $: any;

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.scss']
})
export class CareerDetailsComponent implements OnInit {
  jobList: any = [];
  taskList: any = [];
  signupForm: FormGroup;
  post: any;
  fname = '';
  lname = '';
  email = '';
  type = '';
  mobileNumber = '';
  firstName: any;
  lastName: any;
  emailID: any;
  mobileno: any;
  showCaution = false;
  modalRef: any;
  showFileName = 'Upload Resume';
  fileSize: any;
  isSelected: boolean;

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.signupForm = fb.group(
      {
        'fname': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
        'lname': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'mobileNumber': [null, Validators.compose([Validators.required, Validators.maxLength(10)])],
        'type': [null],
      }
    );
  }
  submitted = false;
  onSubmit() { this.submitted = true; }

  ngOnInit() {
    const activeTab = sessionStorage.getItem('activeTabCareer');
    const itemNumber = parseInt(sessionStorage.getItem('itemClicked'), 10);
    this.jobList = new Array(jobList[activeTab][itemNumber]);
    this.taskList = jobList['taskList'];
    this.type = this.jobList[0].designation;
    document.getElementById('filename1').innerText = 'Upload Resume';
  }

  changeFileName(e) {
    const x = e.currentTarget.files[0].name;
    document.getElementById('filename1').innerHTML = x;
    this.fileSize = e.currentTarget.files.length;
    this.isSelected = true;
    if ((this.fileSize > 0)) {
      document.getElementById('closed').classList.add('opened');
    }

  }
  disable() {
    document.getElementById('attach').classList.add('pointevent');
  }
  reset(file) {
    if (!file.value) {
      file.click();
    } else {
      file.value = '';
      document.getElementById('filename1').innerText = 'Upload Resume';
      this.isSelected = false;
    }
    this.fileCheck(file.value);
  }
  fileCheck(val) {
    if (!(val.length > 0)) {
      console.log('das');
      document.getElementById('closed').classList.remove('opened');
    }
  }
  openModal(template) {
    this.modalRef = this.modalService.show(template);
  }

}
