(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/journal.js":2}],2:[function(require,module,exports){
function Journal(title, entry){
  this.title = title;
  this.entry = entry;
}

Journal.prototype.words = function() {
  return this.entry.trim().split(/\s+/).length;
};

Journal.prototype.vowels = function() {
  return (this.entry.match(/[aeiou]/gi) || []).length;
};

Journal.prototype.consonants = function() {
  return (this.entry.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
};

exports.entryModule = Journal;

},{}]},{},[1]);
