import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild('content') content: ElementRef;
  public downloadPDF() {
    let doc = new jsPDF();

    // let pageHeight = doc.internal.pageSize.height;

    // // Before adding new content
    // let y = 500 // Height position of new content
    // if (y >= pageHeight)
    // {
    //   doc.addPage();
    //   y = 0 // Restart height position
    // }
    // doc.text(x, y, "value");

    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };

    let content = this.content.nativeElement;

    console.log(this.content);
    console.log(content);

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'height' : 20,
      'margin': 1,
      'elementHandlers': specialElementHandlers,
      'pagesplit': true
    });

    doc.save('test.pdf');
  }

  // public downloadPDF1() {
  //   var doc = new jsPDF('p', 'pt', 'letter');
  //       doc.page = 1; // use this as a counter.
  //       var totalPages = 10; // define total amount of pages
  //       // HEADER
  //       doc.setFontSize(20);//optional
  //       doc.setTextColor(40);//optional
  //       doc.setFontStyle('normal');//optional
  //       doc.text("Report", 50, 22);// set your margins
  //       // FOOTER
  //       var str = "Page " + doc.page  + " of " +  totalPages;
  //       doc.setFontSize(10);// optional
  //       doc.text(str, 50, doc.internal.pageSize.height - 10);//key is the interal pageSize function


  //       // Add Page content
  //       .....


  //       //Add new page and increase page count
  //       doc.addPage();
  //       doc.page ++;
  //       //Begin process all over again.
  // }

  public savepdf() {
    var doc = new jsPDF();
    var requiredPages = 4
    for(var i = 0; i < requiredPages; i++){
    doc.addPage();
    // doc.text(20, 100, 'Some Text.');
    }
    doc.save('hello.pdf');
  }
}
