// import { bootcampFilter } from '../config-file/bootcamp-filter';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
// import { jobList } from '../job-service';
import { jobList } from '../config-file/job-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  jobData: any = [];
  summaryText: any;
  value: any;
  public startItem;
  public endItem;
  noData = false;
  returnedArray: string[];
  term: any;
  selectedItem: any;
  searchedJobList: any = [];

  constructor(private router: Router, private route: ActivatedRoute) {}
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
    nextArrow:
    '<img class="rightarrow" src="../../assets/img/carrer/shape-copy.svg">',
    prevArrow:
      '<img class="leftarrow" src="../../assets/img/carrer/shape-copy-2.svg">',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          dots: false
        }
      }
    ]
  };
  leader = [
    {
      title: 'Thoughts from leadership',
      desc:
        'We are a “people first” company. Teamwork is what we believe in. Some of the attitude that we carry to work are: Transparency & Honesty in communication, Speaking what is right and Being prudent, empathic and compassionate.',
      id: 1,
      name: 'Gopikrishna Kannan, Co-founder & CEO'
    },
    {
      title: 'Thoughts from leadership',
      // tslint:disable-next-line:max-line-length
      desc:
        'We work in most collaborative work environment and believe in ownership against reporting. Working at Hashworks, its all about adopting skills for hybrid roles.',
      id: 1,
      name: 'Rajesh Murugan, Co-founder & Director - Operations & Delivery'
    },
    {
      title: 'Thoughts from leadership',
      // tslint:disable-next-line:max-line-length
      desc:
        'At Hashworks, we value our employees and provide an environment to learn & share, empowering them to challenge the status-quo. ',
      id: 1,
      name: 'Venkatesh S, CTO'
    },
    {
      title: 'Thoughts from leadership',
      // tslint:disable-next-line:max-line-length
      desc:
        'Challenges are part of our job, they help you learn and develop your techniques and boost your confidence. So, create value for yourself and the company by staying positive and motivated. Challenge is good!',
      id: 1,
      name: 'Shilpa Gopikrishna, Director - UX Engineering'
    },
  ];
  employee = [
    {
      title: 'Employee speak',
      desc:
        'The company\'s senior leadership have truly internalized the goals and objectives they have laid out for their folks. People feel appreciated and are recognized for their dedication and hard work. There is certainly a rare energy from the top down that is contagious and a synergy that crosses the company laterally.',
      id: 1,
      name: 'Avinash Lohumi, Lead Data Science'
    },
    {
      title: 'Employee speak',
      desc:
        'At Hashworks, everyday has been stimulating and challenging from the word Go!. The work culture is very open and conducive for great learning. There are no glass doors, the CXOs are very much approachable. There is ample opportunities to take up ownership and explore your full potential.',
      id: 2,
      name: 'Varun Holla, Lead UX/UI Designer'
    },
    {
      title: 'Employee speak',
      desc:
        'Having worked at Hashworks, I see first hand how great the work environment really is. My ideas are not stifled - rather I am challenged to seek better solutions beyond the traditional boxes most would expect. The additional learning aspect is great too.My choice was based on two things. The people and the work.',
      id: 2,
      name: 'Tarun Bonu, Data Scientist'
    }
  ];

  ngOnInit() {
    this.jobData = jobList['CAREERS'];
    this.value = 'ALL';
    if (screen.width >= 767) {
      setTimeout(() => {
        document.getElementById('button-basic').click();
        document.getElementById('button-basic').style.display = 'none';
      }, 10);
    }
    this.returnedArray = this.jobData.slice(0, 5);
    this.filterselect('all', 'ALL', '1');
  }

  pageChanged(event: PageChangedEvent): void {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.jobData.slice(this.startItem, this.endItem);
  }

  onSearch(e) {
    const tabValue = sessionStorage.getItem('activeTabCareer');
    this.jobData = jobList[tabValue];
    this.noData = false;

    if (e !== '') {
      for (let index = 0; index < this.jobData.length; index++) {
        const value = this.jobData[index].designation.toLowerCase();
        const searchValue = e.toLowerCase();
        if (value.search(searchValue) > -1) {
          this.searchedJobList.push(this.jobData[index]);
        }
      }
      if (this.searchedJobList.length !== 0) {
        this.jobData = this.searchedJobList;
        this.searchedJobList = [];
      } else {
        this.jobData = [];
        this.noData = true;
      }
    }
  }

  filterselect(param, id, index) {
    if (typeof id !== 'undefined') {
      this.value = id;
    }
    if (window.outerWidth < 768) {
      sessionStorage.setItem('activeTabCareer', 'all');
    }

    if (param === 'INTERNSHIP') {
      this.jobData = jobList['INTERNSHIP'];
      sessionStorage.setItem('activeTabCareer', 'INTERNSHIP');
    } else {
      this.jobData = jobList['CAREERS'];
      sessionStorage.setItem('activeTabCareer', 'CAREERS');
    }
    this.selectedItem = index;
  }
  applyClick(arg) {
    sessionStorage.setItem('itemClicked', arg);
    this.router.navigate(['/career/careerdetails']);
  }
}
