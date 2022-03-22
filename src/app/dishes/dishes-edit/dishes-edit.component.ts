import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DishesService} from "../../service/dishes.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Dishes} from "../../model/Dishes";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-dishes-edit',
  templateUrl: './dishes-edit.component.html',
  styleUrls: ['./dishes-edit.component.css']
})
export class DishesEditComponent implements OnInit {
  dishForm!: FormGroup;
  id!: number;
  dish!: Dishes;
  status!: string;
  selectedImg: any;
  imgUrl = '';


  @ViewChild('uploadFile', {static:true}) public avatarDom!: ElementRef;

  constructor(private dishService: DishesService,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.findById(this.id);
    })
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


  findById(id: number){
    return this.dishService.findById(id).subscribe((dish) =>{
      console.log(dish);
      this.dishForm = new FormGroup({
        'id': new FormControl(dish.id),
        'name': new FormControl(dish.name),
        'price': new FormControl(dish.price),
        'description': new FormControl(dish.description),
        'img': new FormControl(),
      })
    });
  }


  update(id: number) {
    const dish = this.dishForm.value;
    dish.img = this.imgUrl;
    this.dishService.editDish(id, dish).subscribe(()=>{
      alert('Dish UPDATED.')
    }, error => {
      console.log(error)
    })
  }
}
