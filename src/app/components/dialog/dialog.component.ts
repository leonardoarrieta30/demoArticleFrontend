import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ConsultArticlesService} from "../../services/consult-articles.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private consultArticleService: ConsultArticlesService,  private dialog: MatDialog) {}

  onSubmit() {
    this.consultArticleService.update(this.data.articleId, this.data.article).subscribe();
  }
  closeDialog(){
    this.dialog.closeAll();
  }
}
