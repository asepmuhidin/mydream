import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class DosenService {
  dosenCollection:AngularFirestoreCollection<Dosen>;
  
  constructor(private afs:AngularFirestore) { }

  getDosen():Observable<any> {
    this.dosenCollection=this.afs.collection('dosen');
    return this.dosenCollection.valueChanges();
  }

}


export interface Dosen{
  fname:string,
  lname:string
}
