import { Component,OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import {DosenService, Dosen} from './services/dosen.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AleshaGeeks';
  dosen :Observable<any>;
  dosenDoc:AngularFirestoreDocument<any>;

  listDosen:Observable<any[]>;
  dosenCollection:AngularFirestoreCollection<any[]>;
  
  snapshot:any;
  //dosenCollection:AngularFirestoreCollection<any>=this.afs.collection('dosen')l
  //dosens=this.dosenCollection.valueChanges();

constructor(private afs:AngularFirestore,private titleService:Title){}

ngOnInit(){  
  this.setTitle(this.title);
  this.dosenDoc=this.afs.doc<Dosen>('dosen/ZObRW4KqjflBDmloBaTh')
  this.dosen=this.dosenDoc.valueChanges().map(function(key){
    console.log(key);
  });
  
  console.log(this.dosen);
}

public setTitle(newTitle:string){
  this.titleService.setTitle(newTitle);
}

}
export interface Dosen{
  fname:string,
  lname:string
}