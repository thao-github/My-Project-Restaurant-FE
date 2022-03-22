import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DishesService} from "../../service/dishes.service";
import {Dishes} from "../../model/Dishes";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs";

@Component({
  selector: 'app-dishes-add',
  templateUrl: './dishes-add.component.html',
  styleUrls: ['./dishes-add.component.css']
})
export class DishesAddComponent implements OnInit {
  dish!: Dishes;
  status!: string;
  selectedImg: any;
  imgUrl = '';

  @ViewChild('uploadFile', {static:true}) public avatarDom!: ElementRef;

  dishForm = new FormGroup({
    'id': new FormControl(null, Validators.required),
    'name': new FormControl(null, Validators.required),
    'price': new FormControl(null, Validators.required),
    'description': new FormControl(null, Validators.required),
    'img': new FormControl()
  })

  constructor(private dishService: DishesService,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  submit() {
      if (this.selectedImg != null) {
        const filePath = this.selectedImg.name;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, this.selectedImg).snapshotChanges().pipe(
          finalize(() => (fileRef.getDownloadURL().subscribe(url => {
              this.imgUrl = url;
              console.log(url);
            })))
        ).subscribe();
      }
    }

  uploadFileImg() {
    this.selectedImg = this.avatarDom?.nativeElement.files[0];
    this.submit();
  }

  create() {
    const dish = this.dishForm.value;
    dish.img= this.imgUrl
    console.log("dish --->", dish)
    this.dishService.saveDish(dish).subscribe((data) => {
      this.dish = data;
      alert('Dish ADDED.')
    })
  }

}
