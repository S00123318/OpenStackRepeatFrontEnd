import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  ratingsList = ["0 (Never watch again!)", "1 (Bad)", "2 (Ok)", "3 (Good)", "4 (Very Good)", "5 (Excellent)"];
  movieForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      Title : ['', Validators.required],
      Director : ['', Validators.required],
      Genre : ['', Validators.required],
      Year : ['', Validators.required],
      Ratings : ['', Validators.required],
      Review : ['', Validators.required],
      Date : ['', Validators.required],
    })
  }
addMovie(){
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
}
}
