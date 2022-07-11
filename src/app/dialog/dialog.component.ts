import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  ratingsList = ["0 (Never watch again!)", "1 (Bad)", "2 (Ok)", "3 (Good)", "4 (Very Good)", "5 (Excellent)"];
  movieForm !: FormGroup;
  actionBtn : string = "Save"

  constructor(private formBuilder : FormBuilder,
     private api : ApiService, 
     private dialogRef : MatDialogRef<DialogComponent>, 
     @Inject(MAT_DIALOG_DATA) public editData :any ) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      Title : ['', Validators.required],
      Director : ['', Validators.required],
      Genre : ['', Validators.required],
      Year : ['', Validators.required],
      Ratings : ['', Validators.required],
      Review : ['', Validators.required],
      Date : ['', Validators.required],
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.movieForm.controls['Title'].setValue(this.editData.Title);
      this.movieForm.controls['Director'].setValue(this.editData.Director);
      this.movieForm.controls['Genre'].setValue(this.editData.Genre);
      this.movieForm.controls['Year'].setValue(this.editData.Year);
      this.movieForm.controls['Ratings'].setValue(this.editData.Ratings);
      this.movieForm.controls['Review'].setValue(this.editData.Review);
      this.movieForm.controls['Date'].setValue(this.editData.Date);
    }
  }
addMovie(){
 if(!this.editData){
  if(this.movieForm.valid){
    this.api.postMovie(this.movieForm.value)
    .subscribe({
      next:(res)=>{
        alert("Movie added successfully ");
        this.movieForm.reset();
        this.dialogRef.close('save');
      },
      error:()=>{
        alert("Error while adding the movie")
      }
    })
  }
}else{
    this.updateMovie()
  }
 }

 updateMovie(){
  this.api.putMovie(this.movieForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Movie Updated Successfully");
      this.movieForm.reset();
      this.dialogRef.close('update');   
    },
    error:()=>{
      alert("Error while updating the movie");
    }
  })
}
}
