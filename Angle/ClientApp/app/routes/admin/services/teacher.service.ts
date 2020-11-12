import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { result } from 'lodash';
import { Observable } from 'rxjs';
import { first, flatMap, map, shareReplay } from 'rxjs/operators';
import { Teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

constructor(private http: HttpClient) { }
private baseUrl: string="api/admin/getteachers"
private addTeacherUrl : string ="api/admin/addteacher"
private deleteTeacherUrl:string="api/admin/deleteteacher/"
private updateTeacherUrl: string="api/admin/updateteacher/"

private baseUrlRegister : string= "api/admin/addteacher";
private teacher$:Observable<Teacher[]>;
register(username:string,password:string, educationdetail:string, personaldetail:string,name:string){

    return this.http.post<any>(this.baseUrlRegister,{
        username,password,educationdetail,personaldetail,name
    }).pipe(map(result=>{
        return result;
    },error=>{
        return error;
    }));
}


getTeachers():Observable<Teacher[]>{
  if(!this.teacher$){
    this.teacher$=this.http.get<Teacher[]>(this.baseUrl);
  }
  return this.teacher$;
}

  getTeacherById(id:string):Observable<Teacher>{
    return this.getTeachers().pipe(flatMap(result=>result), first(teacher=>teacher.id==id));
}

insertTeacher(newTeacher: Teacher):Observable<Teacher>
{
  return this.http.post<Teacher>(this.addTeacherUrl, newTeacher);
}


updateTeacher(id:string,editTeacher:Teacher):Observable<Teacher>{
  console.log(editTeacher);
  return this.http.put<Teacher>(this.updateTeacherUrl + id, editTeacher);
}

deleteTeacher(id:string):Observable<any>{
  return this.http.delete(this.deleteTeacherUrl+id);
}

clearCache(){
  this.teacher$=null;
}


}
