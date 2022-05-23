import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import {User} from '../interfaces'
import {tap, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private token = null

  constructor(private http: HttpClient) {
  }


  register(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/register', user)
  }


/*   getUserById(id: string): Observable<User> {
    return this.http.get<User>(`/api/category/users/${id}`)
  } */


/*   fetch(user: User): Observable<User[]> {
    return this.http.post<User[]>('/api/auth/register')
  } */
 

/*      fetch(params: any = {}): Observable<User[]> {
    return this.http.get<User[]>('/api/auth/register', {
      params: new HttpParams({
        fromObject: params
      })
    })
  }  */ 



  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token)
            this.setToken(token)
          }
        )
      )
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }
}
