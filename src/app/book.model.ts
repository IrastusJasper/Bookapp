export class Book{
    public ImageUrl:any;
    public BookName: string;
    public AuthorName: string;
    public BookPages: number;
    public PublishingDate: any;

    constructor(ImageUrl: any,BookName: string, AuthorName: string, BookPages: number, PublishingDate: any){
        this.ImageUrl = ImageUrl
        this.BookName = BookName;
        this.AuthorName = AuthorName;
        this.BookPages = BookPages;
        this.PublishingDate = PublishingDate;
    }
}