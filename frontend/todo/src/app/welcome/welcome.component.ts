// package org.devtech.solution.app

// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// @ComponentScan(
  // value='org.devtech.solution.app')

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// public class SpringBootFirstWebApplication implements SomeInterface
export class WelcomeComponent implements OnInit {

  // String message='Welcome Message';
  message = 'Welcome Message';
  name = '';

  // public SpringBootFirstWebApplication(){}

  // ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  // void init(){}
  ngOnInit() {
    console.log(this.message);
    // this.message = 5; CE:Type '5' is not assignable to type 'string'
   // console.log(this.route.snapshot.params['name']);
   this.name = this.route.snapshot.params['name'];
  }

}

export class Class1 {}
export class Class2 {}

