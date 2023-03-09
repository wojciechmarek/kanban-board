import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Board } from '../board.model';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit, OnDestroy {
  boards: Board[] = [];
  sub: Subscription | undefined;

  constructor(public boardService: BoardService) {}

  async ngOnInit(): Promise<void> {
    this.boards = await this.boardService.getUserBoards();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }

  createBoard() {
    this.boardService.createBoard({
      id: '',
      title: 'New board',
      priority: 0,
      tasks: [],
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
