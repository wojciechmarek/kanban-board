import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Auth, getAuth } from '@angular/fire/auth';
import {
  collection,
  doc,
  Firestore,
  getFirestore,
  setDoc,
  deleteDoc,
  updateDoc,
  getDoc,
  writeBatch,
} from '@angular/fire/firestore';
import { Board, Task } from './board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  auth: Auth;
  firestore: Firestore;

  constructor(private firebaseService: FirebaseApp) {
    this.auth = getAuth(this.firebaseService);
    this.firestore = getFirestore(this.firebaseService);
  }

  /**
   * Create a new board for the currently logged user
   * @param board The board to create
   */
  async createBoard(board: Board) {
    const user = this.auth.currentUser;
    await setDoc(doc(collection(this.firestore, 'boards'), user?.uid), {
      ...board,
      uid: user?.uid,
      tasks: [{ description: 'Hello', label: 'yellow' }],
    });
  }

  /**
   * Delete a board for the currently logged user
   * @param boardId The board to delete
   */
  async deleteBoard(boardId: string) {
    await deleteDoc(doc(this.firestore, 'boards', boardId));
  }

  /**
   * Update a board for the currently logged user
   */
  async updateTasks(boardId: string, tasks: Task[]) {
    const user = this.auth.currentUser;
    await updateDoc(doc(this.firestore, 'boards', user?.uid || ''), {
      ...tasks,
    });
  }

  /**
   * Remove a task from a board
   * @param boardId The board to remove the task from
   */
  async removeTask(boardId: string, task: Task) {
    const user = this.auth.currentUser;
    await updateDoc(doc(this.firestore, 'boards', user?.uid || ''), {
      tasks: task,
    });
  }

  /**
   * Get all boards for the currently logged user
   */
  async getUserBoards() {
    const user = this.auth.currentUser;
    const userBoards = await getDoc(
      doc(this.firestore, 'boards', user?.uid || '')
    );
    return userBoards.data() as Board[];
  }

  /**
   * Run a batch write to change the priority of each board for sorting
   * @param boards The boards to sort
   */
  async sortBoards(boards: Board[]) {
    const batch = writeBatch(this.firestore);
    const user = this.auth.currentUser;
    const userBoards = await getDoc(
      doc(this.firestore, 'boards', user?.uid || '')
    );
    boards.forEach((board, index) => {
      batch.update(doc(this.firestore, 'boards', userBoards.id), {
        priority: index,
      });
    });
    await batch.commit();
  }
}
