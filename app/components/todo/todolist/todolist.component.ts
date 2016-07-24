import {Component, ChangeDetectorRef, NgZone} from '@angular/core';
import {Todo} from '../todo.model';
import MeteorComponent from '../../../shared/meteor/MeteorComponent';
import {TNSFontIconPipe} from 'nativescript-ng2-fonticon/nativescript-ng2-fonticon';

let Todos = new Mongo.Collection<Todo>('todos');

@Component({
    selector: 'todo-list',
    template: `
    <Button text="add" (tap)="add()"></Button>
    <Button text="update" (tap)="update()"></Button>
    <GridLayout columns="*, auto" rows="auto" *ngFor="let todo of todos" class="todo-item">
        <StackLayout orientation="vertical" col="0">
            <Label [text]="todo.title" fontSize="20"></Label>
            <Label [text]="todo.text" fontSize="10"></Label>
        </StackLayout>
        <Button col="1" class="fa" [text]="'fa-trash' | fonticon" (tap)="deleteTodo(todo)"></Button>
    </GridLayout>
    `,
    pipes: [TNSFontIconPipe]
})
export class TodoListComponent extends MeteorComponent {

    private todos:Mongo.Cursor<Todo>;

    constructor() {
        super();
        super.subscribe('todos', () => {
            this.todos = Todos.find({});
        }, true);
    }

    update() {
        console.log("update");
    }

    add() {
        let rnd = Math.random().toString().substr(-3);
        Todos.insert({title: 'todo ' + rnd, text: 'lorem text!'})
    }

    deleteTodo(todo:Todo) {
        Todos.remove({
            _id: todo._id
        });
    }

    ngOnInit() {
    }
}
