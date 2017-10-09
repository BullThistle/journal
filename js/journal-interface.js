var Journal = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var journalEntry = new Journal(title, entry);
    console.log(journalEntry.title)
    $('#journal').append("<li><h3>" + journalEntry.title + "</h3></li>");
    $('#journal').append("<li>" + journalEntry.entry + "</li>");
    $('#journal').append("<li> This journal entry has " + journalEntry.words() + " words, " + journalEntry.vowels() + " vowels and " + journalEntry.consonants() + " consonants.</li>");
  });
});
