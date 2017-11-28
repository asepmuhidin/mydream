import { Component } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AleshaGeeks';
  dosenCollection:AngularFirestoreCollection<any>=this.afs.collection('dosen');
  dosens=this.dosenCollection.valueChanges();

constructor(private afs:AngularFirestore,private titleService:Title){

}
ngOnInit(){
  this.setTitle(this.title);
}

public setTitle(newTitle:string){
  this.titleService.setTitle(newTitle);
}

}
