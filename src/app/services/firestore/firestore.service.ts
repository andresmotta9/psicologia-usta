import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }
    
    public createCat(
      data: {
      nombre: null,
      apellido: null,
      edad: 0,
      genero: null,
      tipoDoc: null,
      numDoc: 0,
      codEst: 0,
      estrato: null,
      formPadres_numeroDocumentoEstudiante: 0,
      formPadres_codigoEstudiante: 0,
      formPadres_nombreTestigo: null,
      formPadres_numDocTestigo: 0,
      formPadres_email: null,
      formPadres_contacNum: 0
      formEstudiante_numeroDocumentoEstudiante: 0,
      formEstudiante_codigoEstudiante: 0,
      formEstudiante_nombreTestigo: null,
      formEstudiante_numDocTestigo: 0,
      formEstudiante_email: null,
      formEstudiante_contacNum: 0,
      cuestionario1_p1: 0,
      cuestionario1_p2: 0,
      cuestionario1_p3: 0,
      cuestionario1_p4: 0,
      cuestionario1_p5: 0,
      cuestionario1_p6: 0,
      cuestionario1_p7: 0,
      cuestionario1_p8: 0,
      cuestionario1_p9: 0,
      cuestionario1_p10: 0,
      cuestionario1_p11: 0,
      cuestionario1_p12: 0,
      cuestionario1_p13: 0,
      cuestionario1_p14: 0,
      cuestionario1_p15: 0,
      cuestionario2_p1: 0,
      cuestionario2_p2: 0,
      cuestionario2_p3: 0,
      cuestionario2_p4: 0,
      cuestionario2_p5: 0
    }
      ) {
      return this.firestore.collection('users').add(data);
    }

    public getUsers() {
      return this.firestore.collection('users').snapshotChanges();
    }
}
