import { Injectable, inject, signal } from "@angular/core";
import { updateProfile, Auth, signInWithEmailAndPassword, user, signOut } from "@angular/fire/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Observable, from } from "rxjs";
import { UserInterface } from "./user.interface";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    firebaseAuth = inject(Auth); 
    user$ = user(this.firebaseAuth)
    currentUserSig = signal<UserInterface | null | undefined>(undefined) 
    private http = inject(HttpClient); // For fetching user role from server

    register(email: string, username: string, password: string): 
    Observable<void>{
    const promise = createUserWithEmailAndPassword(
        this.firebaseAuth,
         email,
          password
        ).then(response => updateProfile(response.user, {displayName: username}))
         
        return from(promise)
    }

    login(email: string, password: string): Observable<void>{
        const promise = signInWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password,
        ).then( () => {});
        return from(promise)
    }

    logout(): Observable<void>{
        const promise = signOut(this.firebaseAuth);
        return from(promise);
    }

    getUserRole(): UserInterface | null {
        const currentUser = this.firebaseAuth.currentUser;
        return currentUser ? { email: currentUser.email!, username: currentUser.displayName! } : null;
  }

}
    
        
