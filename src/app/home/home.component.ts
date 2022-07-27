import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, pluck, switchMap, tap } from 'rxjs';
import { SearchService } from '../search.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  @ViewChild('searchMovie') searchMovie: any ;
  search:any =''
  showContainer:boolean = false
  showMovie:boolean  = false
  movies:any = []
  selectedMovie: any;

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
   
      fromEvent(this.searchMovie.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged(),
        map((value) => value),
        switchMap( (value: any) => {
          this.showMovie = false
          this.showContainer = false
          return this.searchService.searchByTitle(value)

        }
        )
      )
      .subscribe((res: any) => {
        if(!res.Error){
          this.showContainer = true
          this.movies = res.Search
        }
        else{
          this.showContainer = false
        }
       
      });
  }

  // onTitleChange(title:any){
  //   this.showMovie = false
  //   this.showContainer = false
  //   setTimeout(() => {
  //     console.log('title',title)
      
  //     this.searchService.searchByTitle(title).subscribe(res=>{
  //       console.log('result',res)
  //       if(!res.Error){
  //         this.showContainer = true
  //         this.movies = res.Search
  //       }
        
  //     })

      
  //   }, 2000);
    
  // }

  selectMovie(movie:any){
    this.showContainer = false
    this.showMovie = true
    this.selectedMovie = movie
  }
}



