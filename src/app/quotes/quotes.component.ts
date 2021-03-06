import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  upvotes = 0;
  downvotes = 0;
  isComplete= true;

  quotes: Quotes[]=[

    new Quotes(0,'Albert','Education','“Try not to become a man of success, but rather try to become a man of value.”',0,0,'Willard'),
    new Quotes(1,'Albert','Education','“Try not to become a man of success, but rather try to become a man of value.”',0,0,'Willard'),
    new Quotes(2,'Albert','Education','“Try not to become a man of success, but rather try to become a man of value.”',0,0,'Willard'),
    new Quotes(3,'Albert','Education','“Try not to become a man of success, but rather try to become a man of value.”',0,0,'Willard'),

  ]
  getCurrentId(){
    return this.quotes.length +1
  }
  newQuote(quote:any) {
    quote.id = this.getCurrentId();
    quote.author= quote.author;
    quote.title=quote.title;
    quote.quote=quote.quote;
    quote.submitedBy=quote.submitedBy;
    this.quotes.unshift(quote)
  }
  upVote(quote:any){
    quote.upvote= quote.upvote+1;
    console.log('quote.upvote')
  }
  downVote(quote:any){
    quote.downvote = quote.downvote+1;
  }
  quoteDelete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
