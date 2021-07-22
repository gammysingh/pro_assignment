import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Matellio Assignment';
  photoList = [];
  comparisonTable = [];
  objectId = {};
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.photoListData();
  }

  // For getting the list of photos from API
  photoListData() {
    try {
      this.api.getPhotos().subscribe(res => {
        this.photoList = res.slice(0, 8);
        this.photoList.forEach((el) => {
          this.objectId[el.id] = true;
        });
      }, err => {
        console.log(err);
      })
    } catch (error) {
      console.log(error);

    }
  }

  // Add photo's details in table
  addPhotoDetails(id) {
    try {
      let index = this.photoList.findIndex((obj) => obj.id === id);
      this.comparisonTable.push(this.photoList[index]);
      this.objectId[id] = !this.objectId[id]
    } catch (error) {
      console.log(error);
    }
  }

  // Remove photo's details from table
  removePhotoDetails(id) {
    try {
      let index = this.comparisonTable.findIndex((obj) => obj.id === id);
      this.comparisonTable.splice(index, 1);
      this.objectId[id] = !this.objectId[id]
    } catch (error) {
      console.log(error);
    }
  }


}
