import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, flatMap, shareReplay } from 'rxjs/operators';
import { Course } from '../interfaces/course';
import { TCourse } from '../interfaces/tcourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  private getMyCoursesUrl: string = "api/teacher/getmycourses/"
  private getContentUrl: string = "api/teacher/getcontentcourse/"
  private addContentUrl: string = "api/teacher/addcontent"
  private deleteContentUrl: string = "api/teacher/deletecontent/"


  private course$: Observable<TCourse[]>;
  private myCourse$:Observable<Course[]>

  getMyCourses(id: string): Observable<Course[]> {
    this.myCourse$ = this.http.get<Course[]>(this.getMyCoursesUrl + id);
    return this.myCourse$;
  }

  getContentCourse(id: string, cid: number): Observable<TCourse[]> {
    if (!this.course$) {
      this.course$ = this.http.get<TCourse[]>(this.getContentUrl + id + '/' + cid);
    }
    return this.course$;
  }

  addContent(newContent: TCourse) {
    return this.http.post<TCourse>(this.addContentUrl, newContent);
  }

  deleteContent(id: number, cid: number): Observable<any> {
    return this.http.delete(this.deleteContentUrl + id + '/' + cid);
  }

  clearCache() {
    this.course$ = null;
  }
}
