import { Component, OnInit } from '@angular/core';
// import { POKEMONS } from './moke-pokemon-list';
// import { FormBuilder } from '@angular/forms';
import { todo } from './todo';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `My todo List`,
})
export class AppComponent implements OnInit {
  title = 'exercice';
  public todoList: todo[] = [];
  public todoForm!: FormGroup;
  // PokemonList= POKEMONS; //Pokemon:Pokemon[]=POKEMONS
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }
  add() {
    if (this.todoForm && this.todoForm.valid ) {
      const title: string = this.todoForm.get('title')!.value as string;
      const newTodo: todo = {
        id: this.todoList.length,
        title: title,
        completed: false,
      };
      this.todoList.push(newTodo);
      this.todoForm.reset();
      console.log("Sucessssssss!")
      console.log(this.todoList);
    }
  }

  update() {
// this.todoList.complete|undefined =!this.todoList.complete,
  }

  delete() {//supprimerLeDernierElement
    this.todoList.pop();
  }

display(){
console.log("Votre liste todo"+this.todoList);
}
}
