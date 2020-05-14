import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  forma: FormGroup;
  formCon: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.createForm();
  }
  intro = true;
  personInfo = false;
  con1 = false;
  con2 = false;
  users: any[] = [];
  user = {
    nombre: null,
    edad: null,
    genero: null,
    tipoDoc: null,
    numDoc: null,
    codEst: null,
    estrato: null
  };

  ngOnInit(): void {
  }

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get edadNoValido() {
    return this.forma.get('edad').invalid && this.forma.get('edad').touched;
  }
  get generoNoValido() {
    return this.forma.get('genero').invalid && this.forma.get('genero').touched;
  }
  get tipoDocNoValido() {
    return this.forma.get('tipoDoc').invalid && this.forma.get('tipoDoc').touched;
  }
  get numDocNoValido() {
    return this.forma.get('numDoc').invalid && this.forma.get('numDoc').touched;
  }
  get codEstNoValido() {
    return this.forma.get('codEst').invalid && this.forma.get('codEst').touched;
  }
  get estratoNoValido() {
    return this.forma.get('estrato').invalid && this.forma.get('estrato').touched;
  }

  get numDoc2NoValido() {
    return this.formCon.get('numDoc').invalid && this.formCon.get('numDoc').touched;
  }
  get codEst2NoValido() {
    return this.formCon.get('codEst').invalid && this.formCon.get('codEst').touched;
  }
  get nombreTestigoNoValido() {
    return this.formCon.get('nombreTestigo').invalid && this.formCon.get('nombreTestigo').touched;
  }
  get numDocTestigoNoValido() {
    return this.formCon.get('numDocTestigo').invalid && this.formCon.get('numDocTestigo').touched;
  }
  get emailNoValido() {
    return this.formCon.get('email').invalid && this.formCon.get('email').touched;
  }

  createForm() {
    this.forma = this.fb.group({
      nombre: ['', [ Validators.required, Validators.minLength(5)]],
      edad: ['', [Validators.required, Validators.min(10)]],
      genero: ['' , Validators.required],
      tipoDoc: ['', Validators.required],
      numDoc: ['', [Validators.required, Validators.min(1000)]],
      codEst: ['', [Validators.required, Validators.min(100)]],
      estrato: ['', Validators.required]
    });

    this.formCon = this.fb.group({
      numDoc:  ['', [Validators.required, Validators.min(1000)]],
      codEst: ['', [Validators.required, Validators.min(100)]],
      nombreTestigo: ['', [ Validators.required, Validators.minLength(5)]],
      numDocTestigo: ['', [Validators.required, Validators.min(1000)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }

  displayPersonForm() {
    window.scrollTo(0,0);
    let hideIntro = document.getElementById("intro");
    hideIntro.style.animation = "fadeOut 1s ease-out";
    setTimeout( () => {
      this.intro = false;
      this.personInfo = true;
      let person = document.getElementById("person");
      person.style.animation = "fadeIn 1s ease-out";
    }, 1000);
  }

  save () {
    if(this.forma.invalid) {
      return Object.values( this.forma.controls ).forEach (control => {
        control.markAsTouched();
      });
    } else {
      window.scrollTo(0,0);
      this.setUserData();
      let person = document.getElementById("person");
      person.style.animation = "fadeOut 1s ease-out";
      setTimeout( () => {
        this.personInfo = false;
        this.showLetter();
      }, 1000);
    }
  }

  setUserData() {
    this.user.nombre  = this.forma.get('nombre').value;
    this.user.edad  = this.forma.get('edad').value;
    this.user.genero  = this.forma.get('genero').value;
    this.user.tipoDoc  = this.forma.get('tipoDoc').value;
    this.user.numDoc  = this.forma.get('numDoc').value;
    this.user.codEst  = this.forma.get('codEst').value;
    this.user.estrato  = this.forma.get('estrato').value;
    console.log(this.user);
  }

  showLetter() {
    if(this.user.edad >= 18) {
      this.con2 = true;
      let con2 = document.getElementById("con2");
      con2.style.animation = "fadeIn 1s ease-out";
    } else {
      this.con1 = true;
      let con1 = document.getElementById("con1");
      con1.style.animation = "fadeIn 1s ease-out";
    }
  }

  saveCon() {
    if(this.formCon.invalid) {
      return Object.values( this.formCon.controls ).forEach (control => {
        control.markAsTouched();
      });
    }
  }

}
