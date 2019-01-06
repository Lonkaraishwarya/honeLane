import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Notes';
  name: string;
  private bodyText: string;
  items: string[];
 
  constructor(private modalService: ModalService) {
  }
  
  ngOnInit() {
  }

  addNewNote(): string {
   return this.name ;
  }

  addNewNotes() {

    let note: Note = new note();
    note.setname(this.name);
    this.odalService.save(name).subscribe(data => {
     this.modalService.go('name');

    }, error => {
      window.alert(error._body);
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
  public deleteNote(id: string) {
    //.alert("Are You Sure You want to delete?");
    // console.log("Id "+ id);
    this.modalService.delete(id).subscribe(_data => {
    });
    //  console.log("delete");
  }

}
