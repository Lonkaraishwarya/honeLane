export class ModalService {
  private modals: any[] = [];
    notes: any;


  public delete(id: string) {
    const endPoint = this.noteUrl + id;
    // Returns response
    return this.http.delete(endPoint)
      .map(res => {
        const res1 = res.json();
        this.notes.deletenote(res1.response);
      }
      );
  }

}
