
### TO RUN

1. install latest version of angular and necessary dependencies
2. run `ng serve` and navigate to `http://localhost:4200/` to view. or just simply run `ng serve --open`

### HOW TO USE APPLICATION

- To adjust column sizes, grab and drag the border right of the column header you want to adjust.
- To search, enter term to search for and press the search button. Clear search with "Clear search" button.
- To hide columns simply click on the x to the right of the column name.
- To get back the columns, just press the "Reset Columns" button that appears once a column is hidden.
- Navigate the table and change number of rows to display with the paginator at the bottom.

### ASSUMPTIONS

- Searching will not look at values in the hidden columns, only what is visible to user.
- Searching will bring you back to page 1 rather than filtering and showing the matched criteria at whichever page you're currently on.
- Hiding and resetting columns will change the default column width back to the original width rather than keeping any modified column widths.

### JSON

- I created a python script to generate 10,001 entries. For names, numbers, cities, etc. it randomly pulls from arrays of default names, numbers, cities, etc. and will create random numbers.
- The JSON file is output alongside the script in that directory.
- A get-json.service grabs the data from this file and supplies it for the app.component.

### OTHER

- I chose to build this application in Angular as it seemed most applicable to the position that I am applying for.
- I also decided to take advantage of Angular Material in buildling the UI as Vanessa was curious of my experience with the library. Previously, I wasn't too familiar with the UI library, however, I learned about it for this project and am happy with how it turned out.
- The resizing of columns functionality is taken care of with the dynamic-column.directive.