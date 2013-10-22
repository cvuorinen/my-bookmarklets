// Adapted from http://www.imilly.com/bm.hostname

// %s is replaced with keyword(s) in Firefox & Chrome quick search.
// The check below for %-sign allows the same bookmarklet to be used
// as a quick search and clickable bookmarklet.
q = "%s";

// Check if query is empty (or starts with %)
if(!q || q[0] == "%")
    // Get text selected on current page
    q="" + 
    (window.getSelection
    ? window.getSelection()
    : document.getSelection
        ? document.getSelection()
        : document.selection.createRange().text
    );

// If query still empty, prompt user for input
if (!q)
    q = prompt("Google Site Search");

// Query is null in user cancelled, otherwise execute the search
if (q!=null)
    location="http://www.google.com/search?q=site:"
        + escape(location.hostname) + "+"
        + escape(q.replace(/\s+/g, "+"));

void(0);
