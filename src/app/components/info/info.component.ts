import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, AfterContentInit {

  forma: FormGroup;
  formCon: FormGroup;
  formCon2: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.createForm();
  }

  intro = true;
  personInfo = false;
  con1 = false;
  con2 = false;
  dismiss = false;
  test1 = false;
  test2 = false;
  users: any[] = [];
  question = 0;
  user = {
    nombre: null,
    apellido: null,
    edad: null,
    genero: null,
    tipoDoc: null,
    numDoc: null,
    codEst: null,
    estrato: null,
    formPadres: {
      numeroDocumentoEstudiante: null,
      codigoEstudiante: null,
      nombreTestigo: null,
      numDocTestigo: null,
      email: null,
      contacNum: null
    },
    formEstudiante: {
      numeroDocumentoEstudiante: null,
      codigoEstudiante: null,
      nombreTestigo: null,
      numDocTestigo: null,
      email: null,
      contacNum: null
    },
    cuestionario1: {
      p1: null,
      p2: null,
      p3: null,
      p4: null,
      p5: null,
      p6: null,
      p7: null,
      p8: null,
      p9: null,
      p10: null,
      p11: null,
      p12: null,
      p13: null,
      p14: null,
      p15: null
    },
    cuestionario2: {
      p1: null,
      p2: null,
      p3: null,
      p4: null,
      p5: null
    }
  };

  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
  }

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get apellidoNoValido() {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
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

  get contacNumNoValido() {
    return this.formCon.get('contacNum').invalid && this.formCon.get('contacNum').touched;
  }

  get numDocEstNoValido() {
    return this.formCon2.get('numDocEst').invalid && this.formCon2.get('numDocEst').touched;
  }
  get codEstEstNoValido() {
    return this.formCon2.get('codEstEst').invalid && this.formCon2.get('codEstEst').touched;
  }
  get nombreTestigoEstNoValido() {
    return this.formCon2.get('nombreTestigoEst').invalid && this.formCon2.get('nombreTestigoEst').touched;
  }
  get numDocTestigoEstNoValido() {
    return this.formCon2.get('numDocTestigoEst').invalid && this.formCon2.get('numDocTestigoEst').touched;
  }
  get emailEstNoValido() {
    return this.formCon2.get('emailEst').invalid && this.formCon2.get('emailEst').touched;
  }
  get contacNumEstNoValido() {
    return this.formCon2.get('contacNumEst').invalid && this.formCon2.get('contacNumEst').touched;
  }

  createForm() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      edad: ['', [Validators.required, Validators.min(10)]],
      genero: ['', Validators.required],
      tipoDoc: ['', Validators.required],
      numDoc: ['', [Validators.required, Validators.min(1000)]],
      codEst: ['', [Validators.required, Validators.min(100)]],
      estrato: ['', Validators.required],
    });

    this.formCon = this.fb.group({
      numDoc: ['', [Validators.required, Validators.min(1000)]],
      codEst: ['', [Validators.required, Validators.min(100)]],
      nombreTestigo: ['', [Validators.required, Validators.minLength(5)]],
      numDocTestigo: ['', [Validators.required, Validators.min(1000)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      contacNum: ['', [Validators.required, Validators.min(3000000000)]]
    });

    this.formCon2 = this.fb.group({
      numDocEst: ['', [Validators.required, Validators.min(1000)]],
      codEstEst: ['', [Validators.required, Validators.min(100)]],
      nombreTestigoEst: ['', [Validators.required, Validators.minLength(5)]],
      numDocTestigoEst: ['', [Validators.required, Validators.min(1000)]],
      emailEst: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      contacNumEst: ['', [Validators.required, Validators.min(3000000000)]]
    })
  }

  public displayPersonForm() {
    const hideIntro = document.getElementById('intro');
    hideIntro.style.animation = 'fadeOut 1s ease-out';
    setTimeout(() => {
      this.personInfo = true;
      this.intro = false;
      window.scrollTo(0, 0);
      setTimeout(() => {
        const person = document.getElementById('person');
        person.style.animation = 'fadeIn 1s ease-out';
        person.style.opacity = '1';
      }, 100);
    }, 500);
  }

  public save() {
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.setUserData();
      const person = document.getElementById('person');
      person.style.animation = 'fadeOut 1s ease-out';
      setTimeout(() => {
        window.scrollTo(0, 0);
        this.showLetter();
      }, 500);
    }
  }

  setUserData() {
    this.user.nombre = this.forma.get('nombre').value;
    this.user.apellido = this.forma.get('apellido').value;
    this.user.edad = this.forma.get('edad').value;
    this.user.genero = this.forma.get('genero').value;
    this.user.tipoDoc = this.forma.get('tipoDoc').value;
    this.user.numDoc = this.forma.get('numDoc').value;
    this.user.codEst = this.forma.get('codEst').value;
    this.user.estrato = this.forma.get('estrato').value;
  }

  setFormParents() {
    this.user.formPadres.numeroDocumentoEstudiante = this.formCon.get('numDoc').value;
    this.user.formPadres.codigoEstudiante = this.formCon.get('codEst').value;
    this.user.formPadres.nombreTestigo = this.formCon.get('nombreTestigo').value;
    this.user.formPadres.numDocTestigo = this.formCon.get('numDocTestigo').value;
    this.user.formPadres.email = this.formCon.get('email').value;
    this.user.formPadres.contacNum = this.formCon.get('contacNum').value;
  }

  setFormEstudent() {
    this.user.formEstudiante.numeroDocumentoEstudiante = this.formCon2.get('numDocEst').value;
    this.user.formEstudiante.codigoEstudiante = this.formCon2.get('codEstEst').value;
    this.user.formEstudiante.nombreTestigo = this.formCon2.get('nombreTestigoEst').value;
    this.user.formEstudiante.numDocTestigo = this.formCon2.get('numDocTestigoEst').value;
    this.user.formEstudiante.email = this.formCon2.get('emailEst').value;
    this.user.formEstudiante.contacNum = this.formCon2.get('contacNumEst').value;
  }

  public showLetter() {
    if (this.user.edad >= 18) {
      this.con2 = true;
      this.personInfo = false;
      setTimeout(() => {
        const con2 = document.getElementById('con2');
        con2.style.animation = 'fadeIn 1s ease-out';
        con2.style.opacity = '1';
      }, 100);
    } else {
      this.con1 = true;
      this.personInfo = false;
      setTimeout(() => {
        const con1 = document.getElementById('con1');
        con1.style.animation = 'fadeIn 1s ease-out';
        con1.style.opacity = '1';
      }, 100);
    }
  }

  public saveCon() {
    if (this.formCon.invalid) {
      return Object.values(this.formCon.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.setFormParents();
      const con1 = document.getElementById('con1');
      con1.style.animation = 'fadeOut 1s ease-out';
      setTimeout(() => {
        this.con2 = true;
        this.con1 = false;
        window.scrollTo(0, 0);
        setTimeout(() => {
          const con2 = document.getElementById('con2');
          con2.style.animation = 'fadeIn 1s ease-out';
          con2.style.opacity = '1';
        }, 100);
      }, 500);
    }
  }
  public saveCon2() {
    if (this.formCon2.invalid) {
      return Object.values(this.formCon2.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.setFormEstudent();
      const con2 = document.getElementById('con2');
      con2.style.animation = 'fadeOut 1s ease-out';
      setTimeout(() => {
        this.test1 = true;
        this.con2 = false;
        window.scrollTo(0, 0);
        setTimeout(() => {
          const test1 = document.getElementById('test1');
          test1.style.animation = 'fadeIn 1s ease-out';
          test1.style.opacity = '1';
        }, 100);
      }, 500);
    }
  }

  public dismissForm(con) {
    const actualCon = document.getElementById(con);
    actualCon.style.animation = 'fadeOut 1s ease-out';
    this.intro = true;
    setTimeout(() => {
      this.con1 = false;
      this.con2 = false;
      window.scrollTo(0, 0);
      const intro = document.getElementById('intro');
      intro.style.animation = 'fadeIn 1s ease-out';
      intro.style.opacity = '1';
      const modal = document.getElementById('modal-done');
      modal.style.display = 'block';
    }, 500);
  }

  public test1Done() {
    let complete = true;
    // tslint:disable-next-line: forin
    for (const question in this.user.cuestionario1) {
      if (this.user.cuestionario1[question] === null) {
        this.question = parseInt(question.split("p")[1]);
        complete = false;
      }
    }

    if (complete) {
      const test1 = document.getElementById('test1');
      test1.style.animation = 'fadeOut 1s ease-out';
      setTimeout(() => {
        this.test2 = true;
        this.test1 = false;
        window.scrollTo(0, 0);
        setTimeout(() => {
          const dismiss = document.getElementById('test2');
          dismiss.style.animation = 'fadeIn 1s ease-out';
          dismiss.style.opacity = '1';
        }, 100);
      }, 500);
    } else {
      const modal = document.getElementById('modal-test');
      modal.style.display = 'block';
    }
  }

  public test2Done() {
    let complete = true;
    // tslint:disable-next-line: forin
    for (const question in this.user.cuestionario2) {
      if (this.user.cuestionario2[question] === null) {
        this.question = parseInt(question.split("p")[1]);
        complete = false;
      }
    }
    if (complete) {
      this.saveData();
      const test2 = document.getElementById('test2');
      test2.style.animation = 'fadeOut 1s ease-out';
      this.intro = true;
      setTimeout(() => {
        this.test2 = false;
        window.scrollTo(0, 0);
        const intro = document.getElementById('intro');
        intro.style.animation = 'fadeIn 1s ease-out';
        intro.style.opacity = '1';
        const modal = document.getElementById('modal-done');
        modal.style.display = 'block';
      }, 500);
    } else {
      const modal = document.getElementById('modal-test');
      modal.style.display = 'block';
    }
  }

  public closeTest() {
    const modal = document.getElementById('modal-done');
    modal.style.display = 'none';
    this.clearUser();
  }

  public closeModal() {
    const modal = document.getElementById('modal-test');
    modal.style.display = 'none';
    this.clearUser();
  }

  saveData() {
    this.http.post<any>('https://psicologia-usta-database.herokuapp.com/users', this.user).subscribe(data => {
    
    })
  }

  test11(value) {
    this.user.cuestionario1.p1 = value;
  }
  test12(value) {
    this.user.cuestionario1.p2 = value;
  }
  test13(value) {
    this.user.cuestionario1.p3 = value;
  }
  test14(value) {
    this.user.cuestionario1.p4 = value;
  }
  test15(value) {
    this.user.cuestionario1.p5 = value;
  }
  test16(value) {
    this.user.cuestionario1.p6 = value;
  }
  test17(value) {
    this.user.cuestionario1.p7 = value;
  }
  test18(value) {
    this.user.cuestionario1.p8 = value;
  }
  test19(value) {
    this.user.cuestionario1.p9 = value;
  }
  test110(value) {
    this.user.cuestionario1.p10 = value;
  }
  test111(value) {
    this.user.cuestionario1.p11 = value;
  }
  test112(value) {
    this.user.cuestionario1.p12 = value;
  }
  test113(value) {
    this.user.cuestionario1.p13 = value;
  }
  test114(value) {
    this.user.cuestionario1.p14 = value;
  }
  test115(value) {
    this.user.cuestionario1.p15 = value;
  }
  test21(value) {
    this.user.cuestionario2.p1 = value;
  }
  test22(value) {
    this.user.cuestionario2.p2 = value;
  }
  test23(value) {
    this.user.cuestionario2.p3 = value;
  }
  test24(value) {
    this.user.cuestionario2.p4 = value;
  }
  test25(value) {
    this.user.cuestionario2.p5 = value;
  }

  private clearUser() {
    this.forma.reset();
    this.formCon.reset();
    this.formCon2.reset();
  }

}
